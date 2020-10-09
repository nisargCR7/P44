class Q{
constructor(){
this.index=1


}
 
 
    getQ(x){
    var gameStateRef  = database.ref("Q/Q"+this.index);
    gameStateRef.on("value",function(data){
       x = data.val();
    })

  }}