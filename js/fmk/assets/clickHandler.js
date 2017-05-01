var canvas = document.getElementById("game_canvas");

var rect = canvas.getBoundingClientRect();


canvas.addEventListener('touchstart', function(event) {
    clickHappened = true;
    clickReleased = false;
    if(event.touches[0] != null){
        clickX = event.touches[0].clientX - rect.left;
        clickY = event.touches[0].clientY - rect.top;
    }
 }, false);

var clickHappened = false;
var clickReleased = false;
var clickX;
var clickY;

canvas.addEventListener('touchend', function() {
    clickReleased = true;
    if(event.touches[0] != null){
        clickX = event.touches[0].clientX - rect.left;
        clickY = event.touches[0].clientY - rect.top;
    }
}, false);

var clickOnMoveLeft = function(){
    if( clickX > 0 && 
        clickX < BCK_WIDTH/6
    ){
        return true;
    }
    return false;
}


var clickOnMoveRight = function(){
    if( clickX > BCK_WIDTH/6 && 
        clickX < 2*BCK_WIDTH/6
    ){
        return true;
    }
    return false;
}

var clickOnJump = function(){
    if( clickX > BCK_WIDTH/3 && 
        clickX < 2*BCK_WIDTH/3
    ){
        return true;
    }
    return false;
}

var clickOnAttack = function(){
    if( clickX > 2*BCK_WIDTH/3 && 
        clickX < BCK_WIDTH
    ){
        return true;
    }
    return false;
}