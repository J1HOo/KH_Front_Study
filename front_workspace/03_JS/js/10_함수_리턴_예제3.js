function order(menu) {
  const result = document.getElementById("result");
  // 메뉴에 따른 가격을 가져오기
  const price = total(menu);

  if (menu === "청국장") {
    result.innerText = "재료 소진된 메뉴로 주문이 불가능합니다.";
  } else if (price > 0) {
    result.innerText =
      menu + " 주문이 완료되었습니다. 가격은 " + price + "원 입니다.";
  } else {
    result.innerText = "유효하지 않은 메뉴입니다.";
  }
}

function total(menu) {
  if (menu == "비빔밥") {
    return 8000;
  } else if (menu === "김치찌개") {
    return 7000;
  } else if (menu === "된장찌개") {
    return 7000;
  } else {
    return 0; //위 if else에서 0이하는 모두 재료 소진된 메뉴로 주문불가처리
  }
}
