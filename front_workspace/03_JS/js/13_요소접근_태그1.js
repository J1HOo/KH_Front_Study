function tagNameTest() {
  const tagList = document.getElementsByTagName("li");
  //  ul 태그 안에 작성된 li 요소들을 모두 가져오기

  // text 관련 태그안에 작성된 요소값들은 모두 기본적으로 "" 를 포함하고 있음
  tagList[0].style.backgroundColor = tagList[0].innerText;
  tagList[1].style.backgroundColor = tagList[1].innerText;
  tagList[2].style.backgroundColor = tagList[2].innerText;
  tagList[3].style.backgroundColor = tagList[3].innerText;
  tagList[4].style.backgroundColor = tagList[4].innerText;
  // li태그는 3개인데 tagList[4]을 만들어줌으로써 에러를 발생시킴
  // 이로써 하위 코드들은 모두 작동 하지 않는다.

  // body와 같은 기본 태그들은 따로 id, class를 작성 하지 않아도 접근 가능
  document.body.style.backgroundColor = "lightblue";
}
