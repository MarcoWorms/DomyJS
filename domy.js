function changeCss(element, property, newValue, addPx) {
	if (addPx === undefined) {
		var addPx = false;
	}

	if (addPx) {
		element.style[property] = String(newValue + "px");
	} else {
		element.style[property] = String(newValue);
	}
}

function DomyJs(divId, width, height) {

	var engine = this;

	var div = document.getElementById(divId);
	changeCss(div, "backgroundColor", "black");
	changeCss(div, "width", width, true);
	changeCss(div, "height", height, true);

	this.gameObjects = [];

	this.start = function() {
		this.initialize();
		window.setInterval(engine.update, 1000);
	}

	this.button = function(x, y, width, height) {

	}
}
