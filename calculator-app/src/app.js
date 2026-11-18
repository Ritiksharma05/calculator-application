const display = document.querySelector("#display");
const keys = document.querySelector(".calculator");
let first = null;
let operator = null;
let waitingForSecond = false;

function clearCalculator() {
  display.value = "0";
  first = null;
  operator = null;
  waitingForSecond = false;
}

keys.addEventListener("click", (event) => {
  const value = event.target.dataset.value;
  if (!value) return;

  if (/\d|\./.test(value)) {
    display.value = waitingForSecond ? value : display.value === "0" ? value : display.value + value;
    waitingForSecond = false;
  } else if (value === "C") {
    clearCalculator();
  } else if (["+", "-", "*", "/"].includes(value)) {
    first = Number(display.value);
    operator = value;
    waitingForSecond = true;
  } else if (value === "=") {
    if (first === null || operator === null) return;
    try {
      display.value = String(calculate(first, Number(display.value), operator));
    } catch (error) {
      display.value = error.message;
    }
    first = null;
    operator = null;
  }
});
