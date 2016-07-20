(function (ns) {
	"use strict";

	ns.pricing = {};

	ns.pricing.load = function showPricing() {

		$("#home").hide();
		$("#about").hide();
		$("#newbies").hide();
		$("#schedule").hide();
		$("#contact").hide();
		$("#pricing").show();

	};

	window.sculpt = ns;
})(window.sculpt || {});