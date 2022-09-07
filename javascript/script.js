function playGame(){

    var ranPlayer1 = Math.floor(Math.random()*6)+1;
    var ranPlayer2 = Math.floor(Math.random()*6)+1;

    document.querySelector(".playerOneDice").setAttribute('src', 'images/dice'+ranPlayer1+'.png');
    document.querySelector(".playerTwoDice").setAttribute('src', 'images/dice'+ranPlayer2+'.png');

    getWinner(ranPlayer1, ranPlayer2);
}

function getWinner(ranPlayer1, ranPlayer2){
    if (ranPlayer1 > ranPlayer2){
        document.querySelector(".headerText h1").textContent = "🚩 Player 1 Wins";
    }
    
    else if(ranPlayer1 < ranPlayer2){
        document.querySelector(".headerText h1").textContent = "Player 2 Wins 🚩";
    }
    
    else{
        document.querySelector(".headerText h1").textContent = "Draw!";
    }
}

playGame();