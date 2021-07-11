alert("Hi, Superman. are you ready?" )
let hero = {
    name:"Superman",
    life:100,
    power:10,
    points:50
}
let enemyLow = {
    name:"Catwoman",
    life:70,
    power:10,
    points:50
}
let enemy = {
    name:"Joker",
    life:110,
    power:10,
    points:100
}
let enemyHigh = {
    name:"Batman",
    life:150,
    power:30,
    points:100
}
let enemyBoss = {
    name:"Goro",
    life:200,
    power:35,
    points:100
}


function fightCatwoman() {let x=hero.life;let y =enemyLow.life;
    for (i=0;x>0;i++){
        x-=enemyLow.power;
    }
    // Этот цикл для того, чтобы выявить победителя.

    // Жизнь врага отнимаем в сила героя
    for (j=0;y>0;j++){
        y = y - hero.power;
    }
    // если условия выполняются
    if (i>j){
        alert ("FINISH HIM!");
        alert(hero.name+" win");
        enemyLow.life=y,hero.points+=enemyLow.points,enemyLow.points=0;

    }
    else {
        alert("FINISH HIM!");
        alert(enemyLow.name+" win");
        hero.life=x,hero.points=0;
            if(hero.life<=0){alert("YOU LOSE!!!");}
    

    }
}
function fightJoker() {let x=hero.life;let y =enemy.life;
    for (i=0;x>0;i++){
        x -=enemy.power;
    }
    for (j=0;y>0;j++){
        y-= hero.power;
    }
    if (i>j){
        alert ("FINISH HIM!")
        alert(hero.name+" win");
        enemy.life=y,hero.points+=enemy.points,enemy.points=0;
     
    }
    else {
        alert("FINISH HIM!");
        alert(enemy.name+" win");
        hero.life=x,hero.points=0;
            if(hero.life<=0){alert("YOU LOSE!!!\nYOUR SOUL IS MINE!!!");}
        document.body.style.backgroundImage = "url(img/99px_ru_animacii_7553_plamja_na_prozrachnom_fone.gif)";
    
    
}
}
function fightBatman() {let x=hero.life;let y =enemyHigh.life;
    for (i=0;x>0;i++){
        x -=enemyHigh.power;
    }
    for (j=0;y>0;j++){
        y-= hero.power;
    }
    if (i>j){
        alert ("FINISH HIM!")
        alert(hero.name+" win");
        enemyHigh.life=y,hero.points+=enemyHigh.points,enemyHigh.points=0;
       
    }
    else {
        alert("FINISH HIM!");
        alert(enemyHigh.name+" win");
        hero.life=x,hero.points=0;
            if(hero.life<=0){alert("YOU LOSE!!!\nYOUR SOUL IS MINE!!!");}
            // document.body.style.backgroundImage = "url(img/99px_ru_animacii_7553_plamja_na_prozrachnom_fone.gif)";
    
}
}
function fightGoro() {let x=hero.life;let y =enemyBoss.life;
    for (i=0;x>0;i++){
        x -=enemyBoss.power;
    }
    for (j=0;y>0;j++){
        y-= hero.power;
    }
    if (i>j){
        alert ("FINISH HIM!")
        alert(hero.name+" win");
        enemyBoss.life=y,hero.points+=enemyBoss.points,enemyBoss.points=0;
        
        }
         
    else {
        alert("FINISH HIM!");
        alert(enemyBoss.name+" win");
        hero.life=x,hero.points=0;
            if(hero.life<=0){alert("YOU LOSE!!!\nYOUR SOUL IS MINE!!!");}
            // document.body.style.backgroundImage = "url(img/99px_ru_animacii_7553_plamja_na_prozrachnom_fone.gif)";
    
    }
}
function heroStats(){
    alert("Hero stats:\n"+"Life: "+hero.life + "\nPower:" + hero.power+"\nPoints: "+hero.points);
}
function catwomanStats(){
    alert("Catwoman stats:\n"+"Life: "+enemyLow.life + "\nPower:" + enemyLow.power+"\nPoints: "+enemyLow.points);
}
function jokerStats(){
    alert("Joker stats:\n"+"Life: "+enemy.life + "\nPower:" + enemy.power+"\nPoints: "+enemy.points);
}
function batmanStats(){
    alert("Batman stats:\n"+"Life: "+enemyHigh.life + "\nPower:" + enemyHigh.power+"\nPoints: "+enemyHigh.points);
}
function goroStats(){
    alert("Goro stats:\n"+"Life: "+enemyBoss.life + "\nPower:" + enemyBoss.power+"\nPoints: "+enemyBoss.points);
}

function shop(){
    let smthn=prompt("CHOOSE YOUR WAY!!! \nCHOOSE 1 for:+20 to POWER - 100 points \nCHOOSE 2 fot:+60 to LIFE - 100 points");
    switch(smthn){
        case "1":{
            if(hero.points>=100){
                hero.power+=20;
                hero.points=0;
            }
            else{
                alert("NOT ENOUGH POINTS");
            }
        };
        break;
        case "2":{
            if(hero.points>=100){
                hero.life+=60;
                hero.points=0;
            }
            else{
                alert("NOT ENOUGH POINTS");
            }
        }
    }
}