(function () {
	"use strict";
	console.log("inside IFE");

	// $("#new-hover").hover(function(){
	// 	$("#test").show("400");
	// 	}, function() {
	// 		$("#test").hide("900");
	// });

	// $("ul").hover(function(event){
	// 	event.stopPropagation();
	// }, function(){
	// 	$("ul").hide();
	// })

	$("#test").hide();

	$("#new-hover").mouseover(function(){
		$("#test").slideDown("slow");
	});

	$("#wrapper").mouseleave(function(){
		$("#test").slideUp("slow");
	});
})();