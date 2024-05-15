var buttonColors = ["red", "blue", "yellow", "green"];
var level = 0;
var started = false;
var gamePattern = [];
var userClickedPattern = [];

$(document).on("keydown",function(event){
    if(!started){
        
        $("h1").text("Level " + level);
        nextSequence();
        started = true;
        // level = level + 1;
    } 
})

$(".btn").click(function(){

    var userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    animateSquare(this.id);

    console.log(userClickedPattern);

    checkAnswer(userClickedPattern.length-1)
})




function nextSequence(){
    userClickedPattern = [];
    level = level + 1;
    $("h1").text("Level " + level);

    var randomChosenColour = buttonColors[Math.floor(Math.random()*4)];
    gamePattern.push(randomChosenColour);
    animateSquare(randomChosenColour);

    console.log(gamePattern);  

}






function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        console.log("success");
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
                },1000);
    }
    } else {
        console.log("wrong");

        var wrong = new Audio("./assets/wrong.mp3");
        wrong.play();

        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
            },200);
        
        $("h1").text("Game Over, Press Any Key to Restart");
        
        startOver();
    } 
 
}

function startOver(){
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    started = false;

}
    




function animateSquare(key){
    
    switch (key) {
        
        case "blue":
            var blueButton = new Audio("./assets/blue.mp3");
            blueButton.play();
            $(".blue").fadeIn(100).fadeOut(100).fadeIn(100);
            break;

        case "red":
            var redButton = new Audio("./assets/red.mp3");
            redButton.play();
            $(".red").fadeIn(100).fadeOut(100).fadeIn(100);
            break;

        case "yellow":
            var yellowButton = new Audio("./assets/yellow.mp3");
            yellowButton.play();
            $(".yellow").fadeIn(100).fadeOut(100).fadeIn(100);
            break;

        case "green":
            var greenButton = new Audio("./assets/green.mp3");
            greenButton.play();
            $(".green").fadeIn(100).fadeOut(100).fadeIn(100);
            break;
    
        default:
            console.log("error");
            break;
    }
}


