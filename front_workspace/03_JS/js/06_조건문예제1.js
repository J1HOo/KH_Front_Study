function checkAge() {
  const age = document.getElementById("age").value;
  const msg = document.getElementById("ageMsg");

  if (age >= 18) {
    msg.innerText = "관람가능합니다!";
    msg.style.color = "green";
    msg.className = "success";
  } else {
    msg.innerText = "18세 이상만 관람 가능합니다!";
    msg.style.color = "red";
    msg.className = "fail";
  }
}
