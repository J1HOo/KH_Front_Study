//버튿 클릭 시 body 태그 내의 글자색과 배경색 변경하기

/*
  CSS에서는 자바스크립트 기능을 작성할 수 없지만
  자바스크립트에선 CSS 기능을 작성할 수 있음 (권장X)
*/

const 바디 = document.getElementById("cssStyle");

function lightmode() {
  바디.style.color = "black"; //글자색 검은색 변경
  바디.style.backgroundColor = "white"; //배경색 흰색 변경
}

function darkmode() {
  바디.style.color = "white"; //글자색 흰색 변경
  바디.style.backgroundColor = "black"; //배경색 검은색 변경
}
