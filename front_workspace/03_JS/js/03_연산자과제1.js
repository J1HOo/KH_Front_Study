const num1 = document.getElementById("n1");
const num2 = document.getElementById("n2");
const result = document.getElementById("res");

function calc() {
  const n1 = Number(num1.value);
  const n2 = Number(num2.value);

  const comp =
    n1 > n2
      ? "첫 번째 숫자가 더 큽니다."
      : "두 번째 숫자가 더 크거나 같습니다.";
  const add = n1 + n2;
  const mul = n1 * n2;
  const sub = n1 - n2;

  result.innerText =
    comp +
    "\n" +
    "더하기 결과 :" +
    add +
    "\n" +
    "곱하기 결과 : " +
    mul +
    "\n" +
    "빼기 결과 :" +
    sub;

  result.style.color = n1 > n2 ? "lightblue" : "lightpink";
}
