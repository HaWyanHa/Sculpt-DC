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

	window.sculpt = ns;
})(window.sculpt || {});