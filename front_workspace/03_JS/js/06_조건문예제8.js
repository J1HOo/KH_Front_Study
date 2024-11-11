function gender() {
  let gdr = prompt("성별을 입력해주세요.(남성 / 여성만 입력 가능");

  switch (gdr) {
    case "남성":
      alert("남성을 입력했네요!");
      break; // 또는 return  작성 안해주면 부합한 케이스가 작동되면서 아래 케이스까지 모두 작동하게됨

    case "여성":
      alert("여성을 입력했네요!");
      break;

    default:
      alert("올바른 성별을 입력해주세요. 남성 / 여성");
      break;
  }
}

function order() {
  let menu;

  while (menu !== null) {
    //아래 menu는 위 변수 menu에 들어갈 값을 사용한다는 의미
    menu = prompt(
      "메뉴를 선택해주세요. \n 삼겹살, 부대찌개, 김치찌개 \n만 입력 가능 \n 종료 작성시 메뉴 선택이 종료 됩니다."
    );

    switch (menu) {
      case "삼겹살":
        alert("삼겹살을 선택하셨습니다. \n가격은 12,000원 입니다.");
        break; //break문은 바로 위까지만 나가는 제어문 (현재는 switch)

      case "부대찌개":
        alert("부대찌개를 선택하셨습니다. \n가격은 10,000원 입니다.");
        break;

      case "김치찌개":
        alert("김치찌개를 선택하셨습니다. \n가격은 9,000원 입니다.");
        break;

      case "종료":
        alert("주문이 종료되었습니다.");
        return; //감싸져 있는 모든 구문 밖으로 나가는 제어문
      // break : 특정 구문을 반복하고자 할 때 사용
      // return : 모든 반복문을 끝내고자 할 때 사용

      default:
        alert("잘못 입력하셨습니다. \n올바른 메뉴를 선택하세요. \n(예) 삼겹살");
        break;
    }
  }
}
