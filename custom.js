let numSquares = 6;
let pickedColor;
let colors = [];

const colorDisplay = document.getElementById("color-display");
const msgDisplay = document.querySelector("#message");
const h1 = document.querySelector("h1");
const resetBtn = document.querySelector("#reset-btn");
const squares = document.querySelectorAll(".square");
//====================================================================
// MAIN LOGIC
//====================================================================
(function init() {
	setUpModeBtns();
	setUpSquares();
	reset();
}());
//====================================================================
// BUTTON LOGIC
//====================================================================
function setUpModeBtns() {

	const modeBtns = document.querySelectorAll(".mode");
	for(let i = 0; i < modeBtns.length; i++) {

		modeBtns[i].addEventListener("click", function() {
	
			modeBtns[0].classList.remove("selected");
			modeBtns[1].classList.remove("selected");
			this.classList.add("selected");
	
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			reset();
		});
	}
}
resetBtn.addEventListener("click", function() { 
	reset() 
});
//====================================================================
// FUNCTIONS
//====================================================================
// changes the color of all squares to the correctly guessed color
function changeColor(color) {

	for(let i = 0; i < colors.length; i++) {
		squares[i].style.backgroundColor = color;
	}
};
function setUpSquares() {

	for(let i = 0; i < squares.length; i++) {

		squares[i].addEventListener("click", function() {

			let clickedColor = this.style.backgroundColor;

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
// randomly picks an index from the colors array
function randomColorsIndex() {
	const random = Math.floor(Math.random() * colors.length);
	return colors[random]; 	
};
// returns a string with random rgb values
function randomRGB() {
	// pick a "red" from 0 - 255
	const r = Math.floor(Math.random() * 256);
	// pick a "green" from 0 - 255
	const g = Math.floor(Math.random() * 256);
	// pick a "blue" from 0 - 255
	const b = Math.floor(Math.random() * 256);
	return `rgb(${r}, ${g}, ${b})`;
};
// pushes random rgb color into an empty array
function randomColorsArray(num) {
	const arr = [];

	for(let i = 0; i < num; i++) {
		arr.push(randomRGB());
	}
	return arr;
};

function reset() {

	colors = randomColorsArray(numSquares);
	pickedColor = randomColorsIndex();
	colorDisplay.textContent = pickedColor;

	msgDisplay.textContent = "";
	resetBtn.textContent = "New Colors";

	for(let i = 0; i < squares.length; i++) {

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
