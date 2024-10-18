// TODO: add more circles using lists

// let ypos0;
// let ypos1;
// let ypos2;

let numCircles;
let xpos = []
let ypos = [];



function setup() {
  createCanvas(windowWidth, windowHeight);
  // frameRate(30);
  noStroke();

  numCircles = int(width/100);



  // ypos0 = -50;
  // ypos1 = -50;
  // ypos2 = -50;

  for (let idx = 0; idx < numCircles; idx+=1){
    ypos.push(random(height)) //random(height);
  }


}

function draw() {
  background(220, 20, 220);

  // ellipse(width / 2 - 100, ypos[0], 50);
  // ellipse(width / 2, ypos[1], 50);
  // ellipse(width / 2 + 100, ypos[2], 50);

  // ypos[0] += 8;
  // ypos[1] += 11
  // ypos[2] += 17;

  // if (ypos[0] > height) {
  //   ypos[0] = -50;
  // }

  // if (ypos[1] > height) {
  //   ypos[1] = -50;
  // }

  // if (ypos[2] > height) {
  //   ypos[2] = -50;
  

  for (let idx = 0; idx < ypos.lenghth; idx +=1){
   let xpos = map (idx, 0, ypos.lenghth, 0, width);
   ellipse(xpos+25, ypos[idx],50)
    
    ypos[idx] +=8;
    if (ypos[idx]>height){
      ypos[idx] = random(-60, -30);
    }
  }
}

function mousePressed() {
  ypos.push();

  


}