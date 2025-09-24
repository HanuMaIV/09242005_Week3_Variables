//Global Variables
  let posX, posY, r, g, b, a, thickness;

function setup() {
  // Create a canvas that fills the entire screen
  frameRate(30);
  createCanvas(windowWidth, windowHeight);
  background('black');

  // Setup first circle to be drawn in center
  posX = width/2;
  posY = height/2;

}

// Function for drawing circles with aleatoric parameters 
function createAnimatedCircle() {

    let d = random(5,150);
    let r = random(0,255);
    let g = random(0,255);
    let b = random(0,255);
    let a = random(20,50);
    let thickness = random(1,10);
    stroke(r,g,b,a);
    strokeWeight(thickness);
    fill(r,g,b,a);
    circle(posX, posY, d);

    // conditional statement to keep the circle within confines of the screen
    if (posX < 0) {

      posX += 100;
      
    } else if (posY < 0) {

      posY += 100;

    } else if (posX > windowWidth) {

      posX -= 100;
      
    } else if (posY > windowHeight) {

      posY -= 100;

    } else {

      posX += random(-100,100);
      posY += random(-100,100);

    }
  }

function draw() {

  // clear canvas after 1 minute
  if (frameCount % 1800 == 0) background('black');

  createAnimatedCircle();
  
}