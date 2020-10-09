class Form {

    constructor() {

      this.continue = createImg('images/continue_but.png')
      this.continue.size(displayWidth/4,displayHeight/8);
      this.continue.position(displayWidth/4*3, displayHeight/4*3);
  
      this.input = createInput("");
      this.input.style('font-size','80px');
      this.input.size(displayWidth/5*2,displayHeight/13);
      this.input.position(displayWidth/2-displayWidth/5, displayHeight/5+displayHeight/30);
  
      this.button = createImg('images/start_but.png');
      this.button.size(displayWidth/5,displayHeight/7);
      this.button.position(displayWidth/5*4, displayHeight/8*6);
      
      this.playbut = createImg('images/play_but.png')
      this.playbut.size(displayWidth/4,displayHeight/7);
      this.playbut.position(displayWidth/2-displayWidth/8, displayHeight/8*6);
      
    }
    hide(){
      this.button.hide();
      this.input.hide();
      this.continue.hide()
    }
  
    show(){

  this.button.show();
  this.input.show();
  


}

    display(){
    background(img1)
    this.hide()
    this.hover(this.playbut,"play")
    
    this.playbut.mousePressed(()=>{
    playerCount+=1;
    gameState+=1;
    player.index = playerCount;
    player.update2(gameState)
    player.updateCount(playerCount);
    
  })
   

}
  
    display2(){
    background(img2)
    this.playbut.hide()
    this.continue.show();
    this.hover(this.continue,"continue") 

    this.continue.mousePressed(()=>{
      gameState+=1;
      player.update2(gameState)
  
  
    })
    }
  
  display3(){
    background(img3)
    this.continue.hide();
    this.show();
    this.hover(this.button,"start")

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      gameState+=1;
      player.name = this.input.value();
      player.index = playerCount;
      player.update()
      player.updateCount(playerCount);
    });


}

hover(x,y){

  x.mouseOver(()=>{
    x.elt.src="images/"+y+"_but_h.png";
    })
    
    x.mouseOut(()=>{
      x.elt.src="images/"+y+"_but.png";
      })


}


  }
  