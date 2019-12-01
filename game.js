var audioRed = new Audio('sounds/red.mp3');
var audioGreen = new Audio('sounds/green.mp3');
var audioBlue = new Audio('sounds/blue.mp3');
var audioYellow = new Audio('sounds/yellow.mp3');
var audioWrong = new Audio('sounds/wrong.mp3');

var level = 0;
var buttonColors = ['green', 'blue', 'red', 'yellow'];
var pattern = [];
var playerPattern = [];


$('.btn').on('click', function() {
    var pickedColor = $(this).attr("id");
    switch($(this).attr('id')){
        case 'green':
            audioGreen.play();
            break;
        case 'blue':
            audioBlue.play();
            break;
        case 'red':
            audioRed.play();  
            break;
        case 'yellow':
            audioYellow.play();
            break;
    }
    
    playerPattern.push(pickedColor);

    if (playerPattern[playerPattern.length - 1] === pattern[playerPattern.length - 1]){
        if (playerPattern.length === pattern.length){
            playerPattern = [];
            nextSequence();
        }   
    } else {
        $('h1').text('You Loose: Press A button to Play Again'); 
        pattern = [];
        playerPattern = [];
        level = 0;
        $(document).one('keydown', () => {
            nextSequence();
            audioGreen.play();
        });
    }
});

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    let chosenColor = buttonColors[randomNumber];
    pattern.push(chosenColor);
    $('#' + chosenColor).delay(500).fadeOut(100).fadeIn(100);
    $('h1').text("level " + ++level);
}

$(document).one('keydown', () => {
    nextSequence();
    audioGreen.play();
});