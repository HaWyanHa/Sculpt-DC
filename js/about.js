(function (ns) {
	"use strict";

	ns.about = {};

	ns.about.load = function showAbout() {
		
		$("#home").hide();
		$("#about").show();

	};
	window.sculpt = ns;
})(window.sculpt || {});