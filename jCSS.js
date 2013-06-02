window["jCSS"] = window["jCSS"] !== undefined ? window["jCSS"] :
(function() {
	// === Construction Start Here ==============================
	var styleElement = document.createElement("style")
	  , stylesheet;
	styleElement.type = "text/css";
	document.getElementsByTagName("head")[0].appendChild(styleElement);
	for(var i=document.styleSheets.length-1; i >= 0; i--) {
		var s = document.styleSheets[i];
		if(s.ownerNode === styleElement) {
			stylesheet = s;
			break;
		}
	}
	
	// === Methods Start Here ====================================
	var jCSSObj = function(obj) {
		for(var str in obj) {
			for(var name in obj[str]) {
				stylesheet.addRule(str, name + ":" + obj[str][name] + ";")
			}
		}
	};
	
	return function jCSS() {
		if(arguments.length % 2 == 0) {
			for(var i=0; arguments.length > i; i+=2) {
				var obj={};
				obj[arguments[i]] = arguments[i+1];
				jCSSObj(obj);
			}
		}
		else jCSSObj(arguments[0]);
	}
}());


