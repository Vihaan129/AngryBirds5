class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visibility = 255;
  }
  display(){
    
    if (this.body.speed < 1){
      super.display();
      console.log(this.body.speed);
    }
    else {
      World.remove(world,this.image);
      push();
      this.Visibility = this.Visibility-10;
      tint(255,this.Visibility);
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      pop();
    }   
  }
};