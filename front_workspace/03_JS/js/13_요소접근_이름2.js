function checkHobby() {
  const hobbyList = document.getElementsByName("hobby");
  let str = ""; //체크된 값 누적
  let count = 0; //체크된 수 카운트
  // for 문을 이용해서 체크 여부 검사하고 체크된 경우
  // 누적된 체크값 확인 및 카운트 증가
  for (let i = 0; i < hobbyList.length; i++) {
    //만약에 체크된 값이 존재한다면
    if (hobbyList[i].checked) {
      str += hobbyList[i].value + " ";
      count++;
    }
  }
  //만약에 선택된 취미가 없다면 선택한 취미가 없습니다.
  const result = document.getElementById("result");
  if (count > 0) {
    result.innerHTML = `${str}<br>선택된 취미 개수 : ${count}`;
  } else {
    // 1보다 아래 0 -1 -2 ....
    result.innerHTML = `선택한 취미가 없습니다.`;
  }
  // 삼항 연산자로 표현
  /*
            const inText =
            count > 0
                ? (result.innerHTML = `${str}<br>선택된 취미 개수 : ${count}`)
                : (result.innerHTML = `선택한 취미가 없습니다.`);
            }
        */
}
