let totalPrice = 0;

function 선택(param) {
  const price = document.getElementById("price");
  let coffeePrice = 0;

  switch (param) {
    case "1":
      coffeePrice = 3000;
      break;

    case "2":
      coffeePrice = 5500;
      break;

    case "3":
      coffeePrice = 8000;
      break;
  }
  price.innerText = "총 금액 : ₩" + (totalPrice += coffeePrice);
}
