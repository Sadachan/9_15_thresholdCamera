






/***********************************
*画像二値化
************************************/
let gazo;

function preload(){
  //gazo=loadImage('img/sada.jpg')
  img = loadImage('upload/temp.png');
}
function setup(){
  createCanvas(300,200)
  image(img,0,0)
  //image(gazo,0,0)
  filter(THRESHOLD,0.4)
  // image(gazo,500,0)
  // filter(THRESHOLD,0.5)
  // image(gazo,1000,0)
  // filter(THRESHOLD,0.75)
}

/***********************************
*加工画像ダウンロード
************************************/
// function keyPressed(){
//   if (key == 's'){
//     saveCanvas('p5', 'png');
//     //gd.timestamp()
//   }
// }

/***********************************
*カメラ映像を映す
************************************/
// let capture

// function setup(){
//   createCanvas(640,480)
//   capture=createCapture(VIDEO)
//   capture.hide()
// }
// function draw(){
//   background(220)
//   let img=capture.get()
//   image(img,0,0)
// }



