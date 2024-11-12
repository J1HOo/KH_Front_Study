function 빵구매(params1) {
  const price = 빵구매(params1);
  const result = document.getElementById("result");

  if (params1 > 0) {
    result.innerText = params1 + " 구매 완료되었습니다.";
  } else if (price > 0) {
    result.innerText =
      params1 + " 구매 완료되었습니다." + " 가격은" + price + " 원 입니다.";
  } else {
    result.innerText = "아직 판매 예정 입니다.";
  }
}

function 빵가격(params2) {
  if (params2 === "크루아상") {
    return 3000;
  } else if (params2 === "식빵") {
    return 2000;
  } else if (params2 === "베이글") {
    return 2500;
  } else {
    return 0;
  }
}
