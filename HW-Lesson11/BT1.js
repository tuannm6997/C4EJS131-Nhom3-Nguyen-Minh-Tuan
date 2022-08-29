let bt = document.getElementById("changeColorBt");
let body = document.getElementsByTagName("body")[0];

bt.onclick = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
};