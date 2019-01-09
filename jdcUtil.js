/*** jdcUtil.js
***/


/*** OBJECT jdcUtil()
***/

var jdcUtil = {


    /*** FUNCTION randomNumber()
    ***/

    randomNumber : function( cardinality ) {
        // check cardinatliy
        if ( !cardinality ) {
            throw new TypeError( 'Parameter \'cardinality\' is required.' );
        }
        if ( cardinality < 1 ) {
            throw new RangeError( 'Parameter \'cardinality\' should be greater than 0.' )
        }

        var randomNumber = ( Math.floor( Math.random() * cardinality ) );
        return randomNumber;
    } ,


    /*** FUNCTION randomNumbers()
    ***/

    randomNumbers : function( length , cardinality , doDistinct ) {
        // check cardinatliy
        if ( !cardinality ) {
            throw new TypeError( 'Parameter \'cardinality\' is required.' );
        }
        if ( cardinality < 1 ) {
            throw new RangeError( 'Parameter \'cardinality\' should be greater than 0.' )
        }
        if (
            ( doDistinct === true ) &&
            ( cardinality < length )
        ) {
            throw new RangeError( 'Parameter \'cardinality\' should be equal or greater than parameter \'length\'.' );
        }

        // default doDistinct
        doDistinct = ( ( doDistinct !== undefined ) && ( doDistinct === true ) );

        // check doDistinct
        if ( doDistinct === false ) {
            // allow duplicate numbers
            var randomNumbers = [];

            while ( randomNumbers.length < length ) {
                var randomNumber = this.randomNumber( cardinality );
                randomNumbers.push( randomNumber );
            }
        }
        else {
            // numbers should be unique
            var randomNumbers = [];
            var blackList = [];

            while ( randomNumbers.length < length ) {
                var randomNumber = this.randomNumber( cardinality );

                // ensure unique value
                while( blackList.indexOf( randomNumber ) > -1 ) {
                    randomNumber++;
                    // go "around the clock"
                    if ( randomNumber === cardinality ) {
                        randomNumber = 0;
                    }
                }

                randomNumbers.push( randomNumber );
                blackList.push( randomNumber );
            }
        }

        return randomNumbers;
    }

}


/*** Export
***/

module.exports = jdcUtil;
