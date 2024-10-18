// TODO: add more circles using lists

let numCircles;
let ypos = [];
let xpos = [];
let diam = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  numCircles = 10;
  //numCircles = int(width/25);

  for (let index = 0; index < numCircles; index += 1) {
    xpos.push(random(width));
    ypos.push(random(height));
    diam.push(random(30,100));
    print(xpos,ypos);

  }
}

function draw() {
  background(220, 20, 220);
  //ellipse(width / 2-100, ypos[0], 50);
  //ellipse(width / 2, ypos[1], 50);
  //ellipse(width / 2 + 100, ypos[2], 50);

  for (let index = 0; index < ypos.length; index += 1) {
    let xpos = map(index, 0, ypos.length-1, 0, width);

    ellipse(xpos + 25, ypos[index], 50);
    ypos[index] += 8;
    if (ypos[index] > height) {
      ypos[index] = random(-60, -30);
    }
  }
}

function mousePressed(){
  ypos.push(random(height));
  xpos.push(random(height));
}

// let numCircles = 10; // Set the number of circles
// let xpos = [];
// let ypos = [];

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   noStroke();

//   for (let idx = 0; idx < numCircles; idx += 1) {
//     ypos.push(random(height));
//     xpos.push(random(width)); // Initial random x positions
//   }
// }

// function draw() {
//   background(220, 20, 220);

//   for (let idx = 0; idx < ypos.length; idx += 1) {
//     let x = xpos[idx];
//     ellipse(x, ypos[idx], 50);

//     ypos[idx] += 8;
//     if (ypos[idx] > height) {
//       ypos[idx] = random(-60, -30);
//     }
//   }
// }

// function mousePressed() {
//   ypos.push(random(-60, -30)); // Add new circle off-screen
//   xpos.push(random(width));    // Random x position for the new circle
// }