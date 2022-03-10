import { MenuBar } from "./menuBar.js";
import { PIXILoader } from "./PIXILoader.js";

var pagewidth = window.innerWidth;
var pageheight = window.innerHeight;

var app = new PIXI.Application({width: pagewidth - 20, height: pageheight - 20, backgroundColor: 0x1099bb, transparent: false}); // PIXI 애플리케이션 추가
document.body.appendChild(app.view); // Canvas를 DOM에 추가

var container = new PIXI.Container();
container.pivot.x = container.width / 2;
container.pivot.y = container.height / 2;
app.stage.addChild(container);

PIXILoader.getInstance().load("./image/texture.png", () => {
    console.log('texture load complete');
    
    var slime = new PIXI.Sprite(PIXI.loader.resources["./image/texture.png"].texture);
    slime.anchor.set(0.5);
    container.addChild(slime);
   
    container.position.set(226, 226);
    container.interactive = true;
    container.buttonMode = true;

    var touch = true;
    var menuBar = new MenuBar();
    app.stage.addChild(menuBar.getContainer());
    container.on('pointertap', function(){
        touch = !touch;
        if(touch)
        {
            //slime.texture = PIXI.loader.resources['./image/texture2.png'].texture;
            menuBar.getContainer().visible = true;
        }
        else
        {
            //slime.texture = PIXI.loader.resources['./image/texture.png'].texture;
            menuBar.getContainer().visible = false;
        }
    })
    app.ticker.add(function(delta){
        container.rotation -= 0.01 * delta;
    })
});