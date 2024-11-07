function checkGrade() {
  const inputScore = document.getElementById("inputScore").value;
  const gradeMsg = document.getElementById("gradeMsg");
  // input이 아닌 p, span, h1 같은 태그들은 value 값이 없음

  gradeMsg.innerText = "등급 :";
  if (inputScore >= 90) {
    gradeMsg.innerText += "A"; //등급 :  이라는 글자에 A를 붙이겠다.
    gradeMsg.className = "A";
  } else if (inputScore >= 80) {
    gradeMsg.innerText += "B";
    gradeMsg.className = "B";
  } else if (inputScore >= 70) {
    gradeMsg.innerText += "C";
    gradeMsg.className = "C";
  } else if (inputScore >= 60) {
    gradeMsg.innerText += "D";
    gradeMsg.className = "D";
  } else {
    gradeMsg.innerText += "F";
    gradeMsg.className = "F";
  }
}
