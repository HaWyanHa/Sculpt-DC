(function (ns) {
	"use strict";

	ns.faq = {};

	ns.faq.load = function showFaq() {
		console.log("in faq")
		$(".everything").hide();

	}
	window.sculpt = ns;
})(window.sculpt || {});