function component() {
  var element = document.createElement("div");
  var btn = document.createElement("button");

  element.innerHTML = "Hello, webpack";

  btn.innerHTML = "点击这里，然后查看 console！";
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

function printMe() {
  console.log(this)
}

document.body.appendChild(component());
