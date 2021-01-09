const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;

var division1,division2,division3,division4,division5,division6,division7;
var plinko1,plinko2,plinko3,plinko4,plinko5,plinko6,plinko7,plinko8,plinko9,plinko10;
var plinko11,plinko12,plinko13,plinko14,plinko15,plinko16,plinko17,plinko18,plinko19,plinko20;
var plinko21,plinko22,plinko23,plinko24,plinko25,plinko26,plinko27,plinko28,plinko29,plinko30;
var plinko31,plinko32,plinko33,plinko34,plinko35,plinko36,plinko37,plinko38,plinko39,plinko40;
var plinko41,plinko42,plinko43,plinko44,plinko45,plinko46,plinko47,plinko48,plinko49,plinko50;
var plinko51,plinko52;
var particle1,particle2,particle3,particle4,particle5,particle6;

function setup() {
  createCanvas(440,640);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(220,635,440,10);
  division1 = new Division(5,520,10,220);
  division2 = new Division(85,520,10,220);
  division3 = new Division(155,520,10,220);
  division4 = new Division(225,520,10,220);
  division5 = new Division(295,520,10,220);
  division6 = new Division(365,520,10,220);
  division7 = new Division(435,520,10,220);

  plinko1 = new Plinko(20,40,20);
  plinko2 = new Plinko(40,40,20);
  plinko3 = new Plinko(60,40,20);
  plinko4 = new Plinko(80,40,20);
  plinko5 = new Plinko(100,40,20);
  plinko6 = new Plinko(120,40,20);
  plinko7 = new Plinko(140,40,20);
  plinko8 = new Plinko(160,40,20);
  plinko9 = new Plinko(180,40,20);
  plinko10 = new Plinko(200,40,20);
  plinko11 = new Plinko(10,70,20);
  plinko12 = new Plinko(30,70,20);
  plinko13 = new Plinko(50,70,20);
  plinko14 = new Plinko(70,70,20);
  plinko15 = new Plinko(90,70,20);
  plinko16 = new Plinko(110,70,20);
  plinko17 = new Plinko(130,70,20);
  plinko18 = new Plinko(150,70,20);
  plinko19 = new Plinko(170,70,20);
  plinko20 = new Plinko(190,70,20);
  plinko21 = new Plinko(210,70,20);
  plinko22 = new Plinko(20,100,20);
  plinko23 = new Plinko(40,100,20);
  plinko24 = new Plinko(60,100,20);
  plinko25 = new Plinko(80,100,20);
  plinko26 = new Plinko(100,100,20);
  plinko27 = new Plinko(120,100,20);
  plinko28 = new Plinko(140,100,20);
  plinko29 = new Plinko(160,100,20);
  plinko30 = new Plinko(180,100,20);
  plinko31 = new Plinko(200,100,20);
  plinko32 = new Plinko(10,130,20);
  plinko33 = new Plinko(30,130,20);
  plinko34 = new Plinko(50,130,20);
  plinko35 = new Plinko(70,130,20);
  plinko36 = new Plinko(90,130,20);
  plinko37 = new Plinko(110,130,20);
  plinko38 = new Plinko(130,130,20);
  plinko39 = new Plinko(150,130,20);
  plinko40 = new Plinko(170,130,20);
  plinko41 = new Plinko(190,130,20);
  plinko42 = new Plinko(210,130,20);
  plinko43 = new Plinko(20,160,20);
  plinko44 = new Plinko(40,160,20);
  plinko45 = new Plinko(60,160,20);
  plinko46 = new Plinko(80,160,20);
  plinko47 = new Plinko(100,160,20);
  plinko48 = new Plinko(120,160,20);
  plinko49 = new Plinko(140,160,20);
  plinko50 = new Plinko(160,160,20);
  plinko51 = new Plinko(180,160,20);
  plinko52 = new Plinko(200,160,20);

  particle1 = new Particle(100,10,10);
  particle2 = new Particle(100,-2000,10);
  particle3 = new Particle(100,-6000,10);
  particle4 = new Particle(100,-8000,10);
  particle5 = new Particle(100,-10000,10);
  particle6 = new Particle(100,-12000,10);
  
  Engine.run(engine);
  
}

function draw() {
  background("black");

  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();

  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();
  plinko9.display();
  plinko10.display();
  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko15.display();
  plinko16.display();
  plinko17.display();
  plinko18.display();
  plinko19.display();
  plinko20.display();
  plinko21.display();
  plinko22.display();
  plinko23.display();
  plinko24.display();
  plinko25.display();
  plinko26.display();
  plinko27.display();
  plinko28.display();
  plinko29.display();
  plinko30.display();
  plinko31.display();
  plinko32.display();
  plinko33.display();
  plinko34.display();
  plinko35.display();
  plinko36.display();
  plinko37.display();
  plinko38.display();
  plinko39.display();
  plinko40.display();
  plinko41.display();
  plinko42.display();
  plinko43.display();
  plinko44.display();
  plinko45.display();
  plinko46.display();
  plinko47.display();
  plinko48.display();
  plinko49.display();
  plinko50.display();
  plinko51.display();
  plinko52.display();
  
  particle1.display();
  particle2.display();
  particle3.display();
  particle4.display();
  particle5.display();
  particle6.display();
  
  drawSprites();
}