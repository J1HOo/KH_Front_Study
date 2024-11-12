function selectFruit() {
  const fruitNumber = document.getElementById("fruitNumber").value;
  const result = document.getElementById("result");
  const fruit = ["사과", "오렌지", "바나나", "체리", "망고"];

  // switch는 기본적으로 모든 값을 문자열로 받는다.
  // 때문에 case 조건을 문자열로 설정 or switch 매개변수를 Number(fruitNumber) 감싸기
  if (1 <= fruitNumber && fruitNumber <= 5) {
    switch (fruitNumber) {
      case "1":
        result.innerText = "선택한 과일 : " + fruit[0];
        break;

      case "2":
        result.innerText = "선택한 과일 : " + fruit[1];
        break;

      case "3":
        result.innerText = "선택한 과일 : " + fruit[2];
        break;

      case "4":
        result.innerText = "선택한 과일 : " + fruit[3];
        break;

      case "5":
        result.innerText = "선택한 과일 : " + fruit[4];
        break;

      default:
        break;
    }
  } else {
    result.innerText = "입력값이 유효 하지 않습니다.";
  }

  // switch (fruitNumber) {
  //   case fruitNumber:
  //     result.innerText = "선택한 과일: " + fruit[fruitNumber - 1];
  //     break;
  // }
}
