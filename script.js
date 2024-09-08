let coinCount = 0;
let energy = 1000;
const maxEnergy = 1000;
let characterClicked = false;

// DOM elements
const coinDisplay = document.getElementById('coin-count');
const energyDisplay = document.getElementById('energy-count');
const character = document.getElementById('character');

// Update energy display
function updateEnergyDisplay() {
    energyDisplay.textContent = `${energy} / ${maxEnergy}`;
}

// Increase coin count and decrease energy when character is clicked
character.addEventListener('click', () => {
    if (energy > 0) {
        coinCount++;
        energy--;
        coinDisplay.textContent = coinCount;
        updateEnergyDisplay();
        characterClicked = true;
    }
});

// Automatically increase energy every second if character is not clicked
setInterval(() => {
    if (!characterClicked && energy < maxEnergy) {
        energy++;
        updateEnergyDisplay();
    }
    characterClicked = false; // reset character click status for the next second
}, 1000);

