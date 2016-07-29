(function (ns) {
	"use strict";

	ns.about = {};

	ns.about.load = function showAbout() {

		$("#home").hide();
		$("#newbies").hide();
		$("#contact").hide();
		$("#schedule").hide();
		$("#pricing").hide();
		$("#about").show();

	};

	$(".faq-question").click(function(){
		$(this).next("p").toggle("fast");
	});

	$("#faq").click(function(){
		$(".about-head").hide();
		$(".faq").show();
	})

	window.sculpt = ns;
})(window.sculpt || {});