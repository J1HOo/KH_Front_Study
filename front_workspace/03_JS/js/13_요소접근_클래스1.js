// 클래스 접근 테스트
function clsTest() {
  const divs = document.getElementsByClassName("cls");
  alert(divs); // 유사배열 ( = HTML Collection = HTML 묶음들 )

  //1. divs = cls 중에서 0번째로 작성된 div 요소 배경색 변경
  divs[0].style.backgroundColor = "yellowgreen";
  divs[1].style.backgroundColor = "yellow";
  divs[2].style.backgroundColor = "lightblue";

  // divs.length = 3;
  // for 문에 변수명.length를 사용할 때는 <= 가 아닌 <
  // index는 무조건 0부터 시작하기 때문에 let i = 0을 주는 것
  for (let ary = 0; ary <= divs.length; ary++) {
    divs[ary].innerText = `${ary} 번째 div 입니다.`;

    /*
              NodeList = 유사배열 = 배열과 비슷하지만 배열은 아님
              배열처럼 index, length는 가지고 있으나 배열 전용 기능(메서드)를 제공하지 않음
    
              index = [] : 0번째부터 length-1 번째까지 번호가 자동할당 되는 것
    
              length =[] : 안에 값이 얼마나 들어있는지 1부터 개수를 세는 것
              */
  }
}

function clsSpn() {
  const spns = document.getElementsByClassName("spn");

  spns[0].style.backgroundColor = "red";
  spns[1].style.backgroundColor = "orange";
  spns[2].style.backgroundColor = "yellow";
  spns[3].style.backgroundColor = "green";
  spns[4].style.backgroundColor = "blue";

  for (let ary = 0; ary < spns.length; ary++) {
    spns[ary].innerText = `${ary} 번째 스판 입니다.`;
  }
}
