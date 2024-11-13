function checkbox로valueChecked속성확인() {
  //보통 checkbox, radio 등은 두 가지 이상의 input을 작성하고 이를 묶어주는 역할 = name
  //취미 항목을 모두 가져와 확인하기
  const hobbys = document.getElementsByName("취미");
  const result = document.getElementById("result");

  // alert(hobbys); // hobbys만 작성 -> object NodeList
  // alert(hobbys[0]); // hobbys[0] 작성 -> object HTMLInputElement
  // alert(hobbys[0].value); // hobbys[0].value 작성 -> 0번째 결과 값 : 게임

  // 모든 취미를 확인
  for (let ary = 0; ary < hobbys.length; ary++) {
    console.log(hobbys[ary].value);
  }

  //선택한 취미 확인하기
  // input요소.checked -> 요소가 체크되어 있으면 true, 아니면 false
  console.log(hobbys[0].checked);
  console.log(hobbys[1].checked);
}

function nameBtn() {
  const hobbyList = document.getElementsByName("취미");
  const result = document.getElementById("result");

  let str = ""; //체크된 값 누적
  let count = 0; //체크된 수 총 계산 카운트

  for (let i = 0; i < hobbyList.length; i++) {
    if (hobbyList[i].checked) {
      // for문으로 i를 순회 할 때 i값이 true인 경우만 count

      str += hobbyList[i].value; // 글자 이어 붙이기
      count++; // true 일 때 숫자가 더해짐
    }
    // result 요소에 내용으로 결과 출력
    //innerText : 태그나 html에서 작성하는 코딩이 작동 X
    // innerHTML : 태그 및 html에서 작성하는 코딩이 작동
    result.innerText = `선텍된 취미 개수 : ${count}`;
    result.innerHTML = `선텍된 취미: ${str}`;
  }
}
