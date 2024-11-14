function submitForm() {
  //필수 약관 동의 확인

  const serviceChecked = document.getElementById("service");
  const privacyChecked = document.getElementById("privacy");

  if (!serviceChecked || !privacyChecked) {
    alert("모든 필수 약관에 동의해주세요.");
  }

  const hchecked = document.querySelectorAll(".hobby");
  const hobbies = [];

  for (let i = 0; i < hchecked.length; i++) {
    hobbies;
  }
}
