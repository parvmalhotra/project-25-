
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paperObject
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObj=new paperObject(200,450,70);
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

    var render =Render.create({
		element:document.body,
		engine:engine,
		options:{
			height:700,
			weight:1600,
		}
	});



	Engine.run(engine);
    Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background(230);
 
paperObject.display();
  groundObject.display();
  dustbinObj.display();

}

function keyPressed(){
	if(keyCode===UP_ARROW){

		Matter.body.applyForce(paperObject.body,paperObject.position,{x:130,y:-145});

		
	}
}