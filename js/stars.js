/**
 * Created by faithpercious on 2017/7/10.
 */
var starObj =function () {
    this.x;
    this.y;
    this.picNo;
    this.time;
    this.xSpd;
    this.ySpd;
};
starObj.prototype.init=function () {
    this.xSpd=Math.random()*3-1.5;
    this.ySpd=Math.random()*3-1.5;
    this.x=Math.random()*650+100;
    this.y=Math.random()*300+150;
    this.picNo=Math.floor(Math.random()*7);
    this.time=0;
};
starObj.prototype.update=function(){
    if (detaltime){
        this.x+=this.xSpd*detaltime*0.002;
        this.y+=this.ySpd*detaltime*0.002;
        this.time+=detaltime;
    }
    if (this.x<100||this.x>750){
        this.init();
        return;
    }
    if (this.y<150||this.y>450){
        this.init();
        return;
    }

    if (this.time>60){
        this.picNo+=1;
        this.picNo%=7;
        this.time=0;
    }
};
starObj.prototype.draw=function () {
    ctx.save();
    ctx.globalAlpha=life;
    ctx.drawImage(star,this.picNo*7,0,7,7,this.x,this.y,7,7);
    ctx.restore();
};
function drawStars() {
    for (var i=0;i<num;i++){
        stars[i].update();
        stars[i].draw();
    }
}
function availstar() {
    if (sw) {
        if (detaltime) life += 0.03 * detaltime * 0.05;
        if (life > 1) {
           life=1;
        }
    }
    else {
        if (detaltime)  life -= 0.03 * detaltime * 0.05;
        if (life < 0) {
            life = 0;
        }
    }
}

