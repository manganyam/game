scaleRatio = window.devicePixelRatio / 3;

var config = {
	width: window.innerWidth * window.devicePixelRatio,
	height: window.innerHeight * window.devicePixelRatio,
	backgroundColor: 0xffffcc,
	scene: [Title, Level_map],
	pixelArt: true
}
//game = new Phaser.Game(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.CANVAS, 'gameArea');
var game = new Phaser.Game(config);

// scenes
// title
// level map
// world map