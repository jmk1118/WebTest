var pagewidth = window.innerWidth;
var pageheight = window.innerHeight;

var app = new PIXI.Application({width: pagewidth - 20, height: pageheight - 20, backgroundColor: 0x1099bb, transparent: false}); // PIXI 애플리케이션 추가
document.body.appendChild(app.view); // Canvas를 DOM에 추가

var container = new PIXI.Container();
app.stage.addChild(container);

var slime;
PIXI.loader.add("./image/texture.png").add("./image/texture2.png")
.load(()=> { // 이미지를 load한 후 불러올 콜백 함수
    console.log('load complete');
    
    slime = new PIXI.Sprite(PIXI.loader.resources["./image/texture.png"].texture);
    slime.anchor.set(0.5);
    container.addChild(slime);
    
});

container.pivot.x = container.width / 2;
container.pivot.y = container.height / 2;
container.position.set(20, 20);

container.interactive = true;
container.buttonMode = true;

var touch = true;
container.on('pointertap', function(){
    touch = !touch;
    if(touch)
        slime.texture = PIXI.loader.resources['./image/texture2.png'].texture;
    else
        slime.texture = PIXI.loader.resources['./image/texture.png'].texture;
})
app.ticker.add(function(delta){
    container.rotation -= 0.01 * delta;
})