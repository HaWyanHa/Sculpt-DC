(function (ns) {
	"use strict";

	window.addEventListener("hashchange", function hashNav(){
		console.log("addEventListener is working");
		doNav();
	});

	function doNav() {
		console.log("inside doNav function");
  
       var newView = ( window.location.hash );
       console.log(newView);

       if (newView.length === 0) {
       	console.log(newView.length);
           window.location.hash = '#home'; //need to default to something (WILL ADD LATER)
       } else {

           var viewName = window.location.hash.substr(1);
           if (ns[viewName] && ns[viewName].load) {
               ns[ viewName ].load();
           }
       }
   }

	window.sculpt = ns;
})(window.sculpt || {});