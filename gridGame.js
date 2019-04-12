var squares = document.querySelectorAll(".square");
var square_nums = 6;
var colors = [];
var pickedColor = 0;
var title = document.querySelector("#title");
var backgroundColor = "#232323";


function setupTitle() {
	document.querySelector("#RGBNow").textContent = colors[pickedColor];
}

function setupButton() {
	document.querySelector("#easyButton").addEventListener("click", function(){
		square_nums = 3;
		reset();
	});
	document.querySelector("#hardButton").addEventListener("click", function(){
		square_nums = 6;
		reset();
	});
	document.querySelector("#tryAgainButton").addEventListener("click", function(){
		reset();
	})
}

function changeColor(cc) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = cc;
	}
}

function setupSquares() {
	for(var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", function(){
			console.log(this.style.background);
			console.log(colors[pickedColor]);
			if (this.style.background == colors[pickedColor]) {
				document.querySelector("#message").textContent = "Congratulation!";
				document.querySelector("#tryAgainButton").textContent = "Play Again";
				changeColor(this.style.background);
				title.style.background = this.style.background;
			}
			else {
				this.style.background = backgroundColor;
				message.textContent = "Wrong, please try again.";
			}
		})
	}
}

function reset() {
	generateRandomColor();
	for (var i = 0; i < squares.length; i++) {
		if (i < square_nums) {
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
		}
		else {
			squares[i].style.display = "none";
		}
	}
	pickColor();
	setupTitle();
	document.querySelector("#message").textContent = "";
	document.querySelector("#tryAgainButton").textContent = "reset";
}

function init() {
	setupButton();
	setupSquares();
	reset();
}

function generateRandomColor() {
	for(var i = 0; i < square_nums; i++) {
		colors[i] = getColor();
	}
}

function getColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function pickColor() {
	pickedColor = Math.floor(Math.random() * square_nums);
}

init();