class Dustbin{
    constructor(x,y,width,height){
        this.body= Bodies.rectangle(x,y,width,height,{density:100,friction:100})
        World.add(world,this.body)

        this.width= width;
        this.height= height;
    }

    display(){
        push ()
        fill ("purple")
        rectMode (CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
        pop ()
    }
    
}