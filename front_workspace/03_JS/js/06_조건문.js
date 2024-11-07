const input1 = document.getElementById("input1");

function check1() {
  // input으로 입력받은 값 가져오기
  const v1 = Number(input1.value);

  // v1이 0보다 클 경우
  if (0 < v1) {
    alert("0보다 큰 양수 입니다.");
  }
}

if (v1 <= 0) {
  alert("0과 같거나 0보다 작은 수 입니다.");
}
