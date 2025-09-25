// content.js (your content script)
document.addEventListener("keydown", function (event) {
    // Check if the Enter key is pressed
    if (event.key === "Enter" || event.code === "Enter") {
        event.preventDefault(); // Prevent default Enter behavior
        handleEnterKeyPress();
    }
});

function handleEnterKeyPress() {
    // Try to click the "Check Answer" button first
    const checkAnswerButton = document.getElementById("smt_bottomnav_button_input_checkAnswer");
    if (checkAnswerButton && !checkAnswerButton.disabled) {
        checkAnswerButton.click();
        return;
    }

    // If "Check Answer" is not available, try the "Next" button
    const nextButton = document.getElementById("smt_bottomnav_button_input_learningCorrect");
    if (nextButton && !nextButton.disabled) {
        nextButton.click();
        return;
    }

    console.log("No actionable button found");
}
