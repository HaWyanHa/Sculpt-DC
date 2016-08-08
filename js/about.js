(function (ns) {
	"use strict";

	ns.about = {};

	ns.about.load = function showAbout() {

		$("#home").hide();
		$("#newbies").hide();
		$("#contact").hide();
		$("#schedule").hide();
		$("#pricing").hide();
		$("#about").show();

	};

	$(".faq-question").click(function(){
		$(this).next("p").toggle("fast");
	});



	$("#faq").click(function(){
		$(".about-head").hide();
		$(".team").hide();
		$(".classes").hide();
		$(".faq").show();
		$("#faq").addClass("active-subnav");
		$("#body").removeClass("active-subnav");
		$("#classes").removeClass("active-subnav");
		$("#team").removeClass("active-subnav");
	});

	$("#body").click(function(){
		$(".faq").hide();
		$(".team").hide();
		$(".classes").hide();
		$(".about-head").show();
		$("#faq").removeClass("active-subnav");
		$("#body").addClass("active-subnav");
		$("#classes").removeClass("active-subnav");
		$("#team").removeClass("active-subnav");
	});

	$("#team").click(function(){
		$(".faq").hide();
		$(".about-head").hide();
		$(".classes").hide();
		$(".team").show();
		$("#faq").removeClass("active-subnav");
		$("#body").removeClass("active-subnav");
		$("#classes").removeClass("active-subnav");
		$("#team").addClass("active-subnav");
	});

	$("#classes").click(function(){
		$(".faq").hide();
		$(".about-head").hide();
		$(".classes").show();
		$(".team").hide();
		$("#faq").removeClass("active-subnav");
		$("#body").removeClass("active-subnav");
		$("#classes").addClass("active-subnav");
		$("#team").removeClass("active-subnav");
	});

	$("#cycle-link").click(function(){
		$(".cycle-team").show();
		$("#cycle-link").addClass("active-subnav");
		$(".yoga-team").hide();
		$("#yoga-link").removeClass("active-subnav");
	});

	$("#yoga-link").click(function(){
		$(".yoga-team").show();
		$("#yoga-link").addClass("active-subnav");
		$(".cycle-team").hide();
		$("#cycle-link").removeClass("active-subnav");
	});

	$("#cycle-class-link").click(function(){
		$("#cycle-class").show();
		$("#cycle-class-link").addClass("active-subnav");
		$("#yoga-class").hide();
		$("#yoga-class-link").removeClass("active-subnav");
	});

	$("#yoga-class-link").click(function(){
		$("#yoga-class").show();
		$("#yoga-class-link").addClass("active-subnav");
		$("#cycle-class").hide();
		$("#cycle-class-link").removeClass("active-subnav");
	});



	$(".test").click(function(){
		console.log("hello");
		$(this).next("div").toggle("fast");
	});
	window.sculpt = ns;
})(window.sculpt || {});