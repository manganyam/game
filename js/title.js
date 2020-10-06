//title

class Title extends Phaser.Scene {
	constructor() {
		super("bootGame");
	}

	preload() {
		this.load.image("background", "img/background.png");
		//this.load.image("character",  "img/character.png");
		this.load.image("cherry", "img/cherry.png");
		//this.load.image("blob", "img/blob.png");

		this.load.spritesheet("char", "img/spr_character.png", {
			frameWidth: 16,
			frameHeight: 16
		});
		this.load.spritesheet("blob", "img/spr_blob.png", {
			frameWidth: 16,
			frameHeight: 16
		});
	}

	create() {
		this.add.text(20, 20, "Loading game...");
		this.scene.start("playGame");
	}
}