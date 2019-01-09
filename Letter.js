/*** /Letter.js
***/


/*** CONSTRUCTOR Letter()
***/

var Letter = function( letter ) {

    // properties
    this.PLACEHOLDER = '_';
    this.letter = undefined;    // String
    this.isGuessed = undefined;    // boolean

    // initialize
    // check if whitespace
    if ( letter.search( /\s/ ) >= 0 ) {
        this.letter = ' ';
        this.isGuessed = true;
    }
    else {
        this.letter = letter.toUpperCase();
        this.isGuessed = false;
    }


    /*** FUNCTION showLetter()
    ***/

    this.showLetter = function() {
        if ( this.isGuessed ) {
            return this.letter;
        }
        else {
            return this.PLACEHOLDER;
        }
    }


    /*** FUNCTION setGuessed()
    ***/

    this.setGuessed = function() {
        this.isGuessed = true;
    }


    /*** FUNCTION guessLetter()
    ***/

    this.guessLetter = function( guess ) {
        if ( this.letter === guess.toUpperCase() ) {
            this.setGuessed();
            return true;
        }
        else {
            return false;
        }
    }
}


// export module
module.exports = Letter;
