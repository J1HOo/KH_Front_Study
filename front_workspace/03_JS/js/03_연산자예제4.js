let count = 0;
const body = document.getElementById("body");

function 증가() {
  count += 1; // 1씩 증가
  document.getElementById("count").innerText = count;

  body.style.backgroundColor = count % 2 == 0 ? "#f0f0f0" : "#ffd1dc";
  // bd.style.backgroundColor = count % 2 != 0 ? "#ffd1dc" : "#f0f0f0";
}

function 초기화() {
  count = 0; // 초기화
  document.getElementById("count").innerText = count;
  // document.getElementById("count").innerText = 0; 지금 보이는 값만 초기화, 증가 감소에 값이 남음

  const cnt = document.getElementById("count");
  cnt.style.color = "black"; // 글자색 초기화
}

function 감소() {
  count += -1; // 1씩 감소
  document.getElementById("count").innerText = count;
  const cnt = document.getElementById("count");

  cnt.style.color = count % 2 == 0 ? "orange" : "black";
  // 이 코드에선 2의 배수 즉 0에도 초기화 시 오렌지 색이 적용되어
  // 그 후 증가를 누를 때 마다 오렌지 색이지만 글씨를 다시 검은색으로 변경하는 코드가 없음
}
