function checkGrade() {
  const inputScore = document.getElementById("inputScore").value;
  const gradeMsg = document.getElementById("gradeMsg");

  if (inputScore >= 90) {
    gradeMsg.innerText = "A 등급 입니다.";
    gradeMsg.className = "A";
  } else if (inputScore >= 80) {
    gradeMsg.innerText = "B 등급 입니다.";
    gradeMsg.className = "B";
  } else if (inputScore >= 70) {
    gradeMsg.innerText = "C 등급 입니다.";
    gradeMsg.className = "C";
  } else if (inputScore >= 60) {
    gradeMsg.innerText = "D 등급 입니다.";
    gradeMsg.className = "D";
  } else {
    gradeMsg.innerText = "F 등급 입니다.";
    gradeMsg.className = "F";
  }
}
