$(document).ready(function () {
    // create a random number for the user to guess between19-120
    var randomNum = Math.floor(Math.random() * 101 + 19);

    // append random number to html 
    $('#random-number').text(randomNum);

    // create a userTotal score keeping variables 
    var userTotal = 0;
    var wins = 0;
    var losses = 0;
    

    // create values for each crystal between 1-12
    var grayValue = Math.floor(Math.random() * 11 + 1)
    var yellowValue = Math.floor(Math.random() * 11 + 1)
    var pinkValue = Math.floor(Math.random() * 11 + 1)
    var greenValue = Math.floor(Math.random() * 11 + 1)
    
    // append to the stats to the html
    $('#numWins').text(wins);
    $('#numLosses').text(losses);
    $('#player-score').text(userTotal);

    // a function to reset the game when the user earns a win or loss
    function resetGame() {
        randomNum = Math.floor(Math.random() * 101 + 19);
        $('#random-number').text(randomNum);
        grayValue = Math.floor(Math.random() * 11 + 1);
        yellowValue = Math.floor(Math.random() * 11 + 1);
        pinkValue = Math.floor(Math.random() * 11 + 1);
        greenValue = Math.floor(Math.random() * 11 + 1);
        userTotal = 0;
        $('#player-score').text(userTotal);
    }

    // adds wins
    function youWin() {
        alert("You Win!");
        wins++;
        $('#numWins').text(wins);
        resetGame();
    }
    // adds losses
    function youLose() {
        alert("You Lose!");
        losses++;
        $('#numLosses').text(losses);
        resetGame();
    }

    // when a user clicks a crystal, it will add its value to the current userScore
    $('#gray-crystal').on('click', function(){
        userTotal += grayValue;
        $('#player-score').text(userTotal);
            if(userTotal === randomNum) {
                youWin();
            } else if (userTotal > randomNum){
                youLose();
            }
    })
    $('#yellow-crystal').on('click', function(){
        userTotal += yellowValue;
        $('#player-score').text(userTotal);
            if(userTotal === randomNum) {
                youWin();
            } else if (userTotal > randomNum){
                youLose();
            }
    })
    $('#pink-crystal').on('click', function(){
        userTotal += pinkValue;
        $('#player-score').text(userTotal);
            if(userTotal === randomNum) {
                youWin();
            } else if (userTotal > randomNum){
                youLose();
            }
    })
    $('#green-crystal').on('click', function(){
        userTotal += greenValue;
        $('#player-score').text(userTotal);
            if(userTotal === randomNum) {
                youWin();
            } else if (userTotal > randomNum){
                youLose();
            }
    })


});






