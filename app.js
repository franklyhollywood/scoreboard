// import functions and grab DOM elements
const score1El = document.getElementById('ducksScore');
const score2El = document.getElementById('pigeonsScore');
const ducksButton = document.getElementById('ducksButton');
const pigeonsButton = document.getElementById('pigeonsButton');
const reset = document.getElementById('reset');

//console.log(score1El, score2El, ducksButton, pigeonsButton);
// initialize state
let counter1 = 0;
let counter2 = 0;

// set event listeners
ducksButton.addEventListener('click', () => {
	counter1 = counter1 + 7;
	score1El.textContent = counter1;
});

pigeonsButton.addEventListener('click', () => {
	counter2 = counter2 + 7;
	score2El.textContent = counter2;
});

reset.addEventListener('click', () => {
	counter2 === 0;
	counter1 === 0;
	score2El.textContent = counter2;
	score1El.textContent = counter1;
});
// get user input
// use user input to update state
// update DOM to reflect the new state
