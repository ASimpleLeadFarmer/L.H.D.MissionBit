var demo = {};
var speed = 2;
var adam;
var cursors;
demo.state0 = function(){};


demo.state0.prototype = {
	preload: function(){
		game.load.image('trees', 'assets/background/wasteland3.png');
		game.load.spritesheet('adam', 'assets/spritesheets/tank.png', 199, 82);
        
	},

	create: function(){
        game.world.setBounds(0,0, 4000, 800);
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        var trees = game.add.sprite(0, 0, 'trees');
        adam = game.add.sprite(120, 550, 'adam');
//        adam.animations.add('walk', [0, 1, 2]);
//        adam.anchor.setTo(0.5, 0.5);
        adam.scale.setTo(2, 2);
        game.physics.enable(adam);
        adam.body.collideWorldBounds = true;
        game.camera.follow(adam);
//        game.scale.scalemode = Phaser.ScaleManager.SHOW_ALL;
        trees.height = 800;
        trees.width = 4000;
        
            //  The score
    scoreText = game.add.text(650, 16, 'score: 0', { fontSize: '25px', fill: '	#FFFFFF' });
        cursors = game.input.keyboard.createCursorKeys();
        fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        
	},

	update: function(){
        if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
             adam.x = adam.x + speed;
             adam.animations.play('walk', 20, true);
            adam.scale.setTo(2, 2);
          }
       else if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            adam.x = adam.x - speed;
            adam.animations.play('walk', 20, true);
           adam.scale.setTo(2,2);
       }
        else{
            adam.animations.stop('walk');
        }
       if (game.input.keyboard.isDown(Phaser.Keyboard.UP)){
           adam.y = adam.y - speed;
           
           if(adam.y < 550){
               adam.y = 550;
           }
        }
       if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
             adam.y = adam.y + speed;
        }
//        if (game.input.keyboard.isDown(Phaser.Keyboard.UP)&& adam.y = 1000){
//            adam.body.velocity.y = -350
//        }
    }
};