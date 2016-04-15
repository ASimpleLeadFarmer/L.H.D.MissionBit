var demo = {};
var platforms;
//var speed = 2;
var adam;
var cursors;
var slaw;
demo.state0 = function(){};


demo.state0.prototype = {
	preload: function(){
		game.load.image('trees', 'assets/background/wasteland3.png');
		game.load.spritesheet('adam', 'assets/spritesheets/ford.png', 250, 246);
        game.load.spritesheet('slaw', 'assets/background/obstical course.png');
	},

	create: function(){
        game.world.setBounds(0,0, 4000, 800);
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        var trees = game.add.sprite(0, 0, 'trees');
        adam = game.add.sprite(120, 120, 'adam');
        adam.height = 125;
        adam.width = 123;
        slaw = game.add.sprite(10, game.height - 270, 'slaw');
//        slaw.enableBody = true;
//        slaw.collideWorldBounds = true;
        game.physics.enable(slaw);
        slaw.body.immovable = true;
        slaw.moves = false;
        
//        adam.animations.add('walk', [0, 1, 2]);
        adam.anchor.setTo(0.5, 0.5);
        adam.scale.setTo(0.5, 0.5);
        game.physics.enable(adam);
        adam.body.gravity.y = 600;
        adam.body.collideWorldBounds = true;
        game.camera.follow(adam);
////        game.scale.scalemode = Phaser.ScaleManager.SHOW_ALL;
        trees.height = 800;
        trees.width = 4000;
        platforms = game.add.group();
        platforms.enableBody = true;
        
        var ledge = platforms.create(0, 175);
        ledge.body.immovable = true;
        
        //add ledges here
        
        
        
        
           //  The score
//    scoreText = game.add.text(650, 16, 'score: 0', { fontSize: '25px', fill: '	#FFFFFF' });
        cursors = game.input.keyboard.createCursorKeys();
//        fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
//        
	},

	update: function(){
        game.physics.arcade.collide(adam, slaw);
        game.physics.arcade.collide(adam, platforms);
//        if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
//             adam.x = adam.x + speed;
//            adam.animations.play('walk', 20, true);
//            adam.scale.setTo(0.5, 0.5);
//          }
//       else if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
//            adam.x = adam.x - speed;
//            adam.animations.play('walk', 20, true);
//           adam.scale.setTo(0.5,0.5);
//       }
//        else{
//            adam.animations.stop('walk');
//        }
//       if (game.input.keyboard.isDown(Phaser.Keyboard.UP)){
//           adam.y = adam.y - speed;
//           
//           if(adam.y < 550){
//               adam.y = 550;
//           }
//       }
//       if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
//             adam.y = adam.y + speed;
//        }
//        if (game.input.keyboard.isDown(Phaser.Keyboard.UP)&& adam.y = 1000){
//            adam.body.velocity.y = -350
//        }
    }
};