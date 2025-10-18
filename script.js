function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operation = document.getElementById("operation").value;
  const resultText = document.getElementById("resultText");

  let result;

  if (isNaN(num1) || isNaN(num2)) {
    resultText.textContent = "Please enter both numbers.";
    return;
  }

  switch (operation) {
    case "add":
      result = num1 + num2;
      resultText.textContent = "The sum of " + num1 + " and " + num2 + " is " + result + ".";
      break;

    case "sub":
      result = num1 - num2;
      resultText.textContent = "The difference between " + num1 + " and " + num2 + " is " + result + ".";
      break;

    case "mul":
      result = num1 * num2;
      resultText.textContent = "The product of " + num1 + " and " + num2 + " is " + result + ".";
      break;

    case "div":
      if (num2 === 0) {
        resultText.textContent = "Cannot divide by zero.";
      } else {
        result = num1 / num2;
        resultText.textContent = "The division of " + num1 + " by " + num2 + " is " + result.toFixed(2) + ".";
      }
      break;

    default:
      resultText.textContent = "Please select a valid operation.";
  }
}