function checkScore() {
  const score = document.getElementById("score").value;
  const scoreMsg = document.getElementById("scoreMsg");

  if (score >= 60) {
    scoreMsg.innerText = "합격 입니다.";
    scoreMsg.className = "success";
  } else {
    scoreMsg.innerText = "불합격 입니다.";
    scoreMsg.className = "fail";
  }
}
