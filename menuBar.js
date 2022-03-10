function menuBar(app){
    var container = new PIXI.Container();
    app.stage.addChild(container);

    var topMenu = new PIXI.Sprite(PIXI.loader.resources["./image/texture2.png"].texture);
    container.addChild(topMenu);
    container.pivot.x = container.width / 2;
    container.pivot.y = container.height / 2;
    container.position.set(526, 226);

    container.visible = false;
}

function getContainer()
{
    return container;
}