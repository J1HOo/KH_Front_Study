// 아이디 유효성
function idMsg() {
  const idMsg = document.getElementById("idMsg");
  const idInput = document.getElementById("idInput").value;
  const idRegExp = /^[a-zA-Z0-9_-]{6,16}$/;

  if (idRegExp.test(idInput)) {
    idMsg.style.display = "none";
  } else {
    idMsg.style.display = "block";
    idMsg.className = "error-msg";
  }
}

// 비밀번호 유효성
function pwMsg() {
  const pwMsg = document.getElementById("pwMsg");
  const pwInput = document.getElementById("pwInput").value;
  const pwRegExp =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;

  if (pwRegExp.test(pwInput)) {
    pwMsg.style.display = "none";
  } else {
    pwMsg.style.display = "block";
    pwMsg.className = "error-msg";
  }
}

// 비밀번호 확인
function pwConfirmMsg() {
  const pw = document.getElementById("pwInput").value;
  const pwConfirm = document.getElementById("inputPwConfirm").value;
  const pwConfirmMsg = document.getElementById("pwConfirmMsg");

  if (pw == pwConfirm) {
    pwConfirmMsg.style.display = "none";
  } else {
    pwConfirmMsg.style.display = "block";
    pwConfirmMsg.className = "error-msg";
  }
}

//이름 유효성
function nameMsg() {
  const nameInput = document.getElementById("nameInput").value;
  const nameMsg = document.getElementById("nameMsg");
  const nameRegExp = /^[가-힣]{2,}$/;

  if (nameRegExp.test(nameInput)) {
    nameMsg.style.display = "none";
  } else {
    nameMsg.style.display = "block";
    nameMsg.className = "error-msg";
  }
}

//성별 유효성
function genderMsg() {
  const gender = document.querySelector('input[name="성별"]:checked');
  const genderMsg = document.getElementById("genderMsg");

  if (gender) {
    genderMsg.style.display = "none";
  } else {
    genderMsg.style.display = "block";
    genderMsg.className = "error-msg";
  }
}

// 회원가입 버튼
function signUp() {}
