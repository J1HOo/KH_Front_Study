function selectSeason() {
  let choice;
  const result = document.getElementById("result");
  const body = document.getElementById("body");

  while (choice !== null) {
    choice = prompt("1월 ~ 12월 계절을 선택해주세요.");

    switch (choice) {
      case "1":
      case "2":
      case "12":
        result.innerText = "겨울을 선택하셨습니다.";
        body.style.backgroundColor = "lightblue";
        return;

      case "3":
      case "4":
      case "5":
        result.innerText = "봄을 선택하셨습니다.";
        body.style.backgroundColor = "lightpink";
        return;

      case "6":
      case "7":
      case "8":
        result.innerText = "여름을 선택하셨습니다.";
        body.style.backgroundColor = "lightyellow";
        return;

      case "9":
      case "10":
      case "11":
        result.innerText = "가을을 선택하셨습니다.";
        body.style.backgroundColor = "sandybrown";
        return;

      case "종료":
        result.innerText = "종료 되었습니다.";
        body.style.backgroundColor = "white";
        return;

      default:
        result.innerText = "잘못된 선택입니다.";
        body.style.backgroundColor = "white";
        return;
    }
  }
}
