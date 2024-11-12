//점심 메뉴 뽑기 기능
function selectMenu() {
  //결과 출력 span
  const menuResult = document.getElementById("menuResult");
  const menu = [
    "돈까스",
    "깐풍기",
    "햄버거",
    "멸치국수",
    "마파두부",
    "샌드위치",
    "볶음밥",
    "순대국밥",
  ];
  /*
    랜덤으로 점심메뉴를 뽑기 위해서 메뉴들 배열 index 범위 내에서 랜덤의 수를 생성
    난수 : 정의된 범위 내에서 무작위로 추출된 값

    Math.floor : 주어진 숫자의 소수점을 내림해서 가장 가까운 정수를 반환하는 함수
                  ex) Math.floor(3.7) -> 3반환
                  올림 Math.ceil() -> 소수점 위로 올림해서 가장 가까운 정수를 반환
                  반올림 Math.round() -> 소수점 첫째 자리에서 가장 가까운 정수를 반올림해서 반환

    Math.random() : 0이상 1미만의 랜덤한 소수(실수) 반환 ex) 0.0000001 ~ 0.99999999

    menu.length : menu의 개수를 숫자로 치환 menu가 5개면 5
    */
  const random = Math.floor(Math.random() * menu.length);
  //                          랜덤한 실수 곱하기  메뉴 개수
  menuResult.innerText = menu[random];
  //                    메뉴들 중[랜덤한 index 숫자]
}
