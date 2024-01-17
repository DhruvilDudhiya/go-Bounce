
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// background
		this.add.image(546, 960, "background");

		// container_platforms
		const container_platforms = this.add.container(0, 0);

		// level_txt
		const level_txt = this.add.text(123, 70, "", {});
		level_txt.setOrigin(0.5, 0.5);
		level_txt.text = "Level:1";
		level_txt.setStyle({ "fontSize": "40px" });

		this.container_platforms = container_platforms;
		this.level_txt = level_txt;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	container_platforms;
	/** @type {Phaser.GameObjects.Text} */
	level_txt;

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();
		this.levelM = new LevelManager(this);
		this.inputEnabled = false;
		this.ballSpeed = 8;
		this.jumpForce = 10;
		this.level = 12;
		this.level_txt.text = "Level :" + this.level;
		this.isGameOver = false
		this.gameOn = true;
		this.isOnPlatform = false;
		this.input.on('pointerdown', this.jump, this);
		this.particles = this.add.particles('ball');
		this.setLevel(this.level);
		this.matter.world.on("collisionstart", function (e, b1, b2) {
			this.handleCollision(e, b1, b2);
		}, this);
		this.matter.world.on("collisionend", function (e, b1, b2) {
			if ((b1.label === "Circle Body" && b2.label === "stick") ||
				(b1.label === "stick" && b2.label === "Circle Body")) {
				this.isOnPlatform = false;
			}
			// if ((b1.label === "ring1" && b2.label === "Circle Body") ||
			// 	(b1.label === "Circle Body" && b2.label === "ring1")) {
			// 	this.isOnPlatform = false;
			// 	this.isOnRing = false;
			// }
		}, this);
	}
	jump = () => {
		if (this.isOnPlatform) {
			this.ball.setVelocity((this.ball.body.velocity.x > 0) ? this.ballSpeed : -this.ballSpeed * 1, - this.jumpForce * 2);
		}
		if (this.isOnRing) {
			console.log("ring jump");
			const ringJumpForce = 15;
			this.ballSpeed = 3;
			this.jumpForce = ringJumpForce;
			this.ball.setVelocity(0);
			this.ball.setVelocity(-this.ballSpeed, -this.jumpForce);
		}
	}
	// tweenPlatform = () => {
	// 	const platform = b1.gameObject;
	// 	console.log(platform);
	// 	const newAngle = platform.angle + 90;
	// 	this.tweens.add({
	// 		targets: platform,
	// 		originY: 0.2,
	// 		angle: newAngle,
	// 		duration: 500,
	// 		yoyo: true
	// 	});
	// };
	handleCollision = (e, b1, b2) => {
		if ((b1.label === "stick" && b2.label === "Circle Body") ||
			(b1.label === "Circle Body" && b2.label === "stick")) {
			this.isOnPlatform = true;
			this.isOnRing = false;
			} else if ((b1.label === "spike" && b2.label === "Circle Body") ||
				(b1.label === "Circle Body" && b2.label === "spike")) {
				this.createParticleEffect();
				this.exploreEmitter.start();
				this.exploreEmitter.explode(5, this.ball.x, this.ball.y);
				this.setGameOver();
			} else if ((b1.label === "goal" && b2.label === "Circle Body") ||
				(b1.label === "Circle Body" && b2.label === "goal")) {
				if (this.gameOn) {
					this.level++;
					this.gameOn = false;
				}
				setTimeout(() => {
					this.gotoNextLevel(this.level);
				}, 2000);
			}
			if ((b1.label === "ring1" && b2.label === "Circle Body") ||
				(b1.label === "Circle Body" && b2.label === "ring1")) {
				this.isOnPlatform = false;
				this.isOnRing = true;
			}
		}
		createParticleEffect() {
			this.particles = this.add.particles("particle");
			this.exploreEmitter = this.particles.createEmitter({
				// scale : {start : 0.7 , end : 0.4},
				speed: { min: 1000, max: 1500 },
				blendMode: 'ADD',
				lifespan: { min: 500, max: 2000 },
				gravityY: 9000,
			});
			// this.exploreEmitter.gravityY = 1000; // Set gravityY property directly on the emitter
		}
		setGameOver = () => {
			this.isGameOver = true;
			this.ball.destroy();
			setTimeout(() => {
				this.scene.start("Level");
			}, 300);
		}
		gotoNextLevel = (level) => {
			this.container_platforms.removeAll(true);
			this.ball.destroy();
			this.gameOn = true;
			this.setLevel(level);
		}
		setLevel = (currentLevel) => {
			this.level_txt.text = "Level :" + currentLevel;
			const config = this.levelM.levelConfig[currentLevel];
			if (config) {
				config.platforms.forEach(platform => this.createStaticPlatform(platform.x, platform.y, platform.angle, platform.scaleX, platform.scaleY ,platform.originX , platform.originY));
				config.spikes.forEach(spikes => this.createSpike(spikes.x, spikes.y, spikes.angle, spikes.scaleX, spikes.scaleY));
				if (config.goal) this.createGoal(config.goal.x, config.goal.y, config.goal.angle);
				if (config.basket) this.createBasket(config.basket.x, config.basket.y);
				if (config.ball) this.addBall(config.ball.x, config.ball.y);
				if (config.ring) this.createRing(config.ring.x, config.ring.y);
			}

		}
		createStaticPlatform(x, y, angle, scaleX, scaleY , originX, originY) {
			this.platform = this.matter.add.image(x, y, "stick", null, {
				shape: this.cache.json.get('box').stick,
				label: "Rectangle Body",
				friction: 0.1,
			}).setOrigin(originX, originY);
			this.platform.setScale(scaleX, scaleY);
			this.platform.setAngle(angle);
			// this.platform.visible = false;
			this.container_platforms.add(this.platform);
		}
		addBall = (x, y) => {
			this.ball = this.matter.add.image(x, y, "ball", null, {
				label: "circleBody",
			});
			this.ball.setCircle(50);
			this.ball.setScale(0.6, 0.6);
			// this.ball.visible = false;
		}
		createSpike(x, y, angle, scaleX, scaleY) {
			this.spike1 = this.matter.add.image(x, y, "spike", null, {
				shape: this.cache.json.get('box1').spike,
				isSensor: true,
			}).setAngle(angle);
			this.spike1.setScale(scaleX, scaleY);
			// this.spike1.visible = false;
			this.container_platforms.add(this.spike1);
		}
		createBasket = (x, y, angle) => {
			this.basket = this.matter.add.image(x, y, "bucket", null, {
				shape: this.cache.json.get('box1').box
			}).setScale(1, 1).setAngle(angle);
			// this.basket.visible = false;
			this.container_platforms.add(this.basket);
		}
		createRing = (x, y) => {
			this.ringGroup = this.add.group(); // Create a group to contain the ring and spikes
			this.ring = this.matter.add.image(x, y, "ring1", null, {
				shape: this.cache.json.get('ring-2').ring1,
			}).setScale(1.5, 1.5);
			this.ring.visible = false;
			this.spike1 = this.matter.add.image(x, y + 100, "spike", null, {
				shape: this.cache.json.get('box1').spike,
			}).setAngle(80);
			// this.spike1.visible = false;
			this.ringGroup = this.add.group([this.ring, this.spike1]);
			this.rotateRing();
		}
		rotateRing = () => {
			this.tweens.add({
				targets: this.ringGroup.getChildren(), // Rotate the group instead of just the ring
				angle: 360,
				duration: 3000,
				repeat: -1,
			});
		}
		goalTween = () => {
			this.tweens.add({
				targets: this.goal,
				y: this.goal.y + 10,
				duration: 50,
			});
		}
		createGoal(x, y, angle) {
			this.goal = this.matter.add.image(x, y, "stick", null, {
				angle: angle,
				isStatic: true,
				label: "goal",
			});
			this.goal.setScale(0.6, 0.5);
			this.goal.visible = false;
			this.container_platforms.add(this.goal);
		}
		poleTween = (target, angle) => {
			this.tweens.add({
				targets: [target],
				angle: angle,
				duration: 700,
				yoyo: true,
			});
		}
		update() {
			if (!this.isGameOver) {
				if (this.ball.y > 1880) {
					this.scene.start("Level")
				}
			}
			if (Phaser.Geom.Intersects.RectangleToRectangle(this.ball.getBounds(), this.ring.getBounds())) {
				console.log("intersect");
				this.isOnPlatform = false;
				this.isOnRing = true;
			}
			// const spikeOffsetY = -190;
			// const angle = Phaser.Math.DegToRad(this.ring.angle);
			// const spike1X = this.ring.x + spikeOffsetY * Math.sin(angle);
			// const spike1Y = this.ring.y - spikeOffsetY * Math.cos(angle);
			// this.spike1.setPosition(spike1X, spike1Y);

		}
		/* END-USER-CODE */
	}

/* END OF COMPILED CODE */

// You can write more code here
