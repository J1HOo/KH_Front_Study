const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const rst = document.getElementById("result");

function sum() {
  const v1 = Number(num1.value);
  const v2 = Number(num2.value);
  const total = v1 + v2;
  rst.innerText = "합" + total;
}

function mul() {
  const v1 = Number(num1.value);
  const v2 = Number(num2.value);
  const total = v1 * v2;
  rst.innerText = "합" + total;
}

function evenOdd() {
  //홀짞 유무 확인
  const v1 = Number(num1.value);
  const v2 = Number(num2.value);
  const sunResult = v1 + v2;
  const isEven = sunResult % 2 == 0 ? "짝수" : "홀수";
  rst.innerText = "합" + sunResult + "은(는) " + isEven + "입니다";
}
