function preload() {
  img = loadImage("image/closetpng.png");
}

function setup() {
  createCanvas(877, 620);
  noStroke();

  textFont('Courier New');
  textStyle(BOLD);
  textSize(16);
}

let t = 0;
let t2 = 0;
let t3 = 0;
let t4 = 0;

function draw() {
  background(220);
  image(img, 0, 0, 877, 620);

 
  

  fill(0, t);
  textAlign(LEFT);
  text("The shorts are a little too short, don't you think?", 50, 200);

  if (mouseX < 310 && mouseX > 180 && mouseY < 320 && mouseY > 120) {
    t = 255;
  } else {
    t = 0;
  }
//first line end
  fill(0, t2);
  text("This one seems perfect.", 280, 200);

  if (mouseX < 460 && mouseX > 330 && mouseY < 320 && mouseY > 120) {
    t2 = 255;
  } else {
    t2 = 0;
  }
//secondline end
fill(0, t3);
text("I don't think this is a good choice,", 320, 200);
text("a bit tight fitting.", 390, 220);
if (mouseX < 540 && mouseX > 470 && mouseY < 320 && mouseY > 120) {
  t3 = 255;
} else {
  t3 = 0;
}
//third line end
fill(0, t4);
text("My stomach doesn't look good enough for", 430, 200);
text("this today, maybe tomorrow.", 470, 220);
if (mouseX < 660 && mouseX > 580 && mouseY < 320 && mouseY > 120) {
  t4 = 255;
} else {
  t4 = 0;
}
}

