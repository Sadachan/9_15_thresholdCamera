/***********************************
*マウスで壁画
************************************/
//最初に一回だけ実行
function setup(){
  createCanvas(640,480)
}
//1フレーム(1/60秒)ごとに実行
function draw(){
  if(mouseIsPressed){
    fill(0)
  }else{
    fill(255)
  }
  ellipse(mouseX,mouseY,80,80)
}