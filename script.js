const display = document.querySelector(".input");

const buttons = document.querySelectorAll(".view");

let operator_exists = false;
let can_eval = false;
let number = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const inp = button.textContent;

    switch (inp) {
      case "+":
        if (operator_exists && can_eval) {
          if (evaluate()) {
            break;
          }
          !operator_exists;
        }
        number = number + "+";
        operator_exists = true;
        can_eval = false;
        break;
      case "-":
        if (operator_exists && can_eval) {
          if (evaluate()) {
            break;
          }
          !operator_exists;
        }
        number = number + "-";
        operator_exists = true;
        can_eval = false;
        break;
      case "*":
        if (operator_exists) {
          if (evaluate()) {
            break;
          }
          !operator_exists;
        }
        number = number + "*";
        operator_exists = true;
        can_eval = false;
        break;
      case "/":
        if (operator_exists) {
          if (evaluate()) {
            break;
          }
          !operator_exists;
        }
        number = number + "/";
        operator_exists = true;
        can_eval = false;
        break;
      case ".":
        number = number + ".";
        break;
      case "C":
        number = "";
        break;
      case "=":
        evaluate();
        break;

      default:
        can_eval = true;
        number = number + inp;
    }

    function evaluate() {
      try {
        const result = eval(number);
        number = result;
      } catch (e) {
        alert("invalid input");
        number = "";
        return 1;
      }
    }

    display.value = number;
  });
});

const clear = document.querySelector(".clear");

clear.addEventListener("click", () => {
  number = "";
  display.value = "";
});

const equalButton = document.querySelector(".cal");

equalButton.addEventListener("click", () => {
  evaluate();
});

function evaluate() {
  try {
    const result = eval(number);
    number = result;
  } catch (e) {
    alert("invalid input");
    number = "";
    return 1;
  }
  display.value = number;
}
