var makeInactive = function() {   
    var codeview = [".blue-view__html", ".blue-view__css", ".blue-view__js", ".red-view__html", ".red-view__css", ".red-view__js"];
    for (var i = 0; i < codeview.length; i++) {
    	$(codeview[i]).removeClass("single-active-blue", "single-active-red").addClass("inactive");
    }
};


$(".button").click(function() {
	if ( $(this).hasClass("blue-html") ) {
		makeInactive();
		$(".blue-view__html").removeClass("inactive").addClass("single-active-blue");
	} else if ( $(this).hasClass("blue-css") ) {
		makeInactive();
		$(".blue-view__css").removeClass("inactive").addClass("single-active-blue");
	} else if ( $(this).hasClass("blue-js") ) {
		makeInactive();
		$(".blue-view__js").removeClass("inactive").addClass("single-active-blue");
	} else if ( $(this).hasClass("red-html") ) {
		makeInactive();
		$(".red-view__html").removeClass("inactive").addClass("single-active-red");
	} else if ( $(this).hasClass("red-css") ) {
		makeInactive();
		$(".red-view__css").removeClass("inactive").addClass("single-active-red");
	} else if ( $(this).hasClass("red-js") ) {
		makeInactive();
		$(".red-view__js").removeClass("inactive").addClass("single-active-red");
	} else {
		makeInactive();
		console.log("WOWWOW");
	}
});