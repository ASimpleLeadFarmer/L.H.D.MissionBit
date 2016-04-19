var menuState ={
    create: function(){
        var nameLabel = game.add.text(80,150, 'Parkourmen',{font: 30px, fill: '#ffffff'});
        var nameLabel = game.add.text(80,80, 'press the w key to start',{font: 25px, fill: '#ffffff'});
        var wkey = game.input.keyboard.addkey(Phaser.Keyboard.W);
        
        wkey.onDown.addOnce(this.start, this);
    },
    
    start: function(){
        game.state.start('play');
    }
}