var capture;
var emoticons = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(windowHeight*3/2, windowHeight);
  capture.hide();
  for (var i = 0; i < 10; i++) {
    emoticons[i] = new Emoticon(random(width,width+50), random(height), random(20, 80));
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  emoticons.push(new Emoticon(mouseX, mouseY, random(30, 100)));
}

function draw() {
  background(255);
  imageMode(CENTER);
  image(capture, windowWidth/2, windowHeight/2, windowHeight*3/2, windowHeight);
  //filter(THRESHOLD);
  fill(240,190,214,120);
  rect(0,0, width, height);
  for (var i = emoticons.length - 1; i > 0; i--) {
    emoticons[i].display();
    emoticons[i].move();
    if (emoticons[i].isFinished()) {
      emoticons.splice(i, 1);
      emoticons[i] = new Emoticon(width, random(height), random(20,80));
    }
  }
}