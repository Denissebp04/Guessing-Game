const MinNum = 1;
const MaxNum = 5;
const answer = Math.floor(Math.random()*(MaxNum - MinNum +1)) + MinNum;

let attempts;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess a number between ${MinNum} - ${MaxNum}`);
    guess = Number(guess);
    
    if(isNaN(guess)){
        window.alert("Please enter a valid number")
    }
    else if (guess < MinNum || guess > MaxNum){
        window.alert('Please enter Valid number')
    }
    else{
        attempts++;
        
        if(guess !== 1 && answer === 1){
            window.alert('This number is only divisible by 1')
            
        }
        else if (guess !== 2 && answer === 2){
            window.alert('This number splits the rest of the numbers in half')
        }
        else if(guess !== 3 && answer === 3){
            window.alert("This number is only divisible by 1 and itself and it divides numbers such as 6, 12, and 81")
        }
        else if(guess !== 4 && answer === 4){
            window.alert("This number it's considered bad luck in chinese culture")
        }
        else if (guess !== 5 && answer === 5){
            window.alert("This number only divides numbers that end in 0 and 5")
        }
        else {
            window.alert(`Answer was ${answer}`)
            
            const congrats = document.getElementById("title")
            congrats.addEventListener(window.onload = () =>{
                congrats.textContent = "Congrats!! You got the right answer"
    
            })
            running = false
        }

    }
    
}