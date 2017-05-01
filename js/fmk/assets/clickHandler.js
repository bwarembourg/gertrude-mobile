var canvas = document.getElementById("game_canvas");

var rect = canvas.getBoundingClientRect();

canvas.addEventListener('mousedown', function(event) {
    clickHappened = true;
    clickReleased = false;
    clickX = event.clientX - rect.left;
    clickY = event.clientY - rect.top;
 }, false);

var clickHappened = false;
var clickReleased = false;
var clickX;
var clickY;

canvas.addEventListener('mouseup', function() {
    clickReleased = true;
    clickX = event.clienX - rect.left;
    clickY = event.clientY - rect.top;
}, false);

var clickOnMoveRight = function(){
    if( clickX > 0 && 
        clickX < BCK_WIDTH/3
    ){
        return true;
    }
    return false;
}