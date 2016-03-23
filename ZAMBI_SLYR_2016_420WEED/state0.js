var demo = {};
var speed = 6;
var Ford;
demo.state0 = function(){};


demo.state0.prototype = {
	preload: function(){
		game.load.image('trees', 'assets/background/treeBG.png');
		game.load.spritesheet('Ford', 'assets/spritesheets/adamSpritesheet.png', 240, 370);
        
	},

	create: function(){
        game.world.setBounds(0,0, 2813, 1000);
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        var trees = game.add.sprite(0, 0, 'trees');
        Ford = game.add.sprite(0, 450, 'Ford');
        Ford.animations.add('walk', [0, 1, 2, 3, 4]);
        Ford.anchor.setTo(0.5, 0.5);
        Ford.scale.setTo(0.7, 0.7);
        game.physics.enable(Ford);
        adam.body.collideWorldBounds = true;
        game.camera.follow(Ford);
        game.scale.scalemode = Phaser.ScaleManager.SHOW_ALL;
        
	},

	update: function(){
        if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
             Ford.x = Ford.x + speed;
             Ford.animations.play('walk', 20, true);
            Ford.scale.setTo(0.7, 0.7);
          }
       else if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            Ford.x = adam.x - speed;
            Ford.animations.play('walk', 20, true);
           Ford.scale.setTo(-0.7, 0.7);
       }
        else{
            Ford.animations.stop('walk');
        }
       if (game.input.keyboard.isDown(Phaser.Keyboard.UP)){
           Ford.y = adam.y - speed;
           
           if(Ford.y < 400){
               Ford.y = 400;
           }
        }
       if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
             Ford.y = Ford.y + speed;
        }
    }
};
