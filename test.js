window.addEventListener("mousemove", function(e) {
	console.log(e);
	jCSS(".moving", {
		"top": e.y -25 + "px",
		"left": e.x -60 + "px"
	});
});
