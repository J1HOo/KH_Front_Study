const result = document.getElementById("result");

// function의 위치나 순서는 코딩을 실행하는데 있어 상관이 없음
// 하지만 변수 선언은 순서에 상관이 있기에 상황 별로 잘 써야한다.
// 각 차의 가격을 확인하고 반환하는 함수
function 차가격(model) {
  // 소나타 아반떼 제네시스 각 가격확인
  if (model === "소나타") {
    // 차 구매 기능에 return을 이용해서 가격 전달을 할 것
    return 1000; // 소나타의 가격
  } else if (model === "아반떼") {
    return 1100;
  } else if (model === "제네시스") {
    return 1200;
  }
}

function 차구매(model) {
  const price = 차가격(model);

  result.innerText =
    model + " 구매가 완료되었습니다. 가격은 " + price + " 입니다.";
}
