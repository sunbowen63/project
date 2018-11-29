var WebGL = Laya.WebGL;
// 程序入口
var GameMain = /** @class */ (function () {
    function GameMain() {
        // Laya.init(600,400, WebGL);
        Laya3D.init(600, 400);
        Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
        var scene = new Laya.Scene();
        Laya.stage.addChild(scene);
        var camera = new Laya.Camera();
        scene.addChild(camera);
        var map = Laya.Sprite3D.load("../bin/LayaScene_layaScene/layaScene.lh");
        scene.addChild(map);
    }
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=LayaSample.js.map