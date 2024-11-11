function selectMenu() {
  let choice;
  const result = document.getElementById("result");

  while (choice !== null) {
    choice = prompt("메뉴 번호를 입력해주세요. \n1, 2, 3, 종료만 입력 가능");

    switch (choice) {
      case "1":
      case "아메리카노": //input은 기본적으로 숫자가 아닌 글자로 입력 받기 때문에 텍스트 형식으로 인식되도록 해줘야함
        result.innerText = "아메리카노를 선택하셨습니다.";
        break;

      case "2":
      case "카페라떼":
        result.innerText = "카페라떼를 선택하셨습니다.";
        break;

      case "3":
      case "프라푸치노":
        result.innerText = "프라푸치노를 선택하셨습니다.";
        break;

      case "종료":
        result.innerText = "주문을 종료합니다.";
        return;

      default:
        result.innerText = "잘못된 입력입니다. 다시 선택해주세요.";
        break;
    }
  }
}
