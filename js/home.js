(function (ns) {
	"use strict";

	ns.home = {};

	ns.home.load = function showhome() {
		$("#about").hide();
		$("#newbies").hide();
		$("#contact").hide();
		$("#home").show();

	};
	window.sculpt = ns;
})(window.sculpt || {});