function check1() {
  let result = 0;

  //      초기식     조건식   증감식
  for (let num1 = 1; num1 <= 10; num1++) {
    result += num1;
    if (num1 == 5) {
      break;
    } // num1이 5가 되면 for문을 탈출 -> 아래로 코드 진행
  }
  alert("총 합은 " + result + " 입니다.");
}

function check2() {
  let result = 0;

  for (let num2 = 1; num2 <= 20; num2++) {
    result += num2;
    if (num2 == 15) {
      break;
    }
  }
  alert("총 합은 " + result + " 입니다.");
}

function check3() {
  for (let num3 = 1; num3 <= 20; num3++) {
    console.log(num3);
    if (num3 % 3 == 0) {
      break;
    }
    console.log("총 합은 " + num3 + " 입니다.");
  }
}
