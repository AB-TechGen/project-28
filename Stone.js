class Stone{
    constructor(x, y, width, height){
        var options={
            isStatic: false,
            density: 0.4           
        }
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.image = loadImage("stone.png")
        this.body = Bodies.rectangle(x, y, width, height, options)
        World.add(world, this.body)
    }
    display(){
        var pos = this.body.position
        push()
        translate(pos.x, pos.y)
        image(this.image, 0, 0, this.width, this.height)
        pop()
    }
}