(function (ns) {
	"use strict";

	ns.schedule = {};

	ns.schedule.load = function showSchedule() {

		$("#home").hide();
		$("#about").hide();
		$("#newbies").hide();
		$("#contact").hide();
		$("#pricing").hide();
		$("#schedule").show();

	};

	window.sculpt = ns;
})(window.sculpt || {});