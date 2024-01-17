class LevelManager {
	constructor(oScene) {
		this.levelConfig = {
			1: {
				platforms: [
					{ x: 790, y: 535, angle: -18, scaleX: 1, scaleY: 1 , originX: 0.5, originY: 0.5},
					{ x: 300, y: 800, angle: 20, scaleX: 1, scaleY: 1 , originX: 0.5, originY: 0.5},
					{ x: 800, y: 1110, angle: -16, scaleX: 1, scaleY: 1 , originX: 0.5, originY: 0.5},
					{ x: 300, y: 1400, angle: 20, scaleX: 1, scaleY: 1 , originX: 0.5, originY: 0.5},
				],
				spikes: [
					// { x: 465, y: 800, angle: 25 , scaleX: 1, scaleY: 1},
					// { x: 460, y: 1400, angle: 25, scaleX: 1, scaleY: 1 },
				],
				goal: { x: 800, y: 1620, angle: 0 },
				basket: { x: 800, y: 1635 },
				ball: { x: 900, y: 40 }
			},
			2: {
				platforms: [
					{ x: 790, y: 520, angle: -20, scaleX: 1, scaleY: 1 , originX: 0.5, originY: 0.5},
					{ x: 320, y: 820, angle: 25, scaleX: 1.15, scaleY: 1, originX: 0.5, originY: 0.5 },
					{ x: 800, y: 1110, angle: -20, scaleX: 1, scaleY: 1, originX: 0.5, originY: 0.5 },
					{ x: 330, y: 1400, angle: 25, scaleX: 1, scaleY: 1 , originX: 0.5, originY: 0.5},
				],
				spikes: [
					{ x: 470, y: 840, angle: 25, scaleX: 1, scaleY: 1 },
				],
				goal: { x: 800, y: 1720, angle: 0 },
				basket: { x: 800, y: 1735 },
				ball: { x: 900, y: 40 }
			},
			3: {
				platforms: [
					{ x: 790, y: 440, angle: -15, scaleX: 1, scaleY: 1 , originX: 0.5, originY: 0.5},
					{ x: 350, y: 750, angle: 15, scaleX: 1, scaleY: 1, originX: 0.5, originY: 0.5 },
					{ x: 800, y: 1070, angle: -15, scaleX: 1, scaleY: 1 , originX: 0.5, originY: 0.5},
					{ x: 330, y: 1270, angle: 15, scaleX: 1, scaleY: 1 , originX: 0.5, originY: 0.5},
				],
				spikes: [
					{ x: 480, y: 730, angle: 15, scaleX: 1, scaleY: 1 },
					{ x: 470, y: 1250, angle: 15, scaleX: 1, scaleY: 1 },
				],
				goal: { x: 650, y: 1720, angle: 0 },
				basket: { x: 650, y: 1735 },
				ball: { x: 900, y: 40 }
			},
			4: {
				platforms: [
					{ x: 790, y: 440, angle: -15 ,scaleX: 1, scaleY: 1 , originX: 0.5, originY: 0.5},
					{ x: 400, y: 780, angle: 15 ,scaleX: 1, scaleY: 1, originX: 0.5, originY: 0.5},
					{ x: 800, y: 1070, angle: -15 , scaleX: 1, scaleY: 1, originX: 0.5, originY: 0.5},
					{ x: 330, y: 1270, angle: 15 , scaleX: 1, scaleY: 1, originX: 0.5, originY: 0.5},
				],
				spikes: [
					{ x: 310, y: 700, angle: 15 , scaleX: 1, scaleY: 1 },
					{ x: 670, y: 1050, angle: -15, scaleX: 1, scaleY: 1 },
				],
				goal: { x: 650, y: 1720, angle: 0 },
				basket: { x: 650, y: 1735 },
			    ball : { x: 900, y:40}
			},
			5: {
				platforms: [
					{ x: 810, y: 440, angle: -15 ,scaleX: 1, scaleY: 1 , originX: 0.5, originY: 0.5},
					{ x: 370, y: 710, angle: 15 ,scaleX: 1, scaleY: 1, originX: 0.5, originY: 0.5},
					{ x: 800, y: 1070, angle: -15 , scaleX: 1, scaleY: 1, originX: 0.5, originY: 0.5},
					{ x: 370, y: 1370, angle: 15 , scaleX: 1, scaleY: 1, originX: 0.5, originY: 0.5},
				],
				spikes: [
					// { x: 310, y: 700, angle: 15 , scaleX: 1, scaleY: 1 },
					{ x: 500, y: 690, angle: 20 , scaleX: 1, scaleY: 1},
					{ x: 670, y: 1050, angle: -15, scaleX: 1, scaleY: 1 },
					{ x: 500, y: 1355, angle: 20 , scaleX: 1, scaleY: 1},
				],
				goal: { x: 650, y: 1720, angle: 0 },
				basket: { x: 650, y: 1735 },
			    ball : { x: 900, y:40}
			},
			6: {
				platforms: [
					{ x: 790, y: 410, angle: -15 ,scaleX: 1, scaleY: 1 , originX: 0.5, originY: 0.5},
					{ x: 360, y: 720, angle: 15 ,scaleX: 1, scaleY: 1, originX: 0.5, originY: 0.5},
					{ x: 840, y: 1070, angle: -15 , scaleX: 1, scaleY: 1, originX: 0.5, originY: 0.5},
					{ x: 350, y: 1270, angle: 15 , scaleX: 1, scaleY: 1, originX: 0.5, originY: 0.5},
				],
				spikes: [
					{ x: 270, y: 640, angle: 15 , scaleX: 1, scaleY: 1 },
					{ x: 490, y: 700, angle: 18 , scaleX: 1, scaleY: 1},
					// { x: 710, y: 1050, angle: -15, scaleX: 1, scaleY: 1 },
					{ x: 480, y: 1250, angle: 15 , scaleX: 1, scaleY: 1},
				],
				goal: { x: 850, y: 1720, angle: 0 },
				basket: { x: 850, y: 1735 },
			    ball : { x: 900, y:40}
			},
			7: {
				platforms: [
					{ x: 790, y: 420, angle: -15 ,scaleX: 1, scaleY: 1 , originX: 0.5, originY: 0.5},
					{ x: 380, y: 760, angle: 15 ,scaleX: 1, scaleY: 1, originX: 0.5, originY: 0.5},
					{ x: 800, y: 1080, angle: -15 , scaleX: 1, scaleY: 1, originX: 0.5, originY: 0.5},
					{ x: 330, y: 1330, angle: 15 , scaleX: 1, scaleY: 1, originX: 0.5, originY: 0.5},
				],
				spikes: [
					{ x: 280, y: 680, angle: 15 , scaleX: 1, scaleY: 1 },
					{ x: 510, y: 740, angle: 15 , scaleX: 1, scaleY: 1},
					{ x: 310, y: 1270, angle: 15, scaleX: 1, scaleY: 1 },
					{ x: 900, y: 990, angle: -10 , scaleX: 1, scaleY: 1},
				],
				goal: { x:850, y: 1720, angle: 0 },
				basket: { x: 850, y: 1735 },
			    ball : { x: 900, y:40}
			},
			8: {
				platforms: [
					{ x: 790, y: 420, angle: -15 ,scaleX: 1, scaleY: 1, originX: 0.5, originY: 0.5 },
					{ x: 380, y: 760, angle: 15 ,scaleX: 1, scaleY: 1, originX: 0.5, originY: 0.5},
					{ x: 800, y: 1070, angle: -15 , scaleX: 1, scaleY: 1, originX: 0.5, originY: 0.5},
					{ x: 330, y: 1320, angle: 15 , scaleX: 1, scaleY: 1, originX: 0.5, originY: 0.5},
				],
				spikes: [
					{ x: 280, y: 680, angle: 15 , scaleX: 1, scaleY: 1 },
					{ x: 510, y: 740, angle: 20 , scaleX: 1, scaleY: 1},
					{ x: 680, y: 1050, angle: -15, scaleX: 1, scaleY: 1 },
					{ x: 910, y: 990, angle: -10 , scaleX: 1, scaleY: 1},
					{ x: 780, y: 1120, angle: 40, scaleX: 1, scaleY: 1 },
				],
				goal: { x: 750, y: 1720, angle: 0 },
				basket: { x: 750, y: 1735 },
			    ball : { x: 900, y:40}
			},
			9: {
				platforms: [
					{ x: 800, y: 420, angle: -15 ,scaleX: 1, scaleY: 1 , originX: 0.5, originY: 0.5},
					{ x: 330, y: 760, angle: 20 ,scaleX: 1, scaleY: 1, originX: 0.5, originY: 0.5},
					{ x: 800, y: 1070, angle: -15 , scaleX: 1, scaleY: 1, originX: 0.5, originY: 0.5},
					{ x: 340, y: 1300, angle: 20 , scaleX: 1, scaleY: 1, originX: 0.5, originY: 0.5},
				],
				spikes: [
					{ x: 240, y: 670, angle: 20 , scaleX: 1, scaleY: 1 },
					{ x: 460, y: 750, angle: 20 , scaleX: 1, scaleY: 1},
					{ x: 420, y: 830, angle: -40 , scaleX: 1, scaleY: 1},
					{ x: 675, y: 1050, angle: -15, scaleX: 1, scaleY: 1 },
					{ x: 900, y: 990, angle: -10 , scaleX: 1, scaleY: 1},
					{ x: 480, y: 1290, angle: 20, scaleX: 1, scaleY: 1 },
				],
				goal: { x: 650, y: 1720, angle: 0 },
				basket: { x: 650, y: 1735 },
			    ball : { x: 900, y:40}
			},
			10: {
				platforms: [
					{ x: 340, y: 340, angle: 20, scaleX: 1, scaleY: 1 , originX: 0.5, originY: 0.5},
					{ x: 800, y: 650, angle: -40, scaleX: 1, scaleY: 1 , originX: 0.5, originY: 0.5},
					{ x: 280, y: 900, angle: 30, scaleX: 1, scaleY: 1 , originX: 0.5, originY: 0.5},
					{ x: 580, y: 1180, angle: 10, scaleX: 1, scaleY: 1 , originX: 0.5, originY: 0.5},
					{ x: 980, y: 1430, angle: -55, scaleX: 1, scaleY: 1 , originX: 0.5, originY: 0.5},
				],
				spikes: [
					{ x: 510, y: 1115, angle: 10, scaleX: 1, scaleY: 1 },
				],
				ball: { x: 400, y: 40 },
				goal: { x: 550, y: 1745, angle: 0 },
				basket: { x: 550, y: 1760 },
			},
			11 : {
				platforms: [
					{ x: 740, y: 540, angle: -20, scaleX: 1.8, scaleY: 0.8, originX: 0.5, originY: 0.5 },
					{ x: 300, y: 840, angle: 25, scaleX: 1.8, scaleY: 0.8 , originX: 0.5, originY: 0.5},
					{ x: 800, y: 1195, angle: -25, scaleX: 1.4, scaleY: 0.8 , originX: 0.5, originY: 0.5},
					{ x: 300, y: 1390, angle: 25, scaleX: 1, scaleY: 1 , originX: 0.5, originY: 0.5},
				],
				spikes: [
					{x : 540, y: 565, angle: -20, scaleX: 1, scaleY: 1},
					{x : 630, y: 530, angle: -20, scaleX: 1, scaleY: 1},
					{x : 630, y: 620, angle: 40, scaleX: 1, scaleY: 1},
					{x : 500, y: 890, angle: 30, scaleX: 1, scaleY: 1},
					{x : 700, y: 1275, angle: 30, scaleX: 1, scaleY: 1},
					{x : 650, y: 1215, angle: -25, scaleX: 1, scaleY: 1},
				],
				ball: { x: 870, y: 40 },
				goal: { x: 650, y: 1760, angle:0},
				basket: { x: 650, y: 1760}
			},
			12: {
				platforms: [
					{ x: 840, y: 340, angle: -20, scaleX: 1.3, scaleY: 0.8 , originX: 0.5, originY: 0.5},
					{ x: 540, y: 1240, angle: 20, scaleX: 1.3, scaleY: 0.8 , originX: 0.5, originY: 0.5},
				],
				spikes: [],
				ball: { x: 800, y: 40 },
				ring : {x:400,y:800},
				// platformTween: { x: 840, y: 340, angle: 20, scaleX: 1.3, scaleY: 0.8, duration: 1000 },
			},
			13 : {
				ball: { x: 470, y: 40 },
				platforms: [
					{ x: 840, y: 340, angle: -20, scaleX: 1.3, scaleY: 0.8 , originX: 0.5, originY: 0.5},
					
				],
				spikes: [],

			}

		}

	}
}