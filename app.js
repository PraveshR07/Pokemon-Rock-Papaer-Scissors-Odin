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

// Create 

rock_div.addEventListener('click', function() {
    console.log("hey you clicked on rock"); 
})

paper_div.addEventListener('click', function() {
    console.log('Hey you clicked on paper'); 
})

scicsoors_div.addEventListener('click', function() {
    console.log("Hey you clicked on scicsoors"); 
})

