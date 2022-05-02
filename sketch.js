const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var backgroundImg;
var maintree,maintreeImg;
var mango1, mango2, mango3, mango4, mango5;
var mango6, mango7, mango8, mango9, mango10;
var mango11, mango12, mango13, mango14, mango15;
var mango16, mango17, mango18, mango19 , mango20;
var mango21, mango22, mango23, mango24, mango25;
var mangoImg;
var mutenplay, muteImg, playImg;
var backgroundsound;
var ground;
var numberofmangoes;
var mangoescollected = 0;
var stonesleft = 25;
var natkhat;
var stone;
var stonesarray = [];
var numberofstones;
var natkhatbody;

function preload(){

  backgroundImg = loadImage("trees.jpg");
  maintreeImg = loadImage("tree.png");
  mangoImg = loadImage("mango.png");
  playImg = loadImage("play.png");
  backgroundsound = loadSound("Background Sound.mp3");
  numberofmangoes = loadImage("No. of Mangoes.png");
  numberofstones = loadImage("No. of Stones.png");


}

function setup() {
  createCanvas(1200,700);

  engine = Engine.create();
  world = engine.world;

  maintree = Bodies.rectangle(229,400,650,800);

  mango1 = Bodies.rectangle(250,150,75,75);
  mango2 = Bodies.rectangle(250,400,75,75);
  mango3 = Bodies.rectangle(50,300,75,75);
  mango4 = Bodies.rectangle(450,400,75,75);
  mango5 = Bodies.rectangle(150,350,75,75);
  mango6 = Bodies.rectangle(250,350,75,75);
  mango7 = Bodies.rectangle(150,450,75,75);
  mango8 = Bodies.rectangle(50,250,75,75);
  mango9 = Bodies.rectangle(425,350,75,75);
  mango10 = Bodies.rectangle(325,150,75,75);
  mango11 = Bodies.rectangle(400,400,75,75);
  mango12 = Bodies.rectangle(250,200,75,75);
  mango13 = Bodies.rectangle(300,275,75,75);
  mango14 = Bodies.rectangle(100,300,75,75);
  mango15 = Bodies.rectangle(150,400,75,75);
  mango16 = Bodies.rectangle(150,300,75,75);
  mango17 = Bodies.rectangle(250,300,75,75);
  mango18 = Bodies.rectangle(325,325,75,75);
  mango19 = Bodies.rectangle(450,500,75,75);
  mango20 = Bodies.rectangle(325,475,75,75);
  mango21 = Bodies.rectangle(50,350,75,75);
  mango22 = Bodies.rectangle(170,150,75,75);
  mango23 = Bodies.rectangle(25,440,75,75);
  mango24 = Bodies.rectangle(185,420,75,75);
  mango25 = Bodies.rectangle(350,200,75,75);





  mutenplay = createImg("play.png")
  mutenplay.position(1150,50);
  mutenplay.size(50,50);
  mutenplay.mouseClicked(mute);

  ground = createSprite(width/2,700,999999999999999999999,20);

  natkhat = new Player(1000,580,100,200);
  natkhatbody = new MangoPlucker(1000,580,100,200)
  stone = new Stone(1050,600,50,50,-180);


  

  
  

}


function draw() 
{
  background(51);
  //console.log(mango1.position.x);
  console.log(natkhat.body.angle);





  
  image(backgroundImg,0,0,width,height)
  Engine.update(engine);
  imageMode(CENTER);
  image(maintreeImg,maintree.position.x,maintree.position.y,650,800);
  
  if(mango1!=null || mango2!=null || mango3!=null || mango4!=null || mango5!=null){
    image(mangoImg,mango1.position.x,mango1.position.y,30,40);
    image(mangoImg,mango2.position.x,mango2.position.y,30,40);
    image(mangoImg,mango3.position.x,mango3.position.y,30,40);
    image(mangoImg,mango4.position.x,mango4.position.y,30,40);
    image(mangoImg,mango5.position.x,mango5.position.y,30,40);
    image(mangoImg,mango6.position.x,mango6.position.y,30,40);
    image(mangoImg,mango7.position.x,mango7.position.y,30,40);
    image(mangoImg,mango8.position.x,mango8.position.y,30,40);
    image(mangoImg,mango9.position.x,mango9.position.y,30,40);
    image(mangoImg,mango10.position.x,mango10.position.y,30,40);
    image(mangoImg,mango11.position.x,mango11.position.y,30,40);
    image(mangoImg,mango12.position.x,mango12.position.y,30,40);
    image(mangoImg,mango13.position.x,mango13.position.y,30,40);
    image(mangoImg,mango14.position.x,mango14.position.y,30,40);
    image(mangoImg,mango15.position.x,mango15.position.y,30,40);
    image(mangoImg,mango16.position.x,mango16.position.y,30,40);
    image(mangoImg,mango17.position.x,mango17.position.y,30,40);
    image(mangoImg,mango18.position.x,mango18.position.y,30,40);
    image(mangoImg,mango19.position.x,mango19.position.y,30,40);
    image(mangoImg,mango20.position.x,mango20.position.y,30,40);
    image(mangoImg,mango21.position.x,mango21.position.y,30,40);
    image(mangoImg,mango22.position.x,mango22.position.y,30,40);
    image(mangoImg,mango23.position.x,mango23.position.y,30,40);
    image(mangoImg,mango24.position.x,mango24.position.y,30,40);
    image(mangoImg,mango25.position.x,mango25.position.y,30,40);
    image(numberofmangoes,1050,50,100,50);
    image(numberofstones,1050,115,100,50);
    
  }
  textSize(35);
  fill("black");
  text(""+mangoescollected,1055,62);
  text(""+stonesleft,1055,127)
  natkhat.display()
  natkhatbody.display();
  stone.display();
  for (var i = 0; i < stonesarray.length; i++) {
    if (stonesarray[i] !== undefined) {
      stonesarray[i].display();



      var posX = stonesarray[i].body.position.x;
      var posY = stonesarray[i].body.position.y;

      if (posX > width || posY > height) {
        if (!stonesarray[i].isRemoved) {
          stonesarray[i].remove(i);
        } else {
          stonesarray[i].trajectory = [];
        }
      }
    }
  }
  drawSprites();

  
}

function mute(){
  if(backgroundsound.isPlaying())
  {
   backgroundsound.stop();

  }
  else{
   backgroundsound.play();
   backgroundsound.setVolume(0.25)
  }
}

function keyPressed() {
  if (keyCode === 32) {
    if (stonesleft > 0) {
      var posX = natkhat.body.position.x;
      var posY = natkhat.body.position.y;
      var angle = natkhat.body.angle;

      var stone = new Stone(posX, posY, 100, 10, angle);

      stone.trajectory = [];
      
      Matter.Body.setAngle(stone.body, angle);
      stonesarray.push(stone);
      stonesleft -= 1;
    }
  }
}


function keyReleased() {
  if (keyCode === 32) {
    if (stonesarray.length) {
      var angle = natkhat.body.angle;
      stonesarray[stonesarray.length - 1].shoot(angle);
    }
  }
}

