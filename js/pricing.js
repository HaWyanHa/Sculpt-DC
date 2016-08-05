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

	$(".pricing-policies").click(function(){
		$(this).next("div").toggle("fast");
	});

	$("#cycle-price-link").click(function(){
		$("#cycle-price").show();
		$("#cycle-price-link").addClass("active-subnav");
		$("#yoga-price").hide();
		$("#yoga-price-link").removeClass("active-subnav");
		$("#ride-price").hide();
		$("#ride-price-link").removeClass("active-subnav");
	});

	$("#yoga-price-link").click(function(){
		$("#yoga-price").show();
		$("#yoga-price-link").addClass("active-subnav");
		$("#cycle-price").hide();
		$("#cycle-price-link").removeClass("active-subnav");
		$("#ride-price").hide();
		$("#ride-price-link").removeClass("active-subnav");
	});

	$("#ride-price-link").click(function(){
		$("#ride-price").show();
		$("#ride-price-link").addClass("active-subnav");
		$("#yoga-price").hide();
		$("#yoga-price-link").removeClass("active-subnav");
		$("#cycle-price").hide();
		$("#cycle-price-link").removeClass("active-subnav");
	});


	window.sculpt = ns;
})(window.sculpt || {});