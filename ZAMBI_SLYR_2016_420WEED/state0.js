var demo = {};
var speed = 6;
var adam;
demo.state0 = function(){};


demo.state0.prototype = {
	preload: function(){
		game.load.image('trees', 'assets/background/wasteland.png');
//		game.load.spritesheet('adam', 'assets/spritesheets/adamSpritesheet.png', 240, 370);
        
	},

	create: function(){
<<<<<<< HEAD
        game.world.setBounds(0,0, 2813, 1000);
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        var trees = game.add.sprite(0, 0, 'trees');
        ford = game.add.sprite(0, 450, 'ford');
        ford.animations.add('walk', [0, 1, 2, 3, 4, 5, 6, 7, 8]);
        ford.anchor.setTo(0.5, 0.5);
        ford.scale.setTo(0.7, 0.7);
        game.physics.enable(ford);
        ford.body.collideWorldBounds = true;
        game.camera.follow(ford);
=======
//        game.world.setBounds(0,0, 2813, 1000);
//        game.physics.startSystem(Phaser.Physics.ARCADE);
//        
//        var trees = game.add.sprite(0, 0, 'trees');
//        adam = game.add.sprite(0, 450, 'adam');
//        adam.animations.add('walk', [0, 1, 2, 3, 4]);
//        adam.anchor.setTo(0.5, 0.5);
//        adam.scale.setTo(0.7, 0.7);
//        game.physics.enable(adam);
//        adam.body.collideWorldBounds = true;
//        game.camera.follow(adam);
>>>>>>> master
        game.scale.scalemode = Phaser.ScaleManager.SHOW_ALL;
        
	},

	update: function(){
<<<<<<< HEAD
        if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
             ford.x = ford.x + speed;
             ford.animations.play('walk', 20, true);
            ford.scale.setTo(0.7, 0.7);
          }
       else if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            ford.x = ford.x - speed;
            ford.animations.play('walk', 20, true);
           ford.scale.setTo(-0.7, 0.7);
       }
        else{
            ford.animations.stop('walk');
        }
       if (game.input.keyboard.isDown(Phaser.Keyboard.UP)){
           ford.y = ford.y - speed;
           
           if(ford.y < 400){
               ford.y = 400;
           }
        }
       if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
             ford.y = ford.y + speed;
        }
=======
//        if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
//             adam.x = adam.x + speed;
//             adam.animations.play('walk', 20, true);
//            adam.scale.setTo(0.7, 0.7);
//          }
//       else if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
//            adam.x = adam.x - speed;
//            adam.animations.play('walk', 20, true);
//           adam.scale.setTo(-0.7, 0.7);
//       }
//        else{
//            adam.animations.stop('walk');
//        }
//       if (game.input.keyboard.isDown(Phaser.Keyboard.UP)){
//           adam.y = adam.y - speed;
//           
//           if(adam.y < 400){
//               adam.y = 400;
//           }
//        }
//       if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
//             adam.y = adam.y + speed;
//        }
>>>>>>> master
    }
};