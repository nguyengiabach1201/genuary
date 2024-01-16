var t;
let width = window.innerWidth, height = window.innerHeight;

var positions = [];

function setup() {
  createCanvas(width, height);
  stroke(0, 18);
  noFill();
  t = 0;
}

function draw() {
  background(255);

  var x1 = width * noise(t + 15 + 10);
  var x2 = width * noise(t + 25 + 10);
  var x3 = width * noise(t + 35 + 10);
  var x4 = width * noise(t + 45 + 10);
  var y1 = height * noise(t + 55 + 10);
  var y2 = height * noise(t + 65 + 10);
  var y3 = height * noise(t + 75 + 10);
  var y4 = height * noise(t + 85 + 10);

  pos = new Object();
  pos.x1 = x1;
  pos.x2 = x2;
  pos.x3 = x3;
  pos.x4 = x4;
  pos.y1 = y1;
  pos.y2 = y2;
  pos.y3 = y3;
  pos.y4 = y4;

  positions.push(pos);

  if (positions.length > 250) {
    positions.shift();
  }

  for (let i = 0; i < positions.length; i++) {
    bezier(positions[i].x1, positions[i].y1, positions[i].x2, positions[i].y2, positions[i].x3, positions[i].y3, positions[i].x4, positions[i].y4);
  }
  // bezier(x1, y1, x2, y2, x3, y3, x4, y4);

  t += 0.005;

  // clear the background every 500 frames using mod (%) operator
  // if (frameCount % 1000 == 0) {
  //   background(255);
  // }
}