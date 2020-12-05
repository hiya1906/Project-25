class dustbin{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbin.png");

        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world,this.body);

        
    }

    display(){
        var dustbinpos = this.body.position;

        push()
        translate(dustbinpos.x,dustbinpos.y);
        imageMode(CENTER);
        strokeWeight(3);
        fill(255,0,255);
        image(this.image, 0, 0, this.width+50, this.height+50);
        pop()

    }
}