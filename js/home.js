(function (ns) {
	"use strict";

	ns.home = {};

	ns.home.load = function showhome() {
		$("#about").hide();
		$("#home").show();

	};
	window.sculpt = ns;
})(window.sculpt || {});