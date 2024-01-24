class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    equals(p){
        return this.x == p.x && this.y == p.y;
    }
    
    draw(ctx, {size=18,color ="black", outline = false, fill=false} = {}){
        const rad = size/2;
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(this.x,this.y,rad,0,Math.PI * 2);
        ctx.fill()
        // draw differently if the point is selected
        if (outline) {
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = "White";
            ctx.arc(this.x,this.y,rad*0.6,0,Math.PI * 2);
            ctx.stroke();
        }
        // draw differently if the point is hovered
        if (fill){
            ctx.beginPath();
            ctx.fillStyle = "Yellow";
            ctx.arc(this.x,this.y,rad*0.4,0,Math.PI * 2);
            ctx.fill();
        }
    }
}