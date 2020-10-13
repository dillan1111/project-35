class Food {
    constructor() {
        var foodStock;
        var lastFed;
        this.image = loadImage("images/Milk.png");
      
    }
  
    display(){

        image(this.image, 0, 0, this.width, this.height);
    }
}