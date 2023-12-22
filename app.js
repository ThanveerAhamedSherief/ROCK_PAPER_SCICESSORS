// const paper = document.querySelector('#paper');
// const rock = document.querySelector('#rock');
// const scissor = document.querySelector('scissors');
let userScore = 0;
let compScore = 0;
const user_score = document.querySelector('#user-score');
const comp_score = document.querySelector('#comp-score');
const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');


const genCompChoice = () =>{
    const compChoice = ['rock', 'paper', 'scissors'];
    const randomIdx = Math.floor(Math.random() * 3);
    return compChoice[randomIdx]

}
const drawGame = () =>{
    msg.style.backgroundColor = 'yellow'
    msg.innerText = 'Draw game'
};
const showWinner = (userWin) => {

    if(userWin) {
        msg.innerText = 'You Win..!';
        msg.style.backgroundColor = 'green';
        userScore +=1
        user_score.innerText = userScore
    } else {
        msg.innerText = 'You Lose..!';
        msg.style.backgroundColor = 'red';
        compScore+=1
        comp_score.innerText = compScore;
    }
}
const playGame = (userChoice) => {
    let compChoice = genCompChoice();
    console.log(compChoice, userChoice)
    if(compChoice === userChoice) {
       return drawGame()
    };
    let userWin = true;
    if(userChoice === 'rock') {
        userWin = compChoice === 'paper' ? false : true
    } else if (userChoice === 'paper') {
        userWin = compChoice === 'scissors' ? false : true;
    } else {
        userWin = compChoice === 'rock' ? false : true;
    }

    showWinner(userWin)
}
console.log(choices)
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        let userChoice = choice.getAttribute('id');
        playGame(userChoice);
    })
})


