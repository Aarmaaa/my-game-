var score=0

var player,playerimg,playerbulletimg;

var playerimg2

var enemy1,enemy2,enemy3,enemy4,enemy5,enemy6,enemy7,enemy8,enemy9,enemy10,enemy11,enemy12,enemy13,enemyimg

var l2enemyimg

var enemyHealth=2

var gameoverimg

var level2EnemyBullet

var bulletimg;

var bulletGroup;

var playerBulletGroup;

var zenemyGroup;

var gameState='play'

var lazersound;

var startCount=50;

var destroyEnemyCount=0

var button,buttonimg

var level=1

var mainenemy,mainenemy2,mainenemyimg

function preload(){

    buttonimg=loadImage("images/level2.png")

    playerimg=loadImage("images/player.png");
    enemyimg=loadImage("images/enemy.png");
    bulletimg=loadImage("images/bullet.png");
    playerbulletimg=loadImage("images/playerbullet.png")
    gameoverimg=loadImage("images/gameover.png")

    lazersound=loadSound("sound/lazersound.mp3")

    l2enemyimg=loadImage("images/enemys.png")

    mainenemyimg=loadImage("images/mainenemy.png")

}

function setup(){
    canvas = createCanvas(displayWidth-200, displayHeight-125);

    if(gameState=='play'&&level==1){
    bulletGroup=new Group()

  /*  setInterval(() => {
        console.log("inCreateBullet")
}, 300);
*/

    playerBulletGroup=new Group()

    enemyGroup=new Group()

    player = createSprite(450,675,20,20);
    player.addImage(playerimg);
    player.scale=0.075

    enemy1 = createSprite(100,50,20,20)
    enemy1.addImage(enemyimg)
    enemy1.scale=0.15
    enemyGroup.add(enemy1)

    enemy2 = createSprite(200,50,20,20)
    enemy2.addImage(enemyimg)
    enemy2.scale=0.15
    enemyGroup.add(enemy2)

    enemy3 = createSprite(300,50,20,20)
    enemy3.addImage(enemyimg)
    enemy3.scale=0.15
    enemyGroup.add(enemy3)

    enemy4 = createSprite(400,50,20,20)
    enemy4.addImage(enemyimg)
    enemy4.scale=0.15
    enemyGroup.add(enemy4)

    enemy5 = createSprite(500,50,20,20)
    enemy5.addImage(enemyimg)
    enemy5.scale=0.15
    enemyGroup.add(enemy5)

    enemy6 = createSprite(600,50,20,20)
    enemy6.addImage(enemyimg)
    enemy6.scale=0.15
    enemyGroup.add(enemy6)

    enemy7 = createSprite(700,50,20,20)
    enemy7.addImage(enemyimg)
    enemy7.scale=0.15
    enemyGroup.add(enemy7)

    enemy8 = createSprite(800,50,20,20)
    enemy8.addImage(enemyimg)
    enemy8.scale=0.15
    enemyGroup.add(enemy8)

    enemy9 = createSprite(900,50,20,20)
    enemy9.addImage(enemyimg)
    enemy9.scale=0.15
    enemyGroup.add(enemy9)

    enemy10 = createSprite(1000,50,20,20)
    enemy10.addImage(enemyimg)
    enemy10.scale=0.15
    enemyGroup.add(enemy10)
    
    enemy11 = createSprite(1100,50,20,20)
    enemy11.addImage(enemyimg)
    enemy11.scale=0.15
    enemyGroup.add(enemy11)

    enemy12 = createSprite(1200,50,20,20) 
    enemy12.addImage(enemyimg)
    enemy12.scale=0.15
    enemyGroup.add(enemy12)
}
}

