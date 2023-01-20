

// Declarations: 
// Player1s turn or Computers turn
// Player1s mark - X or O
// Computers mark - X or O
// Player2s mark - X or O
// Gameplay - Player1VsComputer or Player1VsPlayer2
// Did Player1 choose a new game against CPU? If yes, run playGame_Player1VsComputer
// Did Player1 choose a new game against another player? If yes, run playGame_Player1VsPlayer2
// Did Player1 quit? 

// Game: Player1 against CPU 

// function to displayComputerInput
    // find random div under the same class 
    // is it Computer's turn? 
        // find random div
        // is random div empty? 
            // if yes, display computersMark (X or O)
            // it's no longer Computer's turn
            // if not, find another random div until an empty one is found                --> this one might be problematic?
            // display computersMark (X or O) in div
            // it's no longer Computer's turn

// function to displayPlayer1Input 
    // is it Player1's turn? 
        // if yes, add event listeners for all divs
        // upon click, enter player1sMark (X or O)
        // it's no longer User's turn

// function to displayPopup (helper function)
    // If computer has won: 
        // display 'Oh no, you lost...'
        // display [] takes the round      
        // display options for quitting the game or getting another round                     
    // If player1 has won:
        // display 'You won!' 
        // display [] takes the round
        // display options for quitting the game or getting another round
    // If players have tied: 
        // display 'Round tied'  
        // display options for quitting the game or getting another round                 --> there should be a cleaner/shorter way of writing these display functions

// function to playGame_Player1VsComputer
    // Are all divs empty? 
        // If yes, it's player1's turn 
        // run displayPlayer1Input
        // run displayComputerInput
        // run displayPlayer1Input
        // run displayComputerInput
        // run displayPlayer1Input
        // run displayComputerInput
        // Has anybody won?
            // Has anybody marked three in a row?
                // If yes, they have won!
                // run displayPopup
            // Has anybody marked three in a column? 
                // If yes, they have won!
                // run displayPopup
            // Has anybody marked three diagonally? 
                // If yes, they have won! 
                // run displayPopup
            // If no one has won: 
                // run displayPlayer1Input
                // run displayComputerInput
                // run displayPlayer1Input                                    --> there should be a way to end the game early if it's clear nobody's gonna win


// Game: Player1 versus player2 

// function to displayPlayer2Input
    // is it Player2's turn? 
        // if yes, add event listeners for all divs
        // upon click, enter players2sMark (X or O)
        // it's no longer Player2's turn

// function to playGame_Player1VsPlayer2
    // Are all divs empty? 
        // If yes, it's player1's turn
        // run displayPlayer1Input
        // run displayPlayer2Input
        // run displayPlayer1Input
        // run displayPlayer2Input
        // run displayPlayer1Input
        // run displayPlayer2Input
        // Has anybody won? 
                // Has anybody marked three in a row?
                // If yes, they have won!
                // run displayPopup
            // Has anybody marked three in a column? 
                // If yes, they have won!
                // run displayPopup
            // Has anybody marked three diagonally? 
                // If yes, they have won! 
                // run displayPopup
            // If no one has won: 
                // run displayPlayer1Input
                // rundisplayPlayer2Input
                // rundisplayPlayer1Input                               --> there should be a way to end the game early if it's clear nobody's gonna win                     


// function to reset game if Player1 chooses another round
// function to restartGame when user clicks on the restart/refresh button 
// function to exit game? To take them back to Game Menu 



        