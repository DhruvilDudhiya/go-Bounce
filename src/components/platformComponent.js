
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class platformComponent extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__platformComponent"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.scene.matter.add.gameObject(this.gameObject, { isStatic: true });
		console.log(this.gameObject);
		this.gameObject.setScale(0.7);
		// this.createSpikeAbove();
		switch (this.gameObject.body.id) {
			case 3:
				this.gameObject.angle = 45;
				break;
			case 4:
				// this.gameObject.angle = 0;
				break;
			default:
				break;
		}
		if (this.gameObject.body.id == 3) {
			// this.gameObject.angle = 0;
			// this.spike.angle = -90;
		}
		if (this.gameObject.body.id == 5) {
			// this.spike.angle = -40;
		}
		/* END-USER-CTR-CODE */
	}

	/** @returns {platformComponent} */
	static getComponent(gameObject) {
		return gameObject["__platformComponent"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;

	/* START-USER-CODE */

	// Write your code here.
	createSpikeAbove() {
		// Create a spike GameObject above the platform
		this.spike = this.scene.matter.add.sprite(this.gameObject.x, this.gameObject.y - this.gameObject.displayHeight / 2 - 20, 'spike');
		this.spike.setStatic(true); // Make the spike static (if needed)
		this.spike.setScale(0.7);
		console.log(this.spike);
		// this.spike.setBody({
		// 	type: "rectangle",
		// 	width: 80,
		// 	height: 80,
		// });

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
