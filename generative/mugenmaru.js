/***********************************
*無限に丸が出現
************************************/
//最初に一回だけ実行
function setup(){
  createCanvas(600,425)
  background(255)
  noStroke()
}
//1フレーム(1/60秒)ごとに実行
function draw(){
  fill(random(255),random(255),random(255),70)
  ellipse(random(width),random(height),random(100))
}