
function setup(){
  let canvas = createCanvas(1000, 700);
  canvas.parent('canvas');
}

function draw(){
   background("#f4f0e6");
  //background(0);
  UI();
}

var mx=200;
function UI(){
   fill(255);
if(mouseY<640&&mouseY>580){
    mx=mouseX;
    fill(200);
}
   strokeWeight(0.6);
   line(200,610,800,610);
   if(mx<200){
     mx=200;
   }else if(mx>800){
     mx=800;
   }
   ellipse(mx,610,20,20);
   fill("#f4f0e6");
   push();
   translate(width/2, height/2+80);
   rect(-400,0,400,25);
   rotate(map(mx,200,800,-PI,0));
   rect(0,0,400,25);
   rotate(PI);
   if(mx>220){
    strokeWeight(2);
   line(-150,0,-160,20);
   line(-150,0,-140,20);
   }
   rotate(-PI);
   rotate(-map(mx,200,800,-PI,0));
   noFill();
   strokeWeight(2);
   arc(0,0,300,300,PI,map(mx,199,801,PI+PI/1800,PI*2));
   fill(0);
   strokeWeight(1);
   textSize(25);
   text(Math.floor(map(mx,200,800,0,180))+"°",-18,80);
   pop();
}