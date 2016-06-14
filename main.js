(function (ns) {
	"use strict";
	console.log("inside IFE");

	window.location.hash = "#sculpt";

	console.log(window.location.hash)

	$("#dropdown1").hide();
	$("#dropdown2").hide();
	$("#dropdown3").hide();
	$("#dropdown4").hide();

	$("#new-hover1").mouseover(function(){
		$("#dropdown1").slideDown("slow");
	});
	$("#new-hover2").mouseover(function(){
		$("#dropdown2").slideDown("slow");
	});
	$("#new-hover3").mouseover(function(){
		$("#dropdown3").slideDown("slow");
	});
	$("#new-hover4").mouseover(function(){
		$("#dropdown4").slideDown("slow");
	});

	$("#wrapper1").mouseleave(function(){
		$("#dropdown1").slideUp("fast");
	});
	$("#wrapper2").mouseleave(function(){
		$("#dropdown2").slideUp("fast");
	});
	$("#wrapper3").mouseleave(function(){
		$("#dropdown3").slideUp("fast");
	});
	$("#wrapper4").mouseleave(function(){
		$("#dropdown4").slideUp("fast");
	});

	window.sculpt = ns;
})(window.sculpt || {});