function calculate() {
    // Get input values
    let num1 = document.getElementById('number1').value;
    let operation = document.getElementById('operation').value;
    let num2 = document.getElementById('number2').value;
    let resultDiv = document.getElementById('result');

    // Convert inputs to numbers
    let number1 = parseFloat(num1);
    let number2 = parseFloat(num2);

    // Validate input
    if (isNaN(number1) || isNaN(number2)) {
        resultDiv.innerHTML = "Invalid input. Please enter valid numbers.";
        resultDiv.style.color = "red";
        return;
    }

    // Perform calculation using if-else
    let result;
    if (operation === '+') {
        result = number1 + number2;
    } else if (operation === '-') {
        result = number1 - number2;
    } else if (operation === '*') {
        result = number1 * number2;
    } else if (operation === '/') {
        if (number2 === 0) {
            resultDiv.innerHTML = "Error: Division by zero is not allowed.";
            resultDiv.style.color = "red";
            return;
        }
        result = number1 / number2;
    } else {
        resultDiv.innerHTML = "Invalid operation. Please use +, -, *, or /.";
        resultDiv.style.color = "red";
        return;
    }

    // Display the result in the HTML
    resultDiv.innerHTML = "Result: " + result;
    resultDiv.style.color = "white";
}
