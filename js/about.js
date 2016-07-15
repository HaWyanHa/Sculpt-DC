(function (ns) {
	"use strict";

	ns.about = {};

	ns.about.load = function showAbout() {
		console.log("in faq");
		$("#home").hide();
		$("#about").show();

	};
	window.sculpt = ns;
})(window.sculpt || {});