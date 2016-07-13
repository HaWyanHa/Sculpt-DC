(function (ns) {
	"use strict";
	console.log("inside IFE");

	$(".menu-trigger").click(function(){
		$(".nav-menu").slideToggle(400, function(){
			$(this).toggleClass("nav-expand").css("display", "");
		});
	});


	$("#right-btn").click(function(){

		if ($("#main-ul").find(".on-image").attr("id") === ("last")){
			
			$("#first").addClass("on-image").removeClass("off-image");
			$("#last").addClass("off-image").removeClass("on-image");
			
		} else {
			$("#main-ul")
				.find(".on-image").addClass("off-image").removeClass("on-image")
				.next(".off-image").addClass("on-image").removeClass("off-image");
		}
	});

	$("#left-btn").click(function(){

		if ($("#main-ul").find(".on-image").attr("id") === ("first")){
			
			$("#last").addClass("on-image").removeClass("off-image");
			$("#first").addClass("off-image").removeClass("on-image");
		
		} else {
			$("#main-ul")
			.find(".on-image").addClass("off-image").removeClass("on-image")
			.prev(".off-image").addClass("on-image").removeClass("off-image");
		}
	});

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

	// faq effects
	$("#faqhead1").click(function(){
		$("#faqbody1").toggle("fast");
	});
	$("#faqhead2").click(function(){
		$("#faqbody2").toggle("fast");
	});
	$("#faqhead3").click(function(){
		$("#faqbody3").toggle("fast");
	});
	$("#faqhead4").click(function(){
		$("#faqbody4").toggle("fast");
	});
	$("#faqhead5").click(function(){
		$("#faqbody5").toggle("fast");
	});
	$("#faqhead6").click(function(){
		$("#faqbody6").toggle("fast");
	});
	$("#faqhead7").click(function(){
		$("#faqbody7").toggle("fast");
	});

	window.sculpt = ns;
})(window.sculpt || {});
