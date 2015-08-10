var codeview = [".blue-view__html", ".blue-view__css", ".blue-view__js", ".red-view__html", ".red-view__css", ".red-view__js"];
var blueview = [".blue-view__html", ".blue-view__css", ".blue-view__js"];
var redview = [".red-view__html", ".red-view__css", ".red-view__js"];

var makeInactive = function() {   
    for (var i = 0; i < 6; i++) {
    	$(codeview[i]).removeClass("team-active");
    	$(codeview[i]).removeClass("single-active-blue");
    	$(codeview[i]).removeClass("single-active-red").addClass("inactive");
    }
};

var defaultView = function() {   
    for (var i = 0; i < 6; i++) {
    	$(codeview[i]).removeClass("single-active-blue");
    	$(codeview[i]).removeClass("single-active-red");
    	$(codeview[i]).removeClass("inactive");
    }
};

var teamViewRed = function() {   
    for (var i = 0; i < 6; i++) {
    	$(codeview[i]).removeClass("single-active-blue");
    	$(codeview[i]).removeClass("single-active-red");
    }

    for (var j = 0; j < 3; j++) {
    	$(blueview[j]).addClass("inactive");
    }

    for (var k = 0; k < 3; k++) {
    	$(redview[k]).removeClass("inactive");
    	$(redview[k]).addClass("team-active");
    }    
};

var teamViewBlue = function() {   
    for (var i = 0; i < 6; i++) {
    	$(codeview[i]).removeClass("single-active-blue");
    	$(codeview[i]).removeClass("single-active-red");
    }

    for (var j = 0; j < 3; j++) {
    	$(blueview[j]).addClass("inactive");
    }

    for (var k = 0; k < 3; k++) {
    	$(blueview[k]).removeClass("inactive");
    	$(blueview[k]).addClass("team-active");
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
	} else if ( $(this).hasClass("red-team-view") ) {
		makeInactive();
		teamViewRed();
	} else if ( $(this).hasClass("blue-team-view") ) {
		makeInactive();
		teamViewBlue();
	} else {
		makeInactive();
		defaultView();

	}
});