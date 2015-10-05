var game = new DomyJs("gameDiv", 800, 600);

game.initialize = function() {
	this.button1 = game.button(10,10,50,50);
}

game.update = function() {
	console.log("1");
}

game.start();