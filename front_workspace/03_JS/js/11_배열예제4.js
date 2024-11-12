function pickFruit() {
  const result = document.getElementById("result");
  fruit = [
    "사과",
    "오렌지",
    "바나나",
    "체리",
    "망고",
    "포도",
    "블루베리",
    "복숭아",
  ];
  const randomFruit = Math.floor(Math.random() * fruit.length);

  console.log(fruit.length);
  console.log(fruit[5]);
  result.innerText = fruit[randomFruit];
}
