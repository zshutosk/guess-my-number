'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/
//math.trunc gets rid of decimals
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//initial score, will change so it will be a let
let score = 20;
let highscore = 0;

//displays messages for #
function contentMessage(message) {
    document.querySelector('.message').textContent = message;
}



document.querySelector('.check').addEventListener
('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);


    //when there is no input
    //not operater turns false guess variable to true
    if(!guess) {
        
        contentMessage('No number');

        //when player wins
    } else if (guess === secretNumber) {
        contentMessage('Correct Number :)');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        //when guess is wrong
    }else if (guess !== secretNumber) {
        if(score > 1) {
            //document.querySelector('.message').textContent =
            //guess > secretNumber ? 'Too high!': 'Too Low!';
            contentMessage(guess > secretNumber ? 'Too high!': 'Too Low!');
            //we decrease score by 1 and then display it
            score--;
            document.querySelector('.score').textContent =
            score;
        } else {
            contentMessage('You lost :(');
            document.querySelector('.score').textContent =
            0;
        }

    }
});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    contentMessage('Start Guessing');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})
