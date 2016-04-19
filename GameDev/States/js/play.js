var playState ={
    create: function(){
        this.keyboard = game.input.keyboard
        
        this.player = game.add.sprite(16,16, 'adam');
        game.physics.enable(this.player, Phaser.Physics.ARCADE);
        
        this.win = game.add.sprite(256,256, 'slaw');
        game.physics.enable(this.win, Phaser.Physics.ARCADE);
    },
    update: function(){
    if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
             adam.x = adam.x + speed;
             adam.animations.play('walk', 20, true);
            adam.scale.setTo(0.7, 0.7);
          }
       else if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            adam.x = adam.x - speed;
            adam.animations.play('walk', 20, true);
           adam.scale.setTo(-0.7, 0.7);
       }
        else{
            adam.animations.stop('walk');
            }
//       if (game.input.keyboard.isDown(Phaser.Keyboard.UP)){
//           adam.y = adam.y - speed;
//           
//           if(adam.y < 400){
//               adam.y = 400;
//           }
//        }
       if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
             adam.y = adam.y + speed;
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.UP)&& adam.y = 1000){
            adam.body.velocity.y = -350
    }
    }
}