/*** /Word.js
***/


// require
var Letter = require( './Letter' );


/*** CONSTRUCTOR Word()
***/

var Word = function( word ) {

    // properties
    this.letters = undefined;    // [ Letter ]
    this.word = word.toUpperCase();

    // initialize
    this.letters = [];
    word.split( '' ).forEach(
        ( letter , letterIndex ) => {
            this.letters.push( new Letter( letter ) );
        }
    );


    /*** FUNCTION showWord()
    ***/

    this.showWord = function() {
        var result = this.letters.reduce(
            ( accumulator, letter ) => {
                return ( accumulator + ' ' + letter.showLetter() );
            } ,
            ''
        );
        result = result.trim();
        return result;
    }


    /*** FUNCTION guessLetter()
    ***/

    this.guessLetter = function( guess ) {
        var result = false;

        this.letters.forEach(
            ( letter , letterIndex ) => {
                if ( letter.guessLetter( guess ) ) {
                    result = true;
                }
            }
        );

        return result;
    }


    /*** FUNCTION isGuessed()
    ***/

    this.isGuessed = function() {
        return (
            this.letters.every(
                ( letter ) => {
                    return letter.isGuessed;
                }
            )
        );
    }
}


// export module
module.exports = Word;
