const inputId = document.getElementById("inputId");
const inputPw = document.getElementById("inputPw");
const inputMp = document.getElementById("inputMp");
const inputTp = document.getElementById("inputTp");
const loginId = document.getElementById("loginId");
const loginPw = document.getElementById("loginPw");
const msg = document.getElementById("msg");

function signUp() {
  const id = inputId.value;
  const pw = inputPw.value;
  const mp = inputMp.value;
  const tp = inputTp.value;

  id && pw && (mp || tp) ? alert("회원가입 성공") : alert("회원가입 실패");
  mp || tp ? (msg.style.display = "none") : (msg.style.display = "block");
}

function logIn() {
  const id = loginId.value;
  const pw = loginPw.value;
  id == "123" && pw == "123" ? alert("로그인 성공") : alert("로그인 실패");
}
