// TODO: add more properties using objects
// TODO: create/draw using functions

let NUM_OBJS = 100;
let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  
  for (let i = 0; i < NUM_OBJS; i++) {
   let aCircle = {
    x: random(width),
    y: random(height),
    d: random(50,100),
    a:0,
    da: random(1,10),
    dx: random(-5,5),  
    dy: random(-5,5)           //how much to change alpha per frame
   };

    circles.push(aCircle);
  }
  print(circles);
}

function draw() {
  background(220, 20, 220);  

  for(let idx = 0; idx < circles.length; idx++) {
    let mCircles = circles[idx];
    fill(255, mCircles.a);
    ellipse(mCircles.x, mCircles.y, mCircles.d);
    mCircles.a = (mCircles.a + mCircles.da)%255;
    mCircles.x = mCircles.x+mCircles.dx
    mCircles.y = mCircles.y+mCircles.dy

    if(mCircles.x < 0 || mCircles.x > width){

      mCircles.x = random(width);
    }

    if(mCircles.y <0 || mCircles.y > height){

      mCircles.y = random(height);
    }
  }
}
