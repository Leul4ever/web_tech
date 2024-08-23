const minNum=1;
const maxNum=100;
const answer=Math.floor(Math.random()*(maxNum-minNum+1))+minNum;
let running = true;
let guess;
let attempt=0;
while(running){
    guess= window.prompt('enter your guess ');
    guess=Number(guess);
    if(isNaN(guess)){
        window.alert('please enter a number ');
     }else if(guess<minNum || guess>maxNum){
        window.alert('please Guess  in the interval ');
    }else{z
        attempt++;
        if( guess>answer){
            alert('you guess above the target ')
        }else if (guess<answer){
            alert(' you guess below the target');
        }else {
           
            window.alert(`you got it  after ${attempt} attempts`);
            running=false;
        }

    }


    
}
