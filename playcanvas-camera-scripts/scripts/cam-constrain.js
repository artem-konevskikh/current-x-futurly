var CamConstrain = pc.createScript('camConstrain');

CamConstrain.attributes.add('AnimationBone', {
    type:'entity'
});
CamConstrain.attributes.add('camName', {
    type:'string',
    default: 'entityCam'
});


CamConstrain.prototype.update = function(dt) {
    if (!this.camera) {
        this._createCamera();
    }    
};


CamConstrain.prototype._createCamera = function () {
    // If user hasn't assigned a camera, create a new one
    this.camera = new pc.Entity();
    this.camera.setName(this.camName);
    this.camera.addComponent("camera");
    this.AnimationBone.addChild(this.camera);
    this.camera.translateLocal(0, 0.5, 0);
    this.camera.lookAt(3,2,14);
};

