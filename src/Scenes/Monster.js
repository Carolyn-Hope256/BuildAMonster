class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        
        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        //Draw Arms
        my.sprite.leftUpperArm = this.add.sprite(this.bodyX + 120, this.bodyY - 80, "monsterParts", "arm_greenE.png");
        my.sprite.leftUpperArm.scaleY = 1.6;
        my.sprite.leftUpperArm.scaleX = 1.2;
        my.sprite.leftUpperArm.flipY = true;
        my.sprite.leftUpperArm.rotation += .6;

        my.sprite.leftLowerArm = this.add.sprite(this.bodyX + 140, this.bodyY + 40, "monsterParts", "arm_greenE.png");
        my.sprite.leftLowerArm.scaleY = 1.6;
        my.sprite.leftLowerArm.scaleX = 1.2;
        my.sprite.leftLowerArm.flipY = true;
        my.sprite.leftLowerArm.rotation += 1.57;

        my.sprite.rightUpperArm = this.add.sprite(this.bodyX - 120, this.bodyY - 80, "monsterParts", "arm_greenE.png");
        my.sprite.rightUpperArm.scaleY = 1.6;
        my.sprite.rightUpperArm.scaleX = 1.2;
        my.sprite.rightUpperArm.flipY = true;
        my.sprite.rightUpperArm.flipX = true;
        my.sprite.rightUpperArm.rotation -= .6;

        my.sprite.rightLowerArm = this.add.sprite(this.bodyX - 140, this.bodyY + 40, "monsterParts", "arm_greenE.png");
        my.sprite.rightLowerArm.scaleY = 1.6;
        my.sprite.rightLowerArm.scaleX = 1.2;
        my.sprite.rightLowerArm.flipY = true;
        my.sprite.rightLowerArm.flipX = true;
        my.sprite.rightLowerArm.rotation -= 1.57;

        //Draw body
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_blueD.png");
        
        //Draw eyes
        my.sprite.leftEyeOpen = this.add.sprite(this.bodyX + 34, this.bodyY-14, "monsterParts", "eye_angry_green.png");
        my.sprite.leftEyeOpen.setScale(.6);
        my.sprite.leftEyeOpen.visible = false;
        my.sprite.leftEye = this.add.sprite(this.bodyX + 36, this.bodyY-12, "monsterParts", "eye_closed_happy.png");
        my.sprite.leftEye.flipY = true;
        
        
        my.sprite.rightEyeOpen = this.add.sprite(this.bodyX - 34, this.bodyY-14, "monsterParts", "eye_angry_green.png");
        my.sprite.rightEyeOpen.setScale(.6);
        my.sprite.rightEyeOpen.flipX = true;
        my.sprite.rightEyeOpen.visible = false;
        my.sprite.rightEye = this.add.sprite(this.bodyX - 36, this.bodyY-12, "monsterParts", "eye_closed_happy.png");
        my.sprite.rightEye.flipY = true;

        my.sprite.thirdEye = this.add.sprite(this.bodyX, this.bodyY - 48, "monsterParts", "eye_yellow.png")
        my.sprite.thirdEye.setScale(.8);

        my.sprite.star = this.add.sprite(this.bodyX, this.bodyY - 200, "monsterParts", "eye_blue.png");
        my.sprite.star.setScale(1.6);
        my.sprite.star.rotation = .7854;

        //Draw mouths
        my.sprite.calmSmile = this.add.sprite(this.bodyX, this.bodyY + 20, "monsterParts", "eye_closed_happy.png");
        my.sprite.calmSmile.scaleX = 2;
        my.sprite.calmSmile.flipY = true;

        my.sprite.fangSmile = this.add.sprite(this.bodyX, this.bodyY + 20, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.fangSmile.scaleX = 1.9;
        my.sprite.fangSmile.flipY = true;
        my.sprite.fangSmile.visible = false;
        
        //Draw legs
        my.sprite.leftLeg = this.add.sprite(this.bodyX + 16, this.bodyY +108, "monsterParts", "leg_greenC.png");
        my.sprite.leftLeg.scaleY = 1.4;
        my.sprite.leftLeg.rotation += 1.1;

        my.sprite.rightLeg = this.add.sprite(this.bodyX - 16, this.bodyY +108, "monsterParts", "leg_greenC.png");
        my.sprite.rightLeg.scaleY = 1.4;
        my.sprite.rightLeg.rotation -= 1.1;
        my.sprite.rightLeg.flipX = true;

        //Event input: Fang Smile
        let fKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        fKey.on('down', (key, event) => {
            my.sprite.leftEye.visible = false;
            my.sprite.leftEyeOpen.visible = true;

            my.sprite.rightEye.visible = false;
            my.sprite.rightEyeOpen.visible = true;

            my.sprite.calmSmile.visible = false;
            my.sprite.fangSmile.visible = true;
        });

        //Event input: Calm Smile
        let sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        sKey.on('down', (key, event) => {
            my.sprite.leftEye.visible = true;
            my.sprite.leftEyeOpen.visible = false;

            my.sprite.rightEye.visible = true;
            my.sprite.rightEyeOpen.visible = false;

            my.sprite.calmSmile.visible = true;
            my.sprite.fangSmile.visible = false;
        });

        

        

        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        if (this.aKey.isDown) {
            for(let s in my.sprite){
                my.sprite[s].x -= 3;
            }
        }
        if (this.dKey.isDown) {
            for(let s in my.sprite){
                my.sprite[s].x += 3;
            }
        }
       
    }

}