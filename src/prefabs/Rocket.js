//const { Phaser } = require("../../lib/phaser");

//Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame, mLeft, mRight, mfire){
        super(scene,x,y,texture,frame);
        //add object to existing scene 
        scene.add.existing(this);
        /*** ask whats this is here 
         * 
         * */ 
        //because "this" is already have the object 
        this.isFiring = false;
        //this.p1Rocket.x = this.input.mousePointer.x;
        this.MoveSpeed = 2;
        this.sfxShot = scene.sound.add('sfx_shot')

    }
    update(){
        if(!this.isFiring){
            if(keyLEFT.isDown && this.x >= borderUISize + this.width){
                this.x -=this.MoveSpeed; // if not outside of the border nad if keyLeft is pressed down decrement the x coordinate
            }else if (keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width){
                this.x += this.MoveSpeed;// if not outside of the border nad if keyRight is pressed down inecrement the x coordinate
            } 
        }
        if(Phaser.Input.Keyboard.JustDown(keyFIRE)){   // justdown is different than isdown just down wont take any other input?
            this.isFiring = true ;
            this.sfxShot.play()
            
        }
        
        if(this.isFiring && this.y >= borderUISize * 3 + borderPadding){
            this.y -= this.MoveSpeed;  // y -= this.movement to shot the spaceship up 
        }
        if(this.y <= borderUISize * 3 + borderPadding){
            this.isFiring = false;
            this.y = game.config.height - borderUISize - borderPadding;
        }
    }
    reset(){
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding;
    }

}