var player
var map1,map2
var gaurd
var cupboard1 , cupboard2
var drawer1 ,drawer2 ,drawer3 ,drawer4 , drawer5 , drawer6
var sofa , table ,bed ,stand ,stair
var playerI
var map1I,map2I
var gaurdsI
var cupboardI 
var drawerI
var sofaI
var standI
var diningTableI
var bedI
var carpetI
var stairI
var wall1,wall2 , wall3 , wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20
var floorState = 0
function  preload(){
     playerI = loadImage("theif.png")
     map1I = loadImage("HousePlan-floor1.png")
     map2I = loadImage("HousePlan-floor2.png")
     sofaI = loadImage("sofa.png")
     diningTableI = loadImage("table.png")
     cupboardI = loadImage("cabinet.png")
     bedI = loadImage("bed.png")
     standI = loadImage("nightStand.png")
     stairI=loadImage("stairs.png")
}

function setup(){
    var canvas = createCanvas(1300,700);




    

    edges = createEdgeSprites()




     stair = createSprite(1200,570,50,50)
     stair.addImage(stairI)
     stair.scale=0.6
    
     stair.setCollider("rectangle",100,0,20,350)

    player = createSprite(150,150)
    player.addImage(playerI)
    player.scale = 0.3

stair.debug = true
player.debug = true
}

function draw(){
    


    //movement
    if(keyDown("up")){
     player.y = player.y-10
    }
    if(keyDown("right")){
        player.x = player.x+10
    }
    if(keyDown("down")){
        player.y = player.y+10
       }
       if(keyDown("left")){
           player.x = player.x-10
       }
       if(player.isTouching(stair) && floorState===0){
        floorState = 1
        player.x = 0
        player.y = 0
        console.log("ayyy!")
   }
//    if(player.isTouching(stair) && floorState===1){
//     floorState = 0

// }
// if(floorState === 0){
//     FirstFloor()
// }
// if(floorState === 1){
//     SecondFloor()
// }

SecondFloor()
console.log(floorState)

    drawSprites()
   
}

function FirstFloor(){

    background(map1I);

    wall1 = createSprite(90,180,230,20)
    wall2 = createSprite(300,70,20,230)
    wall3 = createSprite(470,180,350,20)
    wall4 = createSprite(735,70,20,230)
    wall5 = createSprite(945,175,280,20)
    wall6 = createSprite( 1065,295,30,240)
    wall7 = createSprite(1065,430,480,30)
    wall8 = createSprite(835,520,20,150)
    wall9 = createSprite(100,485,350,20)
    wall10 = createSprite(255,640,20,150)   

    wall1.shapeColor = "brown"
    wall2.shapeColor = "brown"
    wall3.shapeColor = "brown"
    wall4.shapeColor = "brown"
    wall5.shapeColor = "brown"
    wall6.shapeColor = "brown"
    wall7.shapeColor = "brown"
    wall8.shapeColor = "brown"
    wall9.shapeColor = "brown"
    wall10.shapeColor = "brown"

    player.collide(wall1)
    player.collide(wall2)
    player.collide(wall3)
    player.collide(wall4)
    player.collide(wall5)
    player.collide(wall6)
    player.collide(wall7)
    player.collide(wall8)
    player.collide(wall9)
    player.collide(wall10)
    player.collide(edges)


    sofa = createSprite(460,320,100,100)
    sofa.addImage(sofaI)
    sofa.scale = 0.3

    table = createSprite(530,530,100,100)
    table.addImage(diningTableI)
    table.scale = 0.3

     drawer1 = createSprite(370,30,50,50)
     drawer1.addImage(cupboardI)
     drawer1.scale=0.3

     drawer2 = createSprite(480,30,50,50)
     drawer2.addImage(cupboardI)
     drawer2.scale=0.3

     drawer3 = createSprite(820,30,50,50)
     drawer3.addImage(cupboardI)
     drawer3.scale=0.3

     drawer4 = createSprite(930,30,50,50)
     drawer4.addImage(cupboardI)
     drawer4.scale=0.3

     drawer5 = createSprite(1040,30,50,50)
     drawer5.addImage(cupboardI)
     drawer5.scale=0.3

     drawer6 = createSprite(50,30,50,50)
     drawer6.addImage(cupboardI)
     drawer6.scale=0.3

     stand = createSprite(1110,390,50,50)
     stand.addImage(standI)
     stand.scale=0.2

     bed = createSprite(1200,300,50,50)
     bed.addImage(bedI)
     bed.scale=0.4
}

function SecondFloor(){
background(map2I)
 //wall11 = createSprite(90,180,230,20)
 wall12 = createSprite(300,70,20,230)
 wall13 = createSprite(470,180,350,20)
 wall14 = createSprite(735,70,20,230)
 wall15 = createSprite(945,175,280,20)
 wall16 = createSprite( 1065,295,30,240)
 wall17 = createSprite(1065,430,480,30)
 wall18 = createSprite(835,520,20,150)
//wall19 = createSprite(100,485,350,20)
wall20 = createSprite(300,540,20,500)   

//wall11.shapeColor = "brown"
wall12.shapeColor = "brown"
wall13.shapeColor = "brown"
wall14.shapeColor = "brown"
wall15.shapeColor = "brown"
wall16.shapeColor = "brown"
wall17.shapeColor = "brown"
wall18.shapeColor = "brown"
//wall19.shapeColor = "brown"
wall20.shapeColor = "brown"

//player.collide(wall11)
player.collide(wall12)
player.collide(wall13)
player.collide(wall14)
player.collide(wall15)
player.collide(wall16)
player.collide(wall17)
player.collide(wall18)
//player.collide(wall19)
player.collide(wall20)
player.collide(edges)


bed2 = createSprite(160,580,100,100)
bed2.addImage(bedI)
bed2.scale = 0.4

stand = createSprite(70,680,50,50)
stand.addImage(standI)
stand.scale=0.2

 drawer1 = createSprite(370,30,50,50)
 drawer1.addImage(cupboardI)
 drawer1.scale=0.3

 drawer2 = createSprite(480,30,50,50)
 drawer2.addImage(cupboardI)
 drawer2.scale=0.3

 drawer3 = createSprite(820,30,50,50)
 drawer3.addImage(cupboardI)
 drawer3.scale=0.3

 drawer4 = createSprite(930,30,50,50)
 drawer4.addImage(cupboardI)
 drawer4.scale=0.3

 drawer5 = createSprite(1040,30,50,50)
 drawer5.addImage(cupboardI)
 drawer5.scale=0.3

 drawer6 = createSprite(50,30,50,50)
 drawer6.addImage(cupboardI)
 drawer6.scale=0.3

 stand = createSprite(1110,390,50,50)
 stand.addImage(standI)
 stand.scale=0.2

 bed = createSprite(1200,300,50,50)
 bed.addImage(bedI)
 bed.scale=0.4
}