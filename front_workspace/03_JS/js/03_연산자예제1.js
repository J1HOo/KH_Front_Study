const number1 = document.getElementById("input1");
const number2 = document.getElementById("input2");
const number3 = document.getElementById("input3");
const result = document.getElementById("calcResult");

function plus() {
  const value1 = number1.value;
  const value2 = number2.value;
  const value3 = number3.value;
  result.innerText = Number(value1) + Number(value2) + Number(value3);
}

function multi() {
  const value1 = number1.value;
  const value2 = number2.value;
  const value3 = number3.value;
  result.innerText = Number(value1) * Number(value2) * Number(value3);
}
