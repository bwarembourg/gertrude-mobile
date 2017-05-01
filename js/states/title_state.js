function TitleState() {
    this.background = ASSET_MANAGER.getCrop("title");

    
};

TitleState.prototype.update = function() {
    this.background.render(0, 0);
    if(clickHappened){
        STATE_MANAGER.switchToState("game");        
    }

    var me = this;

};

TitleState.prototype.onKeyPressed = function(e) {

}

TitleState.prototype.onKeyUp = function(){
    
}

TitleState.prototype.reset = function() {
    // body
};