/*** /test-Letter.js
***/

// require
Letter = require( './Letter' );

console.log();
console.log( '# letter01' );
letter01 = new Letter( 'a' );
console.log( letter01.showLetter() );
letter01.setGuessed();
console.log( letter01.showLetter() );

console.log();
console.log( '# letter02' );
letter02 = new Letter( 'B' );
console.log( letter02.showLetter() );
letter02.guessLetter( 'c' );
console.log( letter02.showLetter() );
letter02.guessLetter( 'b' );
console.log( letter02.showLetter() );
