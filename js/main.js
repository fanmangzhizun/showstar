/**
 * Created by faithpercious on 2017/7/10.
 */
var can;
var ctx;
var num=60;
var stars=[];
var lasttime;
var detaltime;
var now;
var sw=false;
var life=0;
var girl=new Image();
var star=new Image();
function init() {
    can=document.getElementById("canvas");
    ctx=can.getContext("2d");
    if (ctx){}
    else {
        alert("当前浏览器不支持")
    }
    w=can.width;
    h=can.height;
    girl.src="img/girl.jpg";
    star.src="img/star.png";
    document.addEventListener("mousemove",mousemove,false);
    for (var i=0;i<num;i++){
        var obj=new starObj();
        stars.push(obj);
        stars[i].init()
    }
    lastime=Date.now();
    gameloop();
}
function gameloop() {
    window.requestAnimationFrame(gameloop);
    now =Date.now();
    detaltime=now-lasttime;
    lasttime=now;
    drawbackground();
    drawgirl();
    drawStars();
    availstar();
}
function drawbackground() {
    ctx.fillStyle="yellow";
    ctx.fillRect(0,0,w,h);

}
function drawgirl() {
    ctx.drawImage(girl,100,150,650,300)
}
function mousemove(e) {
    if(e.offsetX||e.layerX) {
        var px = e.offsetX == undefined ? e.layerX : e.offsetX;
        var py = e.offsetY == undefined ? e.layerY : e.offsetY;
    }
    if (px>100&&px<750&&py>150&&py<450){
        sw=true;
    }
    else {
        sw=false;
    }
}
document.body.onload=init;