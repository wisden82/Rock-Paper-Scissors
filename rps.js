let playerScore = 0;
let pcScore = 0;

// This is Computer choice
function computerPlay(){  
    let number = Math.floor(Math.random()*3)    
    if (number ===0){
      return "Rock"
    }
    else if (number ===1){
        return "Paper"
    } 
    else {        
        return "Scissors"
    }
}
// Player choice
function playerChoice(){
    
    
    let text= prompt(`Pick Rock,Paper or Scissors`,"text here")
    if (text){
    switch(text.toLowerCase()){
        case "rock":
        return 'Rock';
        break;
        case "scissors":
        return 'Scissors';
        break;
        case "paper":
        return 'Paper';
        break;
                default:
            playerChoice(); 
            break;
    }
    }
    else {console.log("Bye!")}
    }
// this is the game to see who wins. or a draw.

function playRound(playerSelection, computerSelection) {
    if(playerSelection=="Rock" && computerSelection=="Scissors" || 
    playerSelection=="Scissors"&& computerSelection=="Paper"||
    playerSelection=="Paper"&& computerSelection=="Rock"){
        alert (`Congrats! You won as ${playerSelection} beats ${computerSelection}`)
                return 'Win'
                
    }
    else if((computerSelection=="Rock" && playerSelection=="Scissors" || 
    computerSelection=="Scissors"&& playerSelection=="Paper"||
    computerSelection=="Paper"&&playerSelection=="Rock")){
        alert(`Boo! You lost as ${computerSelection} beats ${playerSelection}`)
                return 'Lose'
                
    }
    else if(computerSelection===playerSelection){
        alert(`Ugly, you both picked the same. DRAW!`)
        return 'Draw'
    }
    else return 'fault'

     }
// this is for repeating the game
function game(){

    for(i=1;i<=5;i++){
    
    const playerSelection =playerChoice()
    const computerSelection = computerPlay()
      
    
    const result = playRound(playerSelection,computerSelection)
    score(result)
    if(i===5){
        alert(`end of the game!`)
    }
    
    
        }
            
    }
    // this function is for keeping a track of the scores at the end of the round

    function score(result){ 
        
        if (result==='Win'){
            playerScore ++;
            alert(`Scores are now PLAYER ${playerScore} : COMPUTER ${pcScore}, after
            round ${i} `)
        }
        else if (result ==='Lose'){
            pcScore ++;
            alert(`Scores are now PLAYER ${playerScore} : COMPUTER ${pcScore}, after
            round ${i} `)
        }
        else if (result==='Draw'){
            alert(`Scores are now PLAYER ${playerScore} : COMPUTER ${pcScore}, after
            round ${i} `)
        }

    }
    
    game()


      
   

   




