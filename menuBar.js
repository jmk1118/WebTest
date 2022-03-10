import { PIXILoader } from "./PIXILoader.js";

export class MenuBar{
    constructor(){
        this.container = new PIXI.Container();
    
        PIXILoader.getInstance().load("./image/texture2.png", () =>{
            this.topMenu = new PIXI.Sprite(PIXI.loader.resources["./image/texture2.png"].texture);
            this.container.addChild(this.topMenu);
            this.container.pivot.x = this.container.width / 2;
            this.container.pivot.y = this.container.height / 2;
            this.container.position.set(626, 226);
        
            this.container.visible = true;
        })
    }
    
    getContainer()
    {
        return this.container;
    }
}