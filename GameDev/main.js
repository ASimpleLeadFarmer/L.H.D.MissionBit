var game = new Phaser.Game(1000, 600, Phaser.AUTO);
game.state.add('state0', demo.state0);
game.state.start('state0');