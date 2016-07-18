(function (ns) {
	"use strict";

	ns.about = {};

	ns.about.load = function showAbout() {

		$("#home").hide();
		$("#about").show();

	};

	$("#faqhead1").click(function(){
	 	$("#faqbody1").toggle("fast");
	});

	window.sculpt = ns;
})(window.sculpt || {});