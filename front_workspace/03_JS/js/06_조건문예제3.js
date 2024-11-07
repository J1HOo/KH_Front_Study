// 어린이 청소년 성인 판별
function checkAge() {
  const age = document.getElementById("inputAge").value;

  if (0 <= age && age <= 13) {
    alert("어린이 입니다.");
  } else if (age >= 19 && age <= 120) {
    alert("성인 입니다.");
  } else if (age >= 14 && age <= 18) {
    alert("청소년 입니다.");
  } else {
    alert("잘못 입력 했습니다.");
  }
}
