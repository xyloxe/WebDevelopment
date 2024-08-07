var buttonColour = ["red", "blue", "green", "yellow"];

var gamePattern = [];
userClickedPattern = [];

var started = false;
var level = 0;



$(document).keypress(function(){
    if (!started){
        $("#level-title").text("Level " + level);
        next_seq();
        started = true;
    }
})

$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length -1);

    
})



function next_seq() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4); 
    var randomChosenColour =buttonColour[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

}


function playSound(name){
    var audio = new Audio("static/sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");
        
        if(userClickedPattern.length ===gamePattern.length){
            setTimeout(function(){
                next_seq();
            }, 1000);
        }
    }
    else{
        console.log("wrong");
        playSound("wrong")
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over")
        }, 200);
        $("#level-title").text("Game Over, Press any key to restart"); 
        startOver();
    }
}


function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}