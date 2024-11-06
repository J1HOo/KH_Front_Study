//바뀌는 값을 저장하는 경우 const(상수)가 아닌 let 사용
let count = 0; // 현재 값(result1)의 변화를 담는 그릇 (증가 or 감소)

function minus() {
  // input에 입력한 값 = value에 담김 "저장"의 개념이 아니라 잠시 담기는 것 (휘발성 데이터)
  const result = document.getElementById("result1");
  //number 인지 string 인지에 따라 값을 감싸주는 것이 좋다
  const input = Number(document.getElementById("input1").value);

  count -= input; //count에 input의 value값을 버튼을 누를 때 마다 마이너스해서 저장
  result.innerText = count; //count에 임시 저장된 현재 값을 result로 넘겨줌
}

function plus() {
  const result = document.getElementById("result1");
  const input = Number(document.getElementById("input1").value);

  count += input; //count에 input의 value값을 버튼을 누를 때 마다 플러스해서 저장
  result.innerText = count; //count에 임시 저장된 현재 값을 result로 넘겨줌
}

function mul() {
  const result = document.getElementById("result1");
  const input = Number(document.getElementById("input1").value);

  count *= input; //count에 input의 value값을 버튼을 누를 때 마다 곱해서 저장
  result.innerText = count; //count에 임시 저장된 현재 값을 result로 넘겨줌
}
