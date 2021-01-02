const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ball,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15
,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25;
var ground,platform;
function preload() {
    
}

function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new YellowBox(500,360,20,30);
    box2 = new RedBox(520,360,20,30);
    box3 = new YellowBox(540,360,20,30);
    box4 = new BlueBox(560,360,20,30);
    box5 = new RedBox(580,360,20,30);
    
    box7 = new BlueBox(510,330,20,30);
    box8 = new RedBox(530,330,20,30);
    box9  = new YellowBox(550,330,20,30);
    box10 = new BlueBox(570,330,20,30);
    
    box12 = new YellowBox(520,310,20,30);
    box13 = new BlueBox(540,310,20,30);
    box14 = new RedBox(560,310,20,30);
  
    box16 = new BlueBox(530,280,20,30);
    box17 = new RedBox(550,280,20,30);
    
    box19 = new BlueBox(540,260,20,30);

    box20 = new RedBox(555,138,20,30);
    box20 = RedBox(575,138,20,30);
    box18 = YellowBox(595,138,280,20,30);
    box15 = YellowBox(565,118,20,30);
    box11 = RedBox(585,118,20,30);
    box6 = YellowBox(575,98,20,30);

    box18 = new YellowBox(545,158,20,30);
    box15 = new YellowBox(565,158,20,30);
    box11 = new RedBox(585,158,20,30);
    box6 = new YellowBox(605,158,20,30);
    
     ball = new Ball(0,0,50)
   
     spring = new SlingShot(ball.body, {x: 200 , y: 200});

     ground = new Platform(400,390,1000,20);

     platform = new Platform(550,160,200,20)
    
    
}

function draw(){
    background(0);
    Engine.update(engine);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    
    box12.display();
    box13.display();
    box14.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();

    ball.display();
    ground.display();
    platform.display();

    drawSprites();
   
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    spring.fly();
}
