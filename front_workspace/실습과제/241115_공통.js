function checkPolicy(event) {
  if (event) event.preventDefault();
  const policy1Checked = document.getElementById("policy1").checked;
  const policy2Checked = document.getElementById("policy2").checked;
  const policy3Checked = document.getElementById("policy3").checked;

  if (!policy1Checked || !policy2Checked || !policy3Checked) {
    alert("모든 필수 약관에 동의해야합니다.");
  } else {
    window.location.href = "241115_회원가입.html";
  }
}

function signUp(event) {
  if (event) event.preventDefault();

  const idInput = document.getElementById("idInput").value;
  const pwInput = document.getElementById("pwInput").value;
  const emailInput = document.getElementById("emailInput").value;

  const idPattern = /^[a-zA-Z0-9]{5,12}$/;
  const pwPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!idPattern.test(idInput)) {
    alert("아이디는 5-12자의 영문자 및 숫자여야 합니다.");
    return false;
  }
  if (!pwPattern.test(pwInput)) {
    alert("비밀번호는 8-15자의 영문자, 숫자가 포함 되어야 합니다.");
    return false;
  }
  if (!emailPattern.test(emailInput)) {
    alert("이메일 형식이 올바르지 않습니다.");
    return false;
  }
  alert("회원가입이 완료되었습니다!");
  window.location.href = "241115_메인.html";
}
