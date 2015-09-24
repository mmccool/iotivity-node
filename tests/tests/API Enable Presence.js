var testUtils = require( "../utils" )( require( "../../lowlevel" ) );

console.log( JSON.stringify( { assertionCount: 1 } ) );

var device = require( "../../index" )();
var settings = {
	role: "server"
};

device.configure( settings );

device._server.enablePresence( 1000 ).then(
	function() {
		testUtils.assert( "ok", true, "Presence enabled successfully" );
		process.exit( 0 );
	},
	function( error ) {
		testUtils.assert( "ok", false, "Presence enabled error with code: " + error.result );
		process.exit( 0 );
	} );