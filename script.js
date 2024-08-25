let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.addEventListener("DOMContentLoaded", () => {
    const submitGame = document.getElementById("submitGame");
    const resetGame = document.getElementById("resetGame");

    submitGame.addEventListener("click", checkGuess);
    resetGame.addEventListener("click", restartGame);
});

const checkGuess = () => {
    const input = document.getElementById("guess-input");
    const userGuess = Number(input.value);

    attempts++;
    let message = "";

    if (userGuess < 1 || userGuess > 100) {
        message = "Please enter a number between 1 and 100.";
    } else if (userGuess < randomNumber) {
        message = "Too low! Try again.";
    } else if (userGuess > randomNumber) {
        message = "Too high! Try again.";
    } else {
        message = `Congratulations! You guessed the correct number in ${attempts} attempts.`;
    }

    document.getElementById("message").textContent = message;
    document.getElementById("attempts").textContent = attempts;
    input.value = "";
};

function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("guess-input").value = "";
    document.getElementById("message").textContent = "";
    document.getElementById("attempts").textContent = attempts;
}
