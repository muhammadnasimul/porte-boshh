let i = 0;
let j = 0;

function changeBackground() {
  const backgroundColor = ["black", "white"];
  const textColor = ["white", "black"];
  document.body.style.backgroundColor = backgroundColor[i];
  document.getElementById("main-text").style.color = textColor[j];
  i = (i + 1) % backgroundColor.length;
  j = (j + 1) % textColor.length;
}
setInterval(changeBackground, 500);
