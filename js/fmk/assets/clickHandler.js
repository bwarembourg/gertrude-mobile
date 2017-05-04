var canvas = document.getElementById("game_canvas");

var rect = canvas.getBoundingClientRect();


var clickHappened = false;
var clickReleased = false;
var touches = [];

canvas.addEventListener('touchstart', function(event) {
    clickHappened = true;
    clickReleased = false;
    touches = event.touches;
    for(i=0; i<touches.length; i++){
        touches[i].clientX -= rect.left;
        touches[i].clientY -= rect.top;
    }
    
 }, false);


canvas.addEventListener('touchend', function() {
    clickReleased = true;
    touches = event.touches;
    for(i=0; i<touches.length; i++){
        touches[i].clientX -= rect.left;
        touches[i].clientY -= rect.top;
    }
}, false);

var clickOnMoveLeft = function(touch){
    if( touch.clientX > 0 && 
        touch.clientX < BCK_WIDTH/5
    ){
        return true;
    }
    return false;
}


var clickOnMoveRight = function(touch){
    if( touch.clientX > BCK_WIDTH/5 && 
        touch.clientX < 2*BCK_WIDTH/5
    ){
        return true;
    }
    return false;
}

var clickOnJump = function(touch){
    if( touch.clientX > 3*BCK_WIDTH/5 && 
        touch.clientX < 4*BCK_WIDTH/5
    ){
        return true;
    }
    return false;
}

var clickOnAttack = function(touch){
    if( touch.clientX > 4*BCK_WIDTH/5 && 
        touch.clientX < BCK_WIDTH
    ){
        return true;
    }
    return false;
}