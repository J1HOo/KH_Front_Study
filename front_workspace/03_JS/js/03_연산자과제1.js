const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const result = document.getElementById("res");

function calc() {
  const comp =
    Number(n1.value) > Number(n2.value)
      ? "첫 번째 숫자가 더 큽니다."
      : "두 번째 숫자가 더 크거나 같습니다.";
  const add = Number(n1.value) + Number(n2.value);
  const mul = Number(n1.value) * Number(n2.value);
  const sub = Number(n1.value) - Number(n2.value);

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

  result.style.color =
    Number(n1.value) > Number(n2.value) ? "lightblue" : "lightpink";
}
