// document.querySelector(".drum").addEventListener("click", function(){
    // alert("i got clicked")});


// detect button press
var numberOfDrums = document.querySelectorAll(".drum").length;
for (var i = 0; i<numberOfDrums; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonWord = this.innerHTML;
        makeSound(buttonWord);
        buttonAnimation(buttonWord);
            
    
    });
}


// detect key press
document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})


function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("static/sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            var tom2 = new Audio("static/sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("static/sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("static/sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("static/sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("static/sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("static/sounds/kick-bass.mp3");
            kick.play();
            break;                    
            

    
        default:
            console.log(this.innerHTML);
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}