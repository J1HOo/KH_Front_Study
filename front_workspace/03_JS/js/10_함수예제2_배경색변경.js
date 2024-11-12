function 색상변경(change) {
  const body = document.getElementById("body");

  switch (change) {
    case "lightblue":
      body.style.backgroundColor = "lightblue";
      break;

    case "lightcoral":
      body.style.backgroundColor = "lightcoral";
      break;

    case "lightyellow":
      body.style.backgroundColor = "lightyellow";
      break;

    case "lightgreen":
      body.style.backgroundColor = "lightgreen";
      break;

    case "lightgrey":
      body.style.backgroundColor = "lightgrey";
      break;

    default:
      break;
  }
}
