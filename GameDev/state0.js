var demo = {};
//var platforms;
//var speed = 2;
var adam;
var cursors;
//var slaw;
demo.state0 = function(){};


demo.state0.prototype = {
	preload: function(){
		game.load.image('trees', 'assets/background/wasteland3.png');
		game.load.spritesheet('adam', 'assets/spritesheets/ford.png', 250, 246);
//<<<<<<< HEAD
//        game.load.spritesheet('slaw', 'assets/background/obstical course.png');
        game.load.spritesheet('ledge', 'assets/sprites/JavaScript.png');
//=======
//        game.load.spritesheet('platforms', 'assets/background/plafrom.png');
//>>>>>>> origin/master
	},

	create: function(){
        game.world.setBounds(0,0, 4000, 800);
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        var trees = game.add.sprite(0, 0, 'trees');
        adam = game.add.sprite(120, 120, 'adam');
        adam.height = 125;
        adam.width = 123;
//        slaw = game.add.sprite(10, game.height - 270, 'slaw');
//        slaw.enableBody = true;
//        slaw.collideWorldBounds = true;
//        game.physics.enable(slaw);
//        slaw.body.immovable = true;
//        slaw.moves = false;
        
        adam.animations.add('walk', [0, 1, 2, 3]);
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
        
        var ledge = platforms.create(300, 600, 'ledge');
        ledge.body.immovable = true;
        ledge.height = 50;
        ledge.width = 200;
//=======
//        var ledge = platforms.create(20, 165);
//        ledge.body.immovable = true
//        var ledge = platforms.create(47, 150)'
//>>>>>>> origin/master
        
        //add ledges here
         var ledge = platforms.create(600, 500, 'ledge');
        ledge.body.immovable = true;
        ledge.height = 50;
        ledge.width = 200;
        
         var ledge = platforms.create(1000, 525, 'ledge');
        ledge.body.immovable = true;
        ledge.height = 50;
        ledge.width = 200;
        
        
        
        var ledge = platforms.create(1500, 600, 'ledge');
        ledge.body.immovable = true;
        ledge.height = 50;
        ledge.width = 200;
        
        var ledge = platforms.create(1700, 700, 'ledge');
        ledge.body.immovable = true;
        ledge.height = 50;
        ledge.width = 200;
        
        
        var ledge = platforms.create(1900, 500, 'ledge');
        ledge.body.immovable = true;
        ledge.height = 50;
        ledge.width = 200;
        
        
        var ledge = platforms.create(2000, 300, 'ledge');
        ledge.body.immovable = true;
        ledge.height = 50;
        ledge.width = 200;
        
        
        var ledge = platforms.create(2100, 200, 'ledge');
        ledge.body.immovable = true;
        ledge.height = 50;
        ledge.width = 200;
        
        
        var ledge = platforms.create(2300, 350, 'ledge');
        ledge.body.immovable = true;
        ledge.height = 50;
        ledge.width = 200;
        
        
        var ledge = platforms.create(3000, 175, 'ledge');
        ledge.body.immovable = true;
        ledge.height = 50;
        ledge.width = 200;
        
        var ledge = platforms.create(3000, 175, 'ledge');
        ledge.body.immovable = true;
        ledge.height = 50;
        ledge.width = 200;
        
        var ledge = platforms.create(3000, 175, 'ledge');
        ledge.body.immovable = true;
        ledge.height = 50;
        ledge.width = 200;
        
        
        
           //  The score
//    scoreText = game.add.text(650, 16, 'score: 0', { fontSize: '25px', fill: '	#FFFFFF' });
        cursors = game.input.keyboard.createCursorKeys();
//        fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
//        
	},

	update: function(){
//        game.physics.arcade.collide(adam, slaw);
        game.physics.arcade.collide(adam, platforms);
////<<<<<<< HEAD
//           ghost.body.velocity.x = 0;

    if (cursors.left.isDown)
    {
        //  Move to the left
        adam.body.velocity.x = -150;

        adam.animations.play('walk', 10, true);
    }
    else if (cursors.right.isDown)
    {
        //  Move to the right
        adam.body.velocity.x = 150;

        adam.animations.play('walk', 10 , true);
    }
    else
    {
        adam.body.velocity.x = 0;
        //  Stand still
        adam.animations.stop();

        adam.frame = 0;
    }
    if(cursors.down.isDown){
        adam.body.velocity.y = 200;
    }
    if (cursors.up.isDown)
    {
        adam.body.velocity.y = -200;
    }

},
//=======
        //if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
           //  adam.x = adam.x + speed;
          //  adam.animations.play('walk', 20, true);
           // adam.scale.setTo(0.5, 0.5);
       //   }
      // else if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
      //      adam.x = adam.x - speed;
      //      adam.animations.play('walk', 20, true);
      //     adam.scale.setTo(0.5,0.5);
     //  }
      //  else{
    //        adam.animations.stop('walk');
    //    }
       //if (game.input.keyboard.isDown(Phaser.Keyboard.UP)){
        //   adam.y = adam.y - speed;
           
       //    if(adam.y < 550){
       //        adam.y = 550;
       //    }
      // }
       //if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
//             adam.y = adam.y + speed;
       // }
      //  if (game.input.keyboard.isDown(Phaser.Keyboard.UP)&& adam.y = 1000){
       //     adam.body.velocity.y = -350
      //  }
   // }
//>>>>>>> origin/master
};