(function (ns) {
	"use strict";

	ns.contact = {};

	ns.contact.load = function showContact() {

		$("#home").hide();
		$("#about").hide();
		$("#newbies").hide();
		$("#schedule").hide();
		$("#pricing").hide();
		$("#contact").show();

	};

	window.sculpt = ns;
})(window.sculpt || {});