var game = new Phaser.Game(500, 600, Phaser.AUTO, 'game_div');

var main_state = {
	preload: function() {
		game.load.image('hello', 'assets/hello.png');
	},

	create: function() {
		this.hello_sprite = game.add.sprite(250, 300, 'hello');
	},

	update: function() {
		this.hello_sprite.angle += 1;
	},
}

game.state.add('main', main_state);
game.state.start('main');