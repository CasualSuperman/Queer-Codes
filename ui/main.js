var slides = document.getElementById("slides")
					 .getElementsByTagName("li");
var stage = document.getElementById("stage");

var slide = 0;

function clearStage() {
	var frag = document.createDocumentFragment();
	while (stage.childNodes.length) {
		frag.appendChild(stage.firstChild);
	}
	return frag;
}

function next() {
	slides[slide++].appendChild(clearStage());
	var curr = slides[slide];
	while (curr.childNodes.length > 0) {
		stage.appendChild(curr.firstChild);
	}
}

function prev() {
	slides[slide--].appendChild(clearStage());
	var curr = slides[slide];
	while (curr.childNodes.length > 0) {
		stage.appendChild(curr.firstChild);
	}
}

(function init() {
	var intro = slides[slide];
	while (intro.childNodes.length) {
		stage.appendChild(intro.firstChild);
	}
}());
