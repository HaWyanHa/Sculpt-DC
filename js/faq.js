(function (ns) {
	"use strict";

	ns.faq = {};

	ns.faq.load = function showFaq() {
		console.log("in faq");
		$(".everything").hide();
		$(".faq").show();

	};
	window.sculpt = ns;
})(window.sculpt || {});