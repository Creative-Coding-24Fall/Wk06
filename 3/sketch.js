// TODO: visualize data from JSON
let data = [];

function preload(){
  data = loadJSON("wine.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  stroke(220,20,20)

  data = Object.values(data);  //loadJSON auto things in loadjson as objects. this is saying to create a list with the data
  
  print(data[0]);

  for(let idx = 0; idx < data.length; idx++){
    let aWine = data[idx];
    let x = map(idx,0,data.length,0,width);
    let d = map(aWine.price,0,300,0,height);

    
    ellipse(x,height/2,d);
  }
}

function draw() {}
