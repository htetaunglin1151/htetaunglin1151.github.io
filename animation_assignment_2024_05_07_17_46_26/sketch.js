/*
  Interactive Design
  by htet aung lin
  3/16/2024
  
  "Stone asteroid belt Meteor or flying space rock" image by upklayk
  https://www.freepik.com/free-vector/stone-asteroid-belt-meteor-flying-space-rock_28313489.htm#fromView=search&page=1&position=6&uuid=033d5a38-3257-4bf7-8ca9-d7411a423934
  
  "Colorful spaceship collection with flat design" image by Freepik
  https://www.freepik.com/free-vector/colorful-spaceship-collection-with-flat-design_2956789.htm
  
  "Low angle shot of the mesmerizing starry sky" image by wirestock
  https://www.freepik.com/free-photo/low-angle-shot-mesmerizing-starry-sky_12448591.htm
*/
var bg;
var A1;
var A2;
var SC;
var x = 100;
var y = 200;
var sx = 10;
var sy = 10;
var k = 100;
var r = 0;

function preload() {
  bg = loadImage("SPACE.jpg");
  A1 = loadImage("A1.png");
  SC = loadImage("Spacecraft.png");
  A2 = loadImage("A2.png");
}
function setup() {
  createCanvas(600, 400);
  noStroke();
}

function mousePressed() {
  save("htet_AnimationDesign.jpg");
}

function draw() {
  background(220);
  //SPACE background
  image(bg, 0, 0, 600, 400);

  //Spacecraft
  image(SC, mouseX - 20, mouseY - 60, 50, 50);

  //asteroid
  push();
  image(A1, x, y, 110, k);
  x = x + sx;
  y = y + sy;

  if (x + k > width || x < 0) {
    sx = -sx;
  }

  if (y + k > height || y < 0) {
    sy = -sy;
  }
  pop();

  //asteroid 2
  push();
  translate(100, 200);
  rotate(r);
  r += PI * 0.01;
  var s = map(mouseY, 0, height, 0, 5, true);
  scale(s);
  image(A2, 20, 0, 50, 50);
  pop();

  //asteroid 3
  push();
  translate(500, 100);
  rotate(r);
  image(A2, -20, -20, 100, 100);
  pop();

  //asteroid 4
  translate(500, 200);
  image(A2, 0, 0, 200, 200);
}
