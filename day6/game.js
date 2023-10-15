const randomNumber = Math.floor(Math.random() * 100) + 1;
        let attempts = 0;

        document.getElementById("guessButton").addEventListener("click", function() {
            const userGuess = parseInt(document.getElementById("inputBox").value);
            attempts++;

            if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
                alert("Please enter a valid number between 1 and 100.");
            } else {
                if (userGuess < randomNumber) {
                    setMessage("Too low! Try again.");
                } else if (userGuess > randomNumber) {
                    setMessage("Too high! Try again.");
                } else {
                    setMessage(`Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`);
                    document.getElementById("guessButton").disabled = true;
                }
            }
        });

        function setMessage(message) {
            document.getElementById("message").textContent = message;
        }