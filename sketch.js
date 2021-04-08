var canvas;
var music;
var line1,line2,line3,line4,line5;
var box,edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
line1=createSprite(75,580,150,20);
line1.shapeColor="red"
line2=createSprite(235,580,150,20);
line2.shapeColor="blue"
line3=createSprite(395,580,150,20);
line3.shapeColor="purple"
line4=createSprite(555,580,150,20);
line4.shapeColor="orange"
line5=createSprite(715,580,150,20);
line5.shapeColor="pink"
    //create box sprite and give velocity
box=createSprite(400,100,40,40);
box.shapeColor="white"
box.velocityY=5;
box.velocityX=5;
music.play();
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
   edges= createEdgeSprites();
    box.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if(box.isTouching(line1) && box.bounceOff(line1)) {
        box.shapeColor="red";
    }
    if(box.isTouching(line2) && box.bounceOff(line2)) {
        box.shapeColor="blue";
    }
    if(box.isTouching(line3) && box.bounceOff(line3)) {
        box.shapeColor="purple";
    }
    if(box.isTouching(line4) && box.bounceOff(line4)) {
        box.shapeColor="orange";
        box.velocityX=0;
        box.velocityY=0;
        music.stop();
    }
    if(box.isTouching(line5) && box.bounceOff(line5)) {
        box.shapeColor="pink";
    }
    line1.display();
    line2.display();
    line3.display();
    line4.display();
    line5.display();
    box.display();
}
