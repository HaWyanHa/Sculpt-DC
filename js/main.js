(function (ns) {
	"use strict";
	console.log("inside IFE");

	$(".menu-trigger").click(function(){
		$(".nav-menu").slideToggle(400, function(){
			$(this).toggleClass("nav-expand").css("display", "");
		});
	});


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

	window.onclick = function(event) {
	    if (event.target == myBenefits) {
	        myBenefits.style.display = "none";
	    }
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

	window.onclick = function(event) {
	    if (event.target == myCancelation) {
	        myCancelation.style.display = "none";
	    }
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

	window.onclick = function(event) {
	    if (event.target == myUnlimited) {
	        myUnlimited.style.display = "none";
	    }
	};


	window.sculpt = ns;
})(window.sculpt || {});