function draw(){
    background("white");
    
    if(gameState=='play'&&level==1){
        textSize(20)
        fill("black")
        text("score :"+score,30,height-30)
        if(keyDown(LEFT_ARROW)){
        changePosition(-10,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(10,0);
    }

    if(keyWentDown("space")){        
        lazersound.play();
        playerBullet()
    }
    

    if(bulletGroup.isTouching(player)){
        player.destroy()
        bulletGroup.destroyEach()
        playerBulletGroup.destroyEach()
        gameState='end'
    }

    if(playerBulletGroup.isTouching(enemy1)&&enemy1.visible){
        enemy1.visible=false
        bulletGroup.destroyEach()
        score=score+50
        destroyEnemyCount+=1
    }
    else if(playerBulletGroup.isTouching(enemy2)&&enemy2.visible){
        enemy2.visible=false;
        bulletGroup.destroyEach()
        score=score+50
        destroyEnemyCount+=1
    } 
    else if(playerBulletGroup.isTouching(enemy3)&&enemy3.visible){
        enemy3.visible=false;
        bulletGroup.destroyEach()
        score=score+50
        destroyEnemyCount+=1
    } 
    else if(playerBulletGroup.isTouching(enemy4)&&enemy4.visible){
        enemy4.visible=false;
        bulletGroup.destroyEach()
        score=score+50
        destroyEnemyCount+=1
    } 
    else if(playerBulletGroup.isTouching(enemy5)&&enemy5.visible){
        enemy5.visible=false;
        bulletGroup.destroyEach()
        score=score+50
        destroyEnemyCount+=1
    } 
    else if(playerBulletGroup.isTouching(enemy6)&&enemy6.visible){
        enemy6.visible=false;
        bulletGroup.destroyEach()
        score=score+50
        destroyEnemyCount+=1
    } 
    else if(playerBulletGroup.isTouching(enemy7)&&enemy7.visible){
        enemy7.visible=false;
        bulletGroup.destroyEach()
        score=score+50
        destroyEnemyCount+=1
    } 
    else if(playerBulletGroup.isTouching(enemy8)&&enemy8.visible){
        enemy8.visible=false;
        bulletGroup.destroyEach()
        score=score+50
        destroyEnemyCount+=1
    }
    else if(playerBulletGroup.isTouching(enemy9)&&enemy9.visible){
        enemy9.visible=false;
        bulletGroup.destroyEach()
        score=score+50
        destroyEnemyCount+=1
    } 
    else if(playerBulletGroup.isTouching(enemy10)&&enemy10.visible){
        enemy10.visible=false;
        bulletGroup.destroyEach()
        score=score+50
        destroyEnemyCount+=1
    } 
    else if(playerBulletGroup.isTouching(enemy11)&&enemy11.visible){
        enemy11.visible=false;
        bulletGroup.destroyEach()
        score=score+50
        destroyEnemyCount+=1
    } 
    else if(playerBulletGroup.isTouching(enemy12)&&enemy12.visible){
        enemy12.visible=false;
        bulletGroup.destroyEach()
        score=score+50
        destroyEnemyCount+=1
    }

    if(destroyEnemyCount==12&&level==1){
        level=2   
        
    }

    createBullet()

    }
    if(gameState=='end'&&level==1){
        var te=createSprite(600,350,10,10)
        te.addImage(gameoverimg)
        enemyGroup.destroyEach()
    }

    if(level=="next level"){

        level2Elements();
        levelEnemyBullets();

        if(keyDown(LEFT_ARROW)){
            changePosition(-10,0);
        }
        else if(keyDown(RIGHT_ARROW)){
            changePosition(10,0);
        }
        if(keyWentDown("space")){        
            lazersound.play();
            playerBullet()
        }

    }

    if(level==2){
        button=createSprite(width/2,height/2+100,40,10)
        button.addImage(buttonimg)
    
        if(mousePressedOver(button)){
            level2Elements()
        }

        // if(playerBullet().isTouching(l2enemy1)){
        //     l2enemy1.enemyHealth=l2enemy1.enemyHealth-1
        //     console.log(l2enemy1)
        // }

        // if(l2enemy1.enemyHealth==0){
        //     l2enemy1.changePosition(30,500)
        // }

        textSize(50)
        fill("black")
        textStyle(BOLD);
        textFont('georgia')
        text("Total Score   " +score,width/2-250,height/2-100);
        
    }

    drawSprites();
}




function level2Elements(){

    level="next level"

    mainenemy=createSprite(width/4,120,20,20)
    mainenemy.addImage(mainenemyimg)
    mainenemy.scale=0.45

    mainenemy2=createSprite(width/2+width/4,120,20,20)
    mainenemy2.addImage(mainenemyimg)
    mainenemy2.scale=0.45

        l2enemy1=createSprite(70,300,20,20)
        l2enemy1.addImage(l2enemyimg)
        l2enemy1.scale=0.5
        l2enemy1.enemyHealth=2

        l2enemy2=createSprite(225,300,20,20)
        l2enemy2.addImage(l2enemyimg)
        l2enemy2.scale=0.5

        l2enemy3=createSprite(375,300,20,20)
        l2enemy3.addImage(l2enemyimg)
        l2enemy3.scale=0.5

        l2enemy4=createSprite(520,300,20,20)
        l2enemy4.addImage(l2enemyimg)
        l2enemy4.scale=0.5

        l2enemy5=createSprite(670,300,20,20)
        l2enemy5.addImage(l2enemyimg)
        l2enemy5.scale=0.5

        l2enemy6=createSprite(820,300,20,20)
        l2enemy6.addImage(l2enemyimg)
        l2enemy6.scale=0.5

        l2enemy7=createSprite(965,300,20,20)
        l2enemy7.addImage(l2enemyimg)
        l2enemy7.scale=0.5

        l2enemy8=createSprite(1110,300,20,20)
        l2enemy8.addImage(l2enemyimg)
        l2enemy8.scale=0.5

        l2enemy9=createSprite(1255,300,20,20)
        l2enemy9.addImage(l2enemyimg)
        l2enemy9.scale=0.5

}

function changePosition(x,y){
    player.x = player.x + x;
    player.y = player.y + y;
}

function levelEnemyBullets(){

    if(World.frameCount % startCount === 0 ){
        var num=Math.round(random(1,4))

        if(num==1&&l2enemy1.visible==true){
        var level2EnemyBullet=createSprite(50,350,5,20)
        level2EnemyBullet.velocityY=1
        level2EnemyBullet.velocityX=1
        level2EnemyBullet.addImage(bulletimg)
        level2EnemyBullet.scale=0.05;
        console.log(level2EnemyBullet)
        }
        else if(num==2&&l2enemy2.visible==true){
        var level2EnemyBullet=createSprite(100,350,5,20)
        level2EnemyBullet.velocityY=1
        level2EnemyBullet.velocityX=1
        level2EnemyBullet.addImage(bulletimg)
        level2EnemyBullet.scale=0.05
        }
        else if(num==3&&l2enemy3.visible==true){
            var level2EnemyBullet=createSprite(150,350,5,20)
            level2EnemyBullet.velocityY=1
            level2EnemyBullet.velocityX=1
            level2EnemyBullet.addImage(bulletimg)
            level2EnemyBullet.scale=0.05
            }
            else if(num==4&&l2enemy4.visible==true){
                var level2EnemyBullet=createSprite(200,350,5,20)
                level2EnemyBullet.velocityY=1
                level2EnemyBullet.velocityX=1
                level2EnemyBullet.addImage(bulletimg)
                level2EnemyBullet.scale=0.05
                }
    }
}

function createBullet(){

    if(World.frameCount % startCount === 0){
        var num=Math.round(random(1,12))

        if(startCount>=0){
          setInterval(() => {
            startCount=startCount-1;
          }, 3000);
        }

        if(num==1&&enemy1.visible==true ){
            var bullet = createSprite(100,100,10,20) 
            bullet.velocityY=3
            bullet.addImage(bulletimg)
            bullet.scale=0.05
            bulletGroup.add(bullet)
        }
        else  if(num==2&&enemy2.visible==true){
            var bullet = createSprite(200,100,10,20) 
            bullet.velocityY=3
            bullet.addImage(bulletimg)
            bullet.scale=0.05
            bulletGroup.add(bullet)
        }
        else  if(num==3&&enemy3.visible==true){
            var bullet = createSprite(300,100,10,20) 
            bullet.velocityY=3
            bullet.addImage(bulletimg)
            bullet.scale=0.05
            bulletGroup.add(bullet)
        }
        else  if(num==4&&enemy4.visible==true){
            var bullet = createSprite(400,100,10,20) 
            bullet.velocityY=3
            bullet.addImage(bulletimg)
            bullet.scale=0.05
            bulletGroup.add(bullet)
        }
        else  if(num==5&&enemy5.visible==true){
            var bullet = createSprite(500,100,10,20) 
            bullet.velocityY=3
            bullet.addImage(bulletimg)
            bullet.scale=0.05
            bulletGroup.add(bullet)
        }
        else  if(num==6&&enemy6.visible==true){
            var bullet = createSprite(600,100,10,20) 
            bullet.velocityY=3
            bullet.addImage(bulletimg)
            bullet.scale=0.05
            bulletGroup.add(bullet)
        }
        else  if(num==7&&enemy7.visible==true){
            var bullet = createSprite(700,100,10,20) 
            bullet.velocityY=3
            bullet.addImage(bulletimg)
            bullet.scale=0.05
            bulletGroup.add(bullet)
        }
        else  if(num==8&&enemy8.visible==true){
            var bullet = createSprite(800,100,10,20) 
            bullet.velocityY=3
            bullet.addImage(bulletimg)
            bullet.scale=0.05
            bulletGroup.add(bullet)
        }
        else  if(num==9&&enemy9.visible==true){
            var bullet = createSprite(900,100,10,20) 
            bullet.velocityY=3
            bullet.addImage(bulletimg)
            bullet.scale=0.05
            bulletGroup.add(bullet)
        }
        else  if(num==10&&enemy10.visible==true){
            var bullet = createSprite(1000,100,10,20) 
            bullet.velocityY=3
            bullet.addImage(bulletimg)
            bullet.scale=0.05
            bulletGroup.add(bullet)
        }
        else  if(num==11&&enemy11.visible==true){
            var bullet = createSprite(1100,100,10,20) 
            bullet.velocityY=3
            bullet.addImage(bulletimg)
            bullet.scale=0.05
            bulletGroup.add(bullet)
        }
        else  if(num==12&&enemy12.visible==true){
            var bullet = createSprite(1200,100,10,20) 
            bullet.velocityY=3
            bullet.addImage(bulletimg)
            bullet.scale=0.05
            bulletGroup.add(bullet)
        } 
    }
}

function playerBullet(){

        var bullet = createSprite(player.x,player.y-50,10,20) 

        bullet.velocityY=-5
        bullet.addImage(playerbulletimg)
        bullet.scale=0.05
        playerBulletGroup.add(bullet)
}