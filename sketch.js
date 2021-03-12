var op1, closed, ic, io, gO, gOs, op2, op3, op4, op5, op6;

function preload(){
   ic = loadImage("image_closed.png");
   io = loadImage("image_open.png");
}

function setup(){
    createCanvas(1000, 1000);

    op1 = createSprite(200, 200);
    op1.addImage(ic);
    op1.scale = 0.4;

    op2 = createSprite(600, 200);
    op2.addImage(ic);
    op2.scale = 0.4;

    op3 = createSprite(200, 200);
    op3.addImage(ic);
    op3.scale = 0.4;

    op4 = createSprite(200, 200);
    op4.addImage(ic);
    op4.scale = 0.4;

    op5 = createSprite(200, 200);
    op5.addImage(ic);
    op5.scale = 0.4;

    op6 = createSprite(200, 200);
    op6.addImage(ic);
    op6.scale = 0.4;

}
function draw(){
    drawSprites();
}
