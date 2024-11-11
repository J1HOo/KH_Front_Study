function check1() {
  let val; // 변수에 값을 담지 않고 선언만 한 상태 let val; == let val = undefine;

  while (val !== null) {
    // val이 빈 값이 아닐 때

    /*
      동일 비교 연산자
      !== : 값과 자료형이 모두 다른 경우 true
      === : 값과 자료형이 모두 같은 경우 true
    */

    val = prompt("입력 후 확인하기"); //변수에 prompt 값 대입하기
    //확인 --> 디폴트로 버튼에 빈 값이 적용되어 있음, prompt 값 대입, 취소 --> null값이 적용되어 있음

    alert(val + "값을 확인했습니다.");
  }
}

function check2() {
  let age;

  while (age !== null) {
    age = prompt("나이를 입력하세요.");
    if (age >= 18) {
      alert("성인입니다.");
    } else if (13 <= age) {
      alert("청소년 입니다.");
    } else {
      alert("어린이 입니다.");
    }
  }
  alert("나이를 입력해주세요.");
}

function check3() {
  let gender;

  while (gender !== null) {
    gender = prompt("성별을 입력해주세요.");
    if (gender == "남자") {
      alert("남자 입니다.");
    } else if (gender == "여자") {
      alert("여자 입니다.");
    }
  }
  alert("잘못 입력했습니다. 다시 입력해주세요.");
}
