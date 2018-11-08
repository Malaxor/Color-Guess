//====================================================================
// GLOBAL VARIABLES 
//====================================================================
var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("color-display");
var msgDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset-btn");
var modeBtns = document.querySelectorAll(".mode");

//====================================================================
// MAIN LOGIC
//====================================================================
init();

function init() {

	setUpModeBtns();
	setUpSquares();
	reset();
}

//====================================================================
// BUTTON LOGIC
//====================================================================

for(var i = 0; i < modeBtns.length; i++) {

	modeBtns[i].addEventListener("click", function() {

		modeBtns[0].classList.remove("selected");
		modeBtns[1].classList.remove("selected");
		this.classList.add("selected");

		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset();
	});
}

// reset button
resetBtn.addEventListener("click", function() {

	reset();	
});


//====================================================================
// FUNCTIONS
//====================================================================

function setUpSquares() {

	for(var i = 0; i < squares.length; i++) {

		squares[i].addEventListener("click", function() {

			var clickedColor = this.style.backgroundColor;

			if(clickedColor === pickedColor) {

				msgDisplay.textContent = "Correct!";
				changeColor(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetBtn.textContent = "Play Again?"
			} 
			else {

				this.style.backgroundColor = "#232323";
				msgDisplay.textContent = "Try Again";
			}
		});
	}
}

function setUpModeBtns() {

	for(var i = 0; i < modeBtns.length; i++) {

		modeBtns[i].addEventListener("click", function() {

			modeBtns[0].classList.remove("selected");
			modeBtns[1].classList.remove("selected");
			this.classList.add("selected");

			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			reset();
		});
	}
}

function reset() {

	colors = randomColorsArray(numSquares);
	pickedColor = randomColorsIndex();
	colorDisplay.textContent = pickedColor;

	msgDisplay.textContent = "";
	resetBtn.textContent = "New Colors";

	for(var i = 0; i < squares.length; i++) {

		if(colors[i]) {

			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else {

			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue"		
};

// changes the color of all squares to the correctly guessed color
function changeColor(color) {

	for(var i = 0; i < colors.length; i++) {

		squares[i].style.backgroundColor = color;
	}
};
// randomly picks an index from the colors array
function randomColorsIndex() {

	var random = Math.floor(Math.random() * colors.length);
	return colors[random]; 	
};

// pushes random rgb color into an empty array
function randomColorsArray(num) {
	// make an empty array
	var arr = [];
	// repeat "num" times
	for(var i = 0; i < num; i++) {
		// push randomColor function intot he empty array
		arr.push(randomRGB());
	}
	return arr;
};
// generated (returns) a string with random rgb values
function randomRGB() {
	// pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	// pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	// pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
};
