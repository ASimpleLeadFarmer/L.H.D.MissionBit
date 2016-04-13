var loadState = {
    
    preload: function(){
        var loadingLabel = game.add.text(80,150, 'loading...',{font: '30px Courier', fill: '#ffffff'});
        game.load.image('adam', '/assets/sprites/ford.png');
        game.load.image('slaw', '/assets/background/testBG.png');
    },
    
    create: function(){
        game.state.start(menu);
    }
                                         
}