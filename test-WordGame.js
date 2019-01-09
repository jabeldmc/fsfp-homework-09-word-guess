/*** /test-WordGame.js
***/

// require
WordGame = require( './WordGame' );

console.log();
console.log( '# wordGame01' );
wordGame01 = new WordGame( [ 'jdc jdc' , 'skn skn' ] );
wordGame01.startGame();
console.log( wordGame01.showWord() );
wordGame01.guessLetter( 'K' );
wordGame01.guessLetter( 'J' );
wordGame01.guessLetter( 'C' );
wordGame01.guessLetter( 'D' );
console.log( wordGame01.showWord() );
console.log( wordGame01.isGuessed() );
