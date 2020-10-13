var Dog, DogHappy;
var database;
var foodS, foodStock;

function preload()
{
  //load images here
  Dog = loadImage("images/dogImg.png");
  DogHappy = loadImage("images/dogImg1.png");
  
}

function setup() {
  database = firebase.database();

  createCanvas(500, 500);
  doggie = createSprite(450,450,10,10);
  doggie.addImage(Dog);
  doggie.scale = 0.1;

  foodStock = database.ref("Food");
    foodStock.on("value", readStock);
  
}


function draw() {  
  background(46,138,87);

  if(keyWentDown(UP_ARROW)&& foodS > 0){
    writeStock(foodS);
    doggie.addImage(DogHappy);
    doggie.scale = doggie.scale+0.05;
  } 
  drawSprites();
  textSize(22);
  fill("purple");
  stroke(3);
  text("Press the up arrow key to feed milk", 50, 100);
  text("Milk bottles remaining: "+foodS, 150, 250);
  
}
function writeStock(x){
  if(x<=0){
    x-0;
  } else{
    x=x-1;
  }

  database.ref("/").update({
    Food: x
  })
}
function readStock(data){
  foodS=data.val();
}



