/*** /WordGame.js
***/


// require
var jdcUtil = require( './jdcUtil' );
var Word = require( './Word' );


/*** CONSTRUCTOR WordGame()
***/

var WordGame = function( dictionary ) {

    // properties
    this.dictionary = undefined;    // [ String ]
    this.word = undefined;    // Word
    this.MAX_TRIES = 10;
    this.tries = undefined;
    this.isStarted = false;
    this.triedLetters = undefined;    // [ String ]

    // initialize
    this.dictionary = dictionary;


    /*** FUNCTION startGame()
    ***/

    this.startGame = function() {
        var wordIndex = jdcUtil.randomNumber( this.dictionary.length );
        this.word = new Word( this.dictionary[ wordIndex ] );
        this.tries = this.MAX_TRIES;
        this.isStarted = true;
        this.triedLetters = [];
    }


    /*** FUNCTION showWord()
    ***/

    this.showWord = function() {
        return this.word.showWord();
    }


    /*** FUNCTION showTriedLetters()
    ***/

    this.showTriedLetters = function() {
        return this.triedLetters.join( ' ' );
    }


    /*** FUNCTION guessLetter()
    ***/

    this.guessLetter = function( guess ) {
        if ( guess.toUpperCase().search( /[A-Z]/ ) < 0 ) {
            console.log();
            console.log( 'That is not a letter!' );
            return false;
        }

        if ( this.triedLetters.indexOf( guess.toUpperCase() ) >= 0 ) {
            console.log();
            console.log( 'Already tried this letter! Try something else!' );
            return false;
        }

        this.triedLetters.push( guess.toUpperCase() );

        if ( this.word.guessLetter( guess ) ) {
            console.log();
            console.log( `You found '${ guess.toUpperCase() }'!` );
            return true;
        }
        else {
            this.tries--;
            console.log();
            console.log( `There are no '${ guess.toUpperCase() }'!` );
            return false;
        }
    }


    /*** FUNCTION isGuessed()
    ***/

    this.isGuessed = function() {
        return this.word.isGuessed();
    }
}


// export module
module.exports = WordGame;
