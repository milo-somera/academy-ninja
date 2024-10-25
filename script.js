let leftValue = 450;
let topValue = 100;
let direction = "down";
let walkValue = 1;

function update() {
  document.getElementById("character").style.left = leftValue + "px";
  document.getElementById("character").style.top = topValue + "px";
  document.getElementById("character").style.backgroundImage =
    "url('img/" + direction + walkValue + ".png')";
}

document.addEventListener("keydown", function (e) {
  if (walkValue == 1) {
    walkValue = 2;
  } else if (walkValue == 2) {
    walkValue = 1;
  }
  if (e.keyCode == 37 && leftValue > 0) {
    // LEFT
    leftValue = leftValue - 10;
    direction = "left";
  } else if (e.keyCode == 39 && leftValue < 500) {
    // RIGHT
    leftValue = leftValue + 10;
    direction = "right";
  } else if (e.keyCode == 40 && topValue < 500) {
    // DOWN
    topValue = topValue + 10;
    direction = "down";
  } else if (e.keyCode == 38 && topValue > 0) {
    // TOP
    topValue = topValue - 10;
    direction = "top";
  }
  update();
});
