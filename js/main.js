(function (ns) {
	"use strict";
	console.log("inside IFE");

	//Mobile Navigation
	$(".menu-trigger").click(function(){
		$(".nav-menu").slideToggle(400, function(){
			$(this).toggleClass("nav-expand").css("display", "");
		});
	});

	//Carousel Buttons
	$("#right-btn").click(function(){

		if ($("#main-ul").find(".on-image").attr("id") === ("last")){
			
			$("#first").addClass("on-image").removeClass("off-image");
				setTimeout(function(){
					$("#first").addClass("opac");
				}, 10);
			$("#last").addClass("off-image").removeClass("on-image").removeClass("opac");
			
		} else {
			$("#main-ul")
				.find(".on-image").addClass("off-image").removeClass("on-image").removeClass("opac")
				.next(".off-image").addClass("on-image").removeClass("off-image");

				setTimeout(function(){
					$(".on-image").addClass("opac");
				}, 10);
		}
	});

	$("#left-btn").click(function(){

		if ($("#main-ul").find(".on-image").attr("id") === ("first")){
			
			$("#last").addClass("on-image").removeClass("off-image");
				setTimeout(function(){
					$("#last").addClass("opac");
				}, 10);
			$("#first").addClass("off-image").removeClass("on-image").removeClass("opac");
		
		} else {
			$("#main-ul")
			.find(".on-image").addClass("off-image").removeClass("on-image").removeClass("opac")
			.prev(".off-image").addClass("on-image").removeClass("off-image");

			setTimeout(function(){
					$(".on-image").addClass("opac");
				}, 10);
		}
	});

	//Membership Benefits
	var myBenefits = document.getElementById('myBenefits');
	var benefitsLink = document.getElementById("benefits");
	var span1 = document.getElementsByClassName("close")[0];

	benefitsLink.onclick = function() {
	    myBenefits.style.display = "block";
	};

	span1.onclick = function() {
	    myBenefits.style.display = "none";
	};


	//Cancelation Policy
	var myCancelation = document.getElementById("myCancelation");
	var cancelationLink = document.getElementById("cancelation");
	var span2 = document.getElementsByClassName("close")[1];

	cancelationLink.onclick = function() {
	    myCancelation.style.display = "block";
	    console.log("inside cancelation");
	};

	span2.onclick = function() {
	    myCancelation.style.display = "none";
	};

	//Unlimited Access Memebership
	var myUnlimited = document.getElementById("myUnlimited");
	var unlimitedLink = document.getElementById("unlimited");
	var span3 = document.getElementsByClassName("close")[2];

	unlimitedLink.onclick = function() {
	    myUnlimited.style.display = "block";
	    
	};

	span3.onclick = function() {
	    myUnlimited.style.display = "none";
	};

	//Corporate Membership Program
	var myCorporate = document.getElementById("myCorporate");
	var corporateLink = document.getElementById("corporate");
	var span4 = document.getElementsByClassName("close")[3];

	corporateLink.onclick = function() {
	    myCorporate.style.display = "block";
	    
	};

	span4.onclick = function() {
	    myCorporate.style.display = "none";
	};

	//Energy Exchange Program
	var myEnergy = document.getElementById("myEnergy");
	var energyLink = document.getElementById("energy");
	var span5 = document.getElementsByClassName("close")[4];

	energyLink.onclick = function() {
	    myEnergy.style.display = "block";
	    
	};

	span5.onclick = function() {
	    myEnergy.style.display = "none";
	};

	//close all the modals
	window.onclick = function(event) {
	    if (event.target == myEnergy) {
	        myEnergy.style.display = "none";
	        console.log("energy")
	    } else if (event.target == myCorporate) {
	        myCorporate.style.display = "none";
	        console.log("my corporate")
	    } else if (event.target == myUnlimited) {
	        myUnlimited.style.display = "none";
	    } else if (event.target == myUnlimited) {
	        myUnlimited.style.display = "none";
	    } else if (event.target == myCancelation) {
	        myCancelation.style.display = "none";
	    } else if (event.target == myBenefits) {
	        myBenefits.style.display = "none";
	    }
	};


	window.sculpt = ns;
})(window.sculpt || {});
