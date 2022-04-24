// Project Images Slide Show
var slideshowIndex = 1;

function changeImage(n) {
	showImageRB(slideshowIndex += n);
}

function showImageRB(n) {
	var i;
	var x = document.getElementById('book-images').getElementsByClassName("slideshow-images");
	if (n > x.length) {slideshowIndex = 1}
	if (n < 1) {slideshowIndex = x.length}
	for (i = 0; i < x.length; i++) {
		$(x[i]).fadeOut(600, 'swing');
	}
	$(x[slideshowIndex-1]).fadeIn(400, 'swing');
	document.getElementById('ss_count').innerHTML = 'Image ' + slideshowIndex.toString() + ' of ' + x.length.toString();
}

showImageRB(slideshowIndex);
