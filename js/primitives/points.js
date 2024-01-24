class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    equals(p){
        return this.x == p.x && this.y == p.y;
    }
    
    draw(ctx,size=18,color ="black"){
        const rad = size/2;
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(this.x,this.y,rad,0,Math.PI * 2);
        ctx.fill()
    }
}