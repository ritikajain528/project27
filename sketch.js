
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof=new Roof(350,1100,300,30 );
	world.add(world,roof);

	bob object1=new Bob(250,300);
	bob object2=new Bob(300,300);
	bob object3=new Bob(350,300);
	bob object4=new Bob(400,300);
	bob object5=new Bob(450,300);
	
	
	rope1=new Rope(bobobject1.body,roof.body,-100 ,0 );    
world.add(world,rope1);

rope2=new Rope(bobobject2.body,roof.body,-50,0  )    
world.add(world,rope2);

rope3=new Rope(bobobject3.body,roof.body,0,0  )    
world.add(world,rope3);

rope4=new Rope(bobobject4.body,roof.body,+50,0  )    
world.add(world,rope4);

rope5=new Rope(bobobject5.body,roof.body,+100,0  )    
world.add(world,rope5);


Engine.run(engine);

  
}

function draw() {
	
	background("blue");
	engine.update(engine);


	roof.display();


	bob object1.display();
	bob object2.display();
	bob object3.display();
	bob object4.display();
	bob object5.display();


rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();


}
function key pressed (){
	if(key code===UP_ARROW){
		matter.body.applyForce(bobobject1.body,bobobject1.body.position,(x:730,y:0))
	}
	}
}



	
   
  
  








