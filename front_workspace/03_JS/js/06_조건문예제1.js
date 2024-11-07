function checkAge() {
  const age = document.getElementById("age").value;
  const msg = document.getElementById("ageMsg");

  if (age >= 18) {
    msg.innerText = "관람가능합니다!";
    msg.style.color = "green";
    // 변수명.style.속성 : 2순위 스타일로 긴급한 상황이 아니면 사용 자제
    msg.className = "success";
    // 변수명.className : css스타일 태그 안에 작성된 css 클래스 속성명 불러오기 실행, 4순위
  } else {
    msg.innerText = "18세 이상만 관람 가능합니다!";
    msg.style.color = "red";
    msg.className = "fail";
  }
}
