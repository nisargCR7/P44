class Game {
constructor(){
  
    }


    getState(){
        var gameStateRef  = database.ref("players/player"+player.index);
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
    
      }
    



    async start(){
        form = new Form()
        if(gameState === 0){
        form.display();
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
    
}

}


start2(){
if(gameState === 1){

form.display2()


}

}

start3(){
    if(gameState === 2){
    
    form.display3()
    
    
    }
    
    }



play(){
background(room1)
form.hide()
form.playbut.hide()


textSize(displayWidth/30)
textStyle(BOLD)
fill(255);
text(minutes+":"+seconds,displayWidth-displayHeight/5.5,displayHeight/13)

textSize(displayWidth/30)
textStyle(BOLD)
fill(255);
text(player.name,displayWidth/25,displayHeight/13)
}






}
function Pressed(x,y){

  boy.x=boy.x+x
  boy.y=boy.y+y



}