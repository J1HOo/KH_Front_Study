const inputId = document.getElementById("inputId");
const inputPw = document.getElementById("inputPw");
const inputMp = document.getElementById("inputMp");
const inputTp = document.getElementById("inputTp");

function signUp() {
  const id = inputId.value;
  const pw = inputPw.value;
  const mp = inputMp.value;
  const tp = inputTp.value;

  id && pw && mp && tp ? alert("로그인 성공") : alert("로그인 실패");
}
