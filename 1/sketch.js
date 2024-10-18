// TODO: add more properties using objects

let aCircle= {};

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  aCircle = {
    x: width/2,
    y: height/2,
    d: 60,
    a:255
  };

  // ypos = -50;
  
}

function draw() {
  background(220, 20, 220);
  fill(255, aCircle.a)
  ellipse(aCircle.x, aCircle.y, aCircle.d);

  aCircle.a = (aCircle.a + 4) % 255;

  // ypos += 10;

  // if (ypos > height) {
  //   ypos = -50;
  // }
}
