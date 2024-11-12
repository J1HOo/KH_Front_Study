function order(menu) {
  const result = document.getElementById("result");

  if (menu == "비빔밥") {
    result.innerText =
      menu + " 주문이 완료되었습니다. 가격은 " + price + " 원 입니다.";
  } else if (menu === "김치찌개") {
    result.innerText =
      menu + " 주문이 완료되었습니다. 가격은 " + price + " 원 입니다.";
  } else if (menu === "된장찌개") {
    result.innerText =
      menu + " 주문이 완료되었습니다. 가격은 " + price + " 원 입니다.";
  } else if (menu === "청국장") {
    result.innerText = " 재료 소진된 메뉴로 주문이 불가능 합니다.";
  }
}

function total(menu) {
  const price = order(menu);

  if (price == "비빔밥") {
    return 8000;
  } else if (price === "김치찌개") {
    return 7000;
  } else if (price === "된장찌개") {
    return 7000;
  } else {
    return 0; //위 if else에서 0이하는 모두 재료 소진된 메뉴로 주문불가처리
  }
}
