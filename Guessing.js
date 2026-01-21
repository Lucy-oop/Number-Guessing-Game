let y = Math.floor(Math.random()*10 +1);
 let guess = 1;
 document.getElementById("submitguess").onclick = function(){
    x = document.getElementById("guessField").value;
     if (x == y){ alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN " + guess + " GUESS");
     }
     else if (x < y){
        guess++;
        alert("Try A Greater Number!");
     }
     else  {
        guess++;
        alert("Try A Smaller Number!");
     }

 }