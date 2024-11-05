let correctAnswer = 0;

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateProblem() {
    const minNumber = parseInt(document.getElementById("min-number").value);
    const maxNumber = parseInt(document.getElementById("max-number").value);

    const operations = [];
    if (document.getElementById("addition").checked) operations.push("addition");
    if (document.getElementById("subtraction").checked) operations.push("subtraction");
    if (document.getElementById("multiplication").checked) operations.push("multiplication");
    if (document.getElementById("division").checked) operations.push("division");

    if (operations.length === 0) {
        alert("Please select at least one operation.");
        return;
    }

    const operationType = operations[Math.floor(Math.random() * operations.length)];

    let num1, num2, equation;

    num1 = getRandomNumber(minNumber, maxNumber);
    num2 = getRandomNumber(minNumber, maxNumber);

    if (operationType === "addition") {
        equation = `${num1} + ${num2}`;
        correctAnswer = num1 + num2;
    } else if (operationType === "subtraction") {
        if (num1 < num2) [num1, num2] = [num2, num1];
        equation = `${num1} - ${num2}`;
        correctAnswer = num1 - num2;
    } else if (operationType === "multiplication") {
        equation = `${num1} * ${num2}`;
        correctAnswer = num1 * num2;
    } else if (operationType === "division") {
        num1 = num1 * num2;
        equation = `${num1} / ${num2}`;
        correctAnswer = num1 / num2;
    }

    document.getElementById("equation-output").innerHTML = equation;
    document.getElementById("user-answer").value = '';
    document.getElementById("feedback").innerHTML = '';
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById("user-answer").value);
    const feedbackDiv = document.getElementById("feedback");

    if (userAnswer === correctAnswer) {
        feedbackDiv.innerHTML = "Your Answer Is Correct! 😊";
        feedbackDiv.className = "feedback correct";
    } else {
        feedbackDiv.innerHTML = `Your Answer Is Sadly Incorrect 😞, the correct answer was ${correctAnswer}.`;
        feedbackDiv.className = "feedback incorrect";
    }
}
