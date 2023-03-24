// Create your parametters 

let userScore = 0; 
let computerScore  = 0; 
const userScore_span =document.getElementById('user-score'); 
const computerScore_span = document.getElementById('computer-score');
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
    const randomNumber = (Math.floor(Math.random() * 3 ));
    return choices[randomNumber];

    function convertToWord(letter) {
        if (letter === "g") return "Grass"; 
        if (letter === "f") return "Fire"; 
        return "Water"; 

    }

    
};

//Create a fucntion for the test for a win

function win (userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore; 
    const smallUserWord = "user"<font(3)
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}(comp). You Win`; 
}

function lost () {

}

function draw {
    console.log("DRAW")
};
``
function game(userChoice) {   
    const computerChoice = getComputerChoice;

    //Create a swtich statment based on the events listed on RPS. 
    //Swtich statement 
    switch(userChoice + computerChoice) {
        //Create case where you win 
        case 'gw':
        case 'fg':
        case 'wf': 
        win();
        break; 
        //Case where user loses.
        case 'wg':
        case 'gf':
        case 'fw':
        lose();
        break 
        //Tie
        case 'ww':
        case 'ff':
        case 'gg': 
        tie(); 
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