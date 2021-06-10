var dog ,happydog, foodS,foodStock
var database,stock

function preload()
{
	dogImg =loadImage("images/dogImg.png")
  happydogImg=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500,500);

  database=firebase.database()

  dog=createSprite(410,500,20,20)
  dog.addImage=loadImage("images/dogImg.png")

  foodStock=database.ref('Food')
  foodStock.on("value", readStock )
  
}


function draw() {  
  background(46,139,87)
 
if(keyDown(UP_ARROW)){
    readStock(foodS)
    dog.addImage("images/dogImg1.png")
}

  drawSprites();
 textSize(20)
 text("press UP_ARROW key to feed the dog")

}

function readStock(x){
  if(x<=0){
x=0
  }
else{
  x=x-1
}
 database.ref('/').update({
   Food:x
 })
}
