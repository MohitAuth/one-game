var scores,activePlayer,roundScore,gamePlaying;

init();

//roll dice button
document.querySelector('.btn-roll').addEventListener('click', function() {
    
    //Roll button will work only when game is ON
    if(gamePlaying) {

         //random number
    var dice = Math.floor(Math.random() * 6) + 1;

    //display result
    document.querySelector('.dice').style.display='block'; //enable dice
    document.querySelector('.dice').src='dice-'+dice+'.png';//display dice image

    //update roundScore if number not equal to 1
    if(dice !== 1) {
    roundScore += dice; //increment roundscore value with dice number
    document.querySelector('#current-'+activePlayer).textContent = roundScore; //set the roundScore of the current activeP player
    }
    else{
        nextPlayer();
    }
}
});

//hold function
document.querySelector('.btn-hold').addEventListener('click', function() {

    //Hold button will work only when game is on
    if(gamePlaying) {

     //update the final score of active player with roud score by clicking on hold btn
    scores[activePlayer] += roundScore;

    //update the UI
    document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];

    //check if the player won the game
    if(scores[activePlayer] >= 20){
        gamePlaying = false; //Game is OFF when a player wins the game
        document.querySelector('#name-'+activePlayer).textContent = 'WINNER!';//set name of player to winner
        document.querySelector('.dice').style.display = 'none';//disable the dice
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player'+activePlayer+'-panel').classList.remove('active');
       
    }
    else {
        //nextplayer turn
        nextPlayer();
    }

    }
   
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0; //set roundscore to zero for next player

    document.getElementById('current-0').textContent = '0';//set player1 value to zero before he rolls the dice
    document.getElementById('current-1').textContent = '0';//set player1 value to zero before he rolls the dice

    //player side set to active on his turn 
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';// disable dice
}

//New game
document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true; //game is ON
    //disable the dice at the start
    document.querySelector('.dice').style.display = 'none';

//set all values to zero before start
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

//set name to real name instead of winner
document.getElementById('name-0').textContent = 'PLAYER 1';
document.getElementById('name-1').textContent = 'PLAYER 2';

//remove winner from the player
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');

//remove active from both players
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');

//add active to first player
document.querySelector('.player-0-panel').classList.add('active');
}