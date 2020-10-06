//level map

class Level_map extends Phaser.Scene {
	constructor() {
		super("playGame");
	}

	create() {
		this.background = this.add.image(0, 0, "background");
		this.background.setOrigin(0, 0);
		this.background.setScale(9*scaleRatio);


		this.char = this.add.sprite((config.width)/2 - 60, (config.height)/2, "char");
		//this.char_die = this.add.sprite(config.width/2 - 60, config.height/2, "character");
		this.cherry = this.add.image((config.width*scaleRatio)/2, (config.height*scaleRatio)/2, "cherry");
		this.blob = this.add.sprite((config.width)/2 + 60, (config.height)/2, "blob");
		//blobDie

		this.char.setScale(9*scaleRatio);
		this.cherry.setScale(9*scaleRatio);
		this.blob.setScale(9*scaleRatio);

		this.anims.create({
			key: "char_anim",
			frames: this.anims.generateFrameNumbers("char"),
			frameRate: 8,
			repeat: -1
		});

		this.anims.create({
			key: "blob_anim",
			frames: this.anims.generateFrameNumbers("blob"),
			frameRate: 8,
			repeat: -1
		});

		/*
		this.anims.create({
			key: "char_die_anim",
			frames: this. anims.generateFrameNumbers("char_die"),
			frameRate: 5,
			repeat 0,
			hideOnComplete: true
		});*/
		
		this.char.play("char_anim");
		this.blob.play("blob_anim");

		this.cherry.setInteractive();

		this.input.on('gameobjectdown', this.collectCherry, this);

		this.add.text(20, 20, "Playing game", { 
			font: "25px Arial", 
			fill: "yellow" 
		});
	}

	collectCherry(pointer, gameObject) {
		gameObject.visible = false;
		//gameObject.setTexture("explosion");
		//gameObject.play("explode");


	}

	moveChar(char, speed) {
		char.x += speed;
		var side = "";
		if (speed < 0) {
			side = "right";
		}
		else {
			side = "left";
		}
		if (char.x > config.width*scaleRatio) {
			this.resetCharPos(char, side);
		}
	}

	resetCharPos(char, side) {
		if (side == "right") {
			char.x = config.width*scaleRatio + 20;
		}
		else {
			char.x = 0;
		}
		
		var randomY = Phaser.Math.Between(20, config.height*scaleRatio - 20);
		char.y = randomY;
	}

	update () {
		this.moveChar(this.char, 1);
		this.moveChar(this.blob, -1);
	}
}