// Create your parametters 

let userScore = 0; 
let computerScore = 0; 
const userScore_span = document.getElementById("user-score"); 
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board")
const result_p = document.querySelector(".result > p"); 
// store the variables for later usage. 
const rock_div = document.getElementById("g"); 
const paper_div = document.getElementById("f");
const scicsoors_div = document.getElementById("w");

// Create main function for Use 
//Create main function for Computer
//Create a function


function getComputerChoice (){
    //Create variables for choices
    const choices = ['g', 'f', 'w']; 
    //Use floor to create whole number math.random.
    // Times random to get a number between [0-2.9999] > 3 
    const randomNumber = Math.floor(Math.random() * 3 );
    return choices[randomNumber];

}
//Create conver to words fucntion
    function convertToWord(letter) {
        if (letter === "g") return "Grass"; 
        if (letter === "f") return "Fire"; 
        return "Water"; 

    }

//Create a fucntion for the test for a win

function win (userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore; 
    result_p.innerHTML = `${convertToWord(userChoice)}(user) beats ${convertToWord(computerChoice)}(comp). You Win`; 
}

// Create fucntion for lose
function lost (userChoice, computerChoice) {
    

}

function draw (userChoice,computerChoice) {
    console.log("DRAW")
} 
function game(userChoice) {   
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        //Create case where you win 
        case 'gw':
        case 'fg':
        case 'wf': 
        win(userChoice,computerChoice);
        break; 
        //Case where user loses.
        case 'wg':
        case 'gf':
        case 'fw':
        lose(userChoice, computerChoice);
        break 
        //Tie
        case 'ww':
        case 'ff':
        case 'gg': 
        tie(userChoice, compu); 
        break; 

    }

    }

rock_div.addEventListener('click', function() {
game('g'); 
})

paper_div.addEventListener('click', function() {
    game('f'); 
})

scicsoors_div.addEventListener('click', function() {
    game('w')
})