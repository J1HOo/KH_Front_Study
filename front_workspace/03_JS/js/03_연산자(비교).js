/* 두 수가 같은지 비교 */
const v1 = document.getElementById("number1");
const v2 = document.getElementById("number2");
const r1 = document.getElementById("result1");

/*
  삼항연산자( ? A:B )
  값비교 ? "A" : "B" 값이 참(true)면 A, 거짓(false)면 B를 실행
*/

function 비교하기1() {
  r1.innerText =
    Number(v1.value) == Number(v2.value) ? "같습니다." : "같지 않습니다.";
  r1.style.color = Number(v1.value) == Number(v2.value) ? "oran)ge" : "red";
  r1.style.backgroundColor =
    Number(v1.value) == Number(v2.value) ? "black" : "white";
}

const in3 = document.getElementById("input3");
const in4 = document.getElementById("input4");
const r2 = document.getElementById("result2");

function 비교하기2() {
  r2.innerText =
    Number(in3.value) > Number(in4.value)
      ? "좌측 숫자값이 더 큽니다."
      : "우측 숫자값이 더 크거나 같습니다.";
  r2.style.color =
    Number(in3.value) > Number(in4.value) ? "yellowgreen" : "lightblue";
}
