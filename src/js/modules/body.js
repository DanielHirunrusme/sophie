var settings = require( "modules/settings" );


module.exports = function( el ) {
		var $el = $( el ),
		$window = $( window );
		
		init();
		winResize();
		
		function init(){
			$window.on('resize', winResize);	
		}
		
		function winResize(){
			
			if( $window.height() * 1.5 < $window.width() ) {
				$('body').addClass('landscape-format');
			} else {
				$('body').removeClass('landscape-format')
			}
				
		}
		
};
  