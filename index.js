/*** /index.js
***/


// require
var fs = require( 'fs' );
var WordGame = require( './WordGame' );
var inquirer = require('inquirer');


// global
var wordGame;    // [Word Game]


/*** FUNCTION readDictionary()
***/

var readDictionary = function() {
    var data = fs.readFileSync( 'words.txt' , 'utf8' );

    // split data into lines
    var lines = data.split( '\n' );

    // one Word per line
    var dictionary = [];
    lines.forEach(
        ( line , lineIndex ) => {
            // ignore empty lines
            if ( !line ) {
                return;
            }
            dictionary.push( line );
        }
    );

    return dictionary;
}


/*** FUNCTION gameLoop()
***/

var gameLoop = function() {
    // exit conditions
    if ( wordGame.tries <= 0 ) {
        console.log();
        console.log( 'You lose :(' );
        return;
    }

    if ( wordGame.isGuessed() ) {
        console.log();
        console.log( `Yes! It is ${ wordGame.word.word }` );
        console.log( 'You win!' )
        return;
    }

    console.log();
    // return promise
    return (
        inquirer.prompt(
            [
                {
                    type : 'input' ,
                    name : 'guess' ,
                    prefix : `Guess the F1 driver! ${ wordGame.showWord() }\nTried letters: ${ wordGame.showTriedLetters() }\nTries left: ${ wordGame.tries }` ,
                    message : '\nChoose a letter:'
                }
            ]
        )
        .then(
            ( answers ) => {
                wordGame.guessLetter( answers.guess );
                // return promise
                return gameLoop();
            }
        )
    );
}


/*** FUNCTION main()
***/

var main = function() {
    var dictionary = readDictionary();
    wordGame = new WordGame( dictionary );
    wordGame.startGame();
    // console.log( wordGame.word );
    gameLoop()
    .then(
        () => {
            process.exit();
        }
    );
}


// start
main();
