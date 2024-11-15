/*
        <button onclick="제출(event)">등록하기</button>
        event = 사용자가 버튼이라는 행동을 감지했을 때 작동하는 설정
         제출(매개변수) 매개변수에 어떤 동작이 들어왔는지 담는 변수명이기 때문에
         굳이 위에있는 이름과 맞춰서 작성할 의무 x
         function 제출(event) {
            js 기능 설정
        }
        */
function 제출(e) {
  e.preventDefault(); // button 태그 안에 기본으로 작성된 제출 기능 동작 정지
  const name = document.getElementById("id-name").value;
  const age = document.getElementById("id-age").value;
  const email = document.getElementById("id-email").value;
  //정규식 패턴 설정
  const nameRegExp = /^[가-힇a-zA-Z]{2,32}$/;
  const ageRegExp = /^\d{1,3}$/;
  const emailRegExp = /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  //유효성 검사
  // 이름이 부합하지 않을 때만 if를 사용하고 싶음
  //1.이름
  if (!nameRegExp.test(name)) {
    alert("이름이 정규식에 부합하지 않습니다.");
    return false; // 회원가입에 부합하지 않은 조건을 만날 때
    //돌려보내기
  }
  //2.나이
  if (!ageRegExp.test(age)) {
    alert("나이가 정규식에 부합하지 않습니다.");
    return false; // 회원가입에 부합하지 않은 조건을 만날 때
    //돌려보내기
  } else {
    if (age >= 106) {
      alert("존재할 수 없는 나이입니다.");
      return false;
    }
  }
  //3.이메일
  if (!emailRegExp.test(email)) {
    alert("이메일이 정규식에 부합하지 않습니다.");
    return false; // 회원가입에 부합하지 않은 조건을 만날 때
    //돌려보내기
  }
  alert("회원가입이 완료되었습니다.");
}

const btn = document.getElementById("btn");
const inputTest = document.getElementById("inputTest");
btn.addEventListener("click", () => {
  const vle = inputTest.value;
  //값이 있으면 true 값이 없으면 false
  // 만약에 입력한 값이 없을 때만 alert창을 표기하길 원한다면
  /*
  vle 값이 들어있을때 = true 왼쪽에 !를붙여줌으로써 false일 때 true 변경 가능
  if (!vle) {
    alert("입력란에 값을 입력해주세요.");
  }
  
  */
  if (vle) {
    alert("입력한 값이 있습니다.");
  } else {
    alert("입력란에 값을 입력해주세요.");
  }
});
/*
아래 모두 익명함수로 버튼을 클릭시 실행할 기능 작성
1. function 기능명 생략 (매개변수들어갈자리설정) {실행 문장들 작성}
btn.addEventListener("click",  function ()    {})
2. 기능자체표현을 생략 (매개변수들어갈자리설정) => {실행 문장들 작성}
2번을 가장 많이 사용
btn.addEventListener("click",           () => {})
*/
