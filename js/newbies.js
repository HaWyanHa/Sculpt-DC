(function (ns) {
	"use strict";

	ns.newbies = {};

	ns.newbies.load = function showNewbies() {

		console.log("inside newbies");
		$("#home").hide();
		$("#about").hide();
		$("#contact").hide();
		$("#schedule").hide();
		$("#pricing").hide();
		$("#newbies").show();

	};

	window.sculpt = ns;
})(window.sculpt || {});