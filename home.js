(function (ns) {
	"use strict";

	ns.home = {};

	ns.home.load = function showhome() {
		$(".faq").hide();
		$(".everything").show();

	}
	window.sculpt = ns;
})(window.sculpt || {});