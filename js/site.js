function runOnScroll() {
	var oHeader = document.getElementById("header");

	// console.info("Scrolltop: " + document.documentElement.scrollTop);
    if (document.documentElement.scrollTop >= 50) {
		oHeader.classList.add('scrolled');
	} else {
		if (oHeader.classList.contains('scrolled')) {
		   oHeader.classList.remove('scrolled');
		}
	}
}
window.addEventListener("scroll", runOnScroll);