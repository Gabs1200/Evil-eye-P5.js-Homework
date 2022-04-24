function setup() {
  createCanvas(400, 400);

}
function draw() {
  
  //BORDER
  strokeWeight(4);
  stroke(51)
  fill(color(0, 0, 255));
  ellipse(200,200,390,390);
  
  //SCLERA
  stroke(0,0,0)
  fill(255,255,255);
  ellipse(200,200,280,280);
  
  //IRIS
  stroke(0,0,0)
  fill(0,255,255);
  ellipse(200,200,210,210);
  
  //PUPIL
  fill(9);
  ellipse(200,200,100,100);
  
}