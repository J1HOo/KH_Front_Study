function checkGrade() {
  const inputScore = document.getElementById("inputScore").value;
  const gradeMsg = document.getElementById("gradeMsg");

  if (inputScore >= 90) {
    gradeMsg.innerText = "A";
  } else if (inputScore >= 80) {
    gradeMsg.innerText = "B";
  } else if (inputScore >= 70) {
    gradeMsg.innerText = "C";
  } else if (inputScore >= 60) {
    gradeMsg.innerText = "C";
  } else {
    gradeMsg.innerText = "F";
  }
}
