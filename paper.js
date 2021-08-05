class paper
{
		constructor(x,y,r)
	{

       var options ={
		   isStatic:false,
		   restitution:0.3,
		   friction:0,
		   density:0.2
	   }
		this.x=x;
		this.y=y;
		this.r=r;
	
		
		this.image=loadImage("paper.png")
		this.Body=Bodies.circle(this.x, this.y,(this.r-20)/2,options)
		
		World.add(world, this.Body)
	}
	display()
	{
			var paperpos=this.Body.position;
			
			push()
			translate(paperpos.x, pospos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			rotate(this.angle)
			pop()
	}

}