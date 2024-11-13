function bdBtn() {
  /*
  자바 스크립트 입장에선
  getElementByTagName
  get : 가져오다
  Element : 원하는 태그이름을

  코드상 body태그가 하나만 존재해도 가져오는 순간 배열 형식이 되며 index 값을 줘야함
  */
  const bd = document.getElementsByTagName("body")[0];

  bd.style.backgroundColor = "lightblue";

  // body와 같은 태그는 TagName을 사용하지 않고 태그명으로 변경 가능
  document.body.style.backgroundColor = "orange";
  //CSS 제일 최근 작성된 코드로 덮어씌어짐
}
