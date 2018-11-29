import WebGL = Laya.WebGL;
// 程序入口
class GameMain{
    constructor()
    {
        // Laya.init(600,400, WebGL);
        Laya3D.init(600,400);
        Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;

        var scene:Laya.Scene = new Laya.Scene();
        Laya.stage.addChild(scene);
        var camera:Laya.Camera = new Laya.Camera();
        scene.addChild(camera);
        var map:Laya.Sprite3D = Laya.Sprite3D.load("../bin/LayaScene_layaScene/layaScene.lh");
        scene.addChild(map);
    }
}
new GameMain();