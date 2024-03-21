var randomNumber=Math.floor(Math.random() * 10)+1;
 var attempts=0;

 function checkGuess(guess) {
    if(guess===randomNumber){
        console.log("Congratulations! you have guessed the correct number in"+attempts+"attempts.");
    } else if(guess<randomNumber){
        console.log("try higher");
    }else{
        console.log("try lower");
    }                                                                     
 }  
 
 console.log(randomNumber);
 var guessedNumber = 4; 
 checkGuess(guessedNumber);
 

 