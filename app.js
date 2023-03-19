// Create your parametters 

const userScore = 0; 
const computerScore  = 0; 
const userScore_span =document.getElementById('user-score'); 
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector(".score-board")
const result_div = document.querySelector(".result"); 
// store the variables for later usage. 
const rock_div = document.getElementById("g"); 
const paper_div = document.getElementById("f");
const scicsoors_div = document.getElementById("w");

// Create main function for Use 
//Create main function for Computer

function getComputerChoice (){

};

//Create variables for choices
const choice = ['g', 'g', 'w']; 
//Use floor to create whole number math.random.
// Times random to get a number between [0-2.9999] > 3 
console.log(Math.floor(Math.random() * 3 ));

// Create 
function game(userChoice) {   

rock_div.addEventListener('click', function() {
game('g'); 
})

paper_div.addEventListener('click', function() {
    game('f'); 
})

scicsoors_div.addEventListener('click', function() {
    game('w')
})


}
