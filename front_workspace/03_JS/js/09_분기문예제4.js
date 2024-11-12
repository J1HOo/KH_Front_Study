let totalPrice = 0;

function 선택(param) {
  const price = document.getElementById("price");
  let fruitPrice = 0;

  switch (param) {
    case "apple":
      fruitPrice = 2000;
      break;

    case "grape":
      fruitPrice = 5000;
      break;

    case "kiwi":
      fruitPrice = 3000;
      break;
    //버튼으로 클릭할 경우 잘못된 값이 작성될 방법이 없기 때문에 default를 작성하지 않아도 된다.
  }
}
