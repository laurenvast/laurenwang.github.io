var a = 0, d = 1, isOverC, mx, my;

function setup() {
 const logo = select('#logo'),
 canvasWidth = logo.width,
 canvasHeight = logo.height;

 console.log(logo);
 print(canvasWidth + ', ' + canvasHeight);

 createCanvas(canvasWidth, canvasHeight).parent('logo');
}

function draw() {
  background(255);

  var x = width / 2;
  var y = height / 2;
  var l = (height + width) / 2 / 4;

  var dis = dist(mouseX, mouseY, width/2, height/2);

  if(dis < 40)
    {
      isOverC = true;
    } else {
      isOverC = false;
    }

  //find the distants between mouse and mid-point
  if (isOverC == true){
    mx = (mouseX - width / 2) / 3;
    my = (mouseY - height / 2) / 2;
  } else {
    mx = mouseX/150;
    my = 0;
  }

  var m = Math.sqrt(l * l - l / 2 * l / 2);
  var x1 = x - m;
  var x2 = x - mx - a;
  var x3 = x + m;
  var x4 = x + mx + a;
  var y1 = y - l + my;
  var y2 = y - l / 2;
  var y3 = y - my;
  var y4 = y + l / 2;
  var y5 = y3 + l;
  var y6 = y + my;

  stroke(222, 121, 96);
  strokeWeight(l / 15);

  line(x1, y2, x4, y3);
  line(x4, y3, x4, y5);
  line(x4, y5, x1, y4);
  line(x1, y4, x1, y2);
  line(x1, y2, x2, y1);
  line(x2, y1, x2, y6);
  line(x2, y6, x1, y4);
  line(x3, y2, x2, y1);
  line(x2, y6, x3, y4);
  line(x3, y4, x3, y2);
  line(x4, y5, x3, y4);
  line(x3, y2, x4, y3);

  a += d/5;
  if (a >= width/3) {
      d = -d;
  }
  if (a <=width/-3) {
      d = -d;
  }
}
