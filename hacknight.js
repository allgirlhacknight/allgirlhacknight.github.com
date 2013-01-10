var cache = {
	about: $( "p.about" )	
};

cache.about.on( "click", "a", function( e ) {
	e.preventDefault();
	cache.about.css( "height", "auto" );
	this.style.display = "none";
});