/*** /test-Word.js
***/

// require
Word = require( './Word' );

console.log();
console.log( '# word01' );
word01 = new Word( 'jdc jdc' );
console.log( word01.showWord() );

console.log();
console.log( word01.guessLetter( 'A' ) );
console.log( word01.showWord() );
console.log( word01.isGuessed() );

console.log();
console.log( word01.guessLetter( 'D' ) );
console.log( word01.showWord() );
console.log( word01.isGuessed() );

console.log();
console.log( word01.guessLetter( 'C' ) );
console.log( word01.showWord() );
console.log( word01.isGuessed() );

console.log();
console.log( word01.guessLetter( 'J' ) );
console.log( word01.showWord() );
console.log( word01.isGuessed() );
