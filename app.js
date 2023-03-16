// Create your parametters 

const userScore = 0; 
const computerScore  = 0; 
const userScore_span =document.getElementById('user-score'); 
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector(".score-board")
const result_div = documetn.querySelector(".result"); 
// store the variables for later usage. 
const rock_div = document.getElementById("g"); 
const paper_div = document.getElementById("f");
const scicsoors_div = document.getElementById("w");

// Create main function

function game(userChoice) {   

}

// Create 

rock_div.addEventListener('click', function() {
game('g'); 
})

paper_div.addEventListener('click', function() {
    game('f'); 
})

scicsoors_div.addEventListener('click', function() {
    game('w')
})

