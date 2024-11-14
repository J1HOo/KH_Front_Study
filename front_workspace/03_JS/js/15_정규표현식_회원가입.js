// 아이디 유효성
function idMsg() {
  const idMsg = document.getElementById("idMsg");
  const idInput = document.getElementById("idInput").value;
  const idRegExp = /^[a-zA-Z0-9_-]{6,16}$/;

  if (idRegExp.test(idInput)) {
    idMsg.innerText = "사용할 수 있는 아이디입니다.";
    idMsg.className = "success-msg";
  } else {
    idMsg.className = "error-msg";
    idMsg.innerText =
      "영어 대/소문자, 숫자, 특수문자(-,_)포함 6글자 이상 16글자 이하로 작성";
  }
}

// 비밀번호 유효성
function pwMsg() {
  const pwMsg = document.getElementById("pwMsg");
  const pwInput = document.getElementById("pwInput").value;
  const pwRegExp =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;

  if (pwRegExp.test(pwInput)) {
    pwMsg.innerText = "사용할 수 있는 비밀번호 입니다.";
    pwMsg.className = "success-msg";
  } else {
    pwMsg.innerText =
      "영어 대/소문자, 숫자, 특수문자(!@#$%^&*)포함 8글자 이상 20글자 이하로 작성";
    pwMsg.className = "error-msg";
  }
}

// 비밀번호 확인
function pwConfirmMsg() {
  const pw = document.getElementById("pwInput").value;
  const pwConfirm = document.getElementById("inputPwConfirm").value;
  const pwConfirmMsg = document.getElementById("pwConfirmMsg");

  if (pw == pwConfirm) {
    pwConfirmMsg.innerText = "비밀번호와 일치합니다.";
    pwConfirmMsg.className = "success-msg";
  } else {
    pwConfirmMsg.innerText = "비밀번와 일치하지 않습니다.";
    pwConfirmMsg.className = "error-msg";
  }
}

//이름 유효성
function nameMsg() {
  const nameInput = document.getElementById("nameInput").value;
  const nameMsg = document.getElementById("nameMsg");
  const nameRegExp = /^[가-힣]{2,}$/;

  if (nameRegExp.test(nameInput)) {
    nameMsg.innerText = "올바른 양식입니다.";
    nameMsg.className = "success-msg";
  } else {
    nameMsg.innerText = "올바른 이름을 입력하세요.";
    nameMsg.className = "error-msg";
  }
}

//성별 유효성
function genderMsg() {
  const gender = document.querySelector('input[name="성별"]:checked');
  const genderMsg = document.getElementById("genderMsg");

  if (gender) {
    genderMsg.innerText = "항목을 선택하셨습니다.";
    genderMsg.className = "success-msg";
  } else {
    genderMsg.innerText = "성별을 선택해주세요.";
    genderMsg.className = "error-msg";
  }
}

// 회원가입 버튼
function signUp() {}
