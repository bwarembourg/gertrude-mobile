function GameOverState() {
    this.background = ASSET_MANAGER.getCrop("gameover");
};

GameOverState.prototype.update = function() {
    this.background.render(0, 0);
    if(clickHappened){
        STATE_MANAGER.switchToState("game");        
    }
    var me = this;
};

GameOverState.prototype.reset = function() {
};

GameOverState.prototype.onKeyPressed = function(e) {

}

GameOverState.prototype.onKeyUp = function(){
    
}