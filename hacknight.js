var cache = {
	about: $( "p.about" )	
};

cache.about.on( "click", "a", function( e ) {
	e.preventDefault();
	document.querySelector( "p.aboutlong" ).style.display = "block";
	this.style.display = "none";
});