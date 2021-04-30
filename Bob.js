class Bob{

    construtor(x,y,radius){
        var options={
            isStatict:false,
            restitution:1,
            friction:0,
            density:7.8,
        }
        this.body=bodies.circle(x,y,25,options);
        World.add(world,this.body);

        console.log(this.body);
    }

    display(){
        Push();
        ellipesMode(RADIUS);
        Fill(254,0,255);
        ellipse(this.body.position.x,this.body.position.y,25,25);
        Pop();


    }
}























