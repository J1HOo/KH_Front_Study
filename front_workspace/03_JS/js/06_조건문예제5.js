function checkSeason() {
  const month = document.getElementById("month").value;
  const seasonMsg = document.getElementById("seasonMsg");

  if (month >= 3 && month <= 5) {
    seasonMsg.innerText = "봄입니다.";
    seasonMsg.className = "spring";
  } else if (month >= 6 && month <= 8) {
    seasonMsg.innerText = "여름입니다.";
    seasonMsg.className = "summer";
  } else if (month >= 9 && month <= 11) {
    seasonMsg.innerText = "가을입니다.";
    seasonMsg.className = "fall";
  } else if (month == 12 || month == 1 || month == 2) {
    seasonMsg.innerText = "겨울입니다.";
    seasonMsg.className = "winter";
  } else {
    seasonMsg.innerText = "1에서 12사이의 숫자를 입력하세요";
    seasonMsg.className = "";
  }

  // if (month == 3 || month == 4 || month == 5) {
  //   seasonMsg.innerText = "봄입니다.";
  //   seasonMsg.className = "spring";
  // } else if (month == 6 || month == 7 || month == 8) {
  //   seasonMsg.innerText = "여름입니다.";
  //   seasonMsg.className = "summer";
  // } else if (month == 9 || month == 10 || month == 11) {
  //   seasonMsg.innerText = "가을입니다.";
  //   seasonMsg.className = "fall";
  // } else if (month == 12 || month == 1 || month == 2) {
  //   seasonMsg.innerText = "겨울입니다.";
  //   seasonMsg.className = "winter";
  // } else {
  //   seasonMsg.innerText = "1에서 12사이의 숫자를 입력하세요";
  //   seasonMsg.className = "";
  // }

  // if (month < 1 || month > 12) {
  //   seasonMsg.innerText = "1에서 12사이의 숫자를 입력하세요";
  //   seasonMsg.className = "";
  // } else if (month == 12 || month == 1 || month == 2) {
  //   seasonMsg.innerText = "겨울입니다.";
  //   seasonMsg.className = "winter";
  // } else if (month >= 9) {
  //   seasonMsg.innerText = "가을입니다.";
  //   seasonMsg.className = "fall";
  // } else if (month >= 6) {
  //   seasonMsg.innerText = "여름입니다.";
  //   seasonMsg.className = "summer";
  // } else if (month >= 3) {
  //   seasonMsg.innerText = "봄입니다.";
  //   seasonMsg.className = "spring";
  // }
}
