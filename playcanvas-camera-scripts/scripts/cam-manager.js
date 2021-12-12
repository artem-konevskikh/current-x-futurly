

var CamManager = pc.createScript('camManager');

// initialize code called once per entity
CamManager.prototype.initialize = function() {
    this.activeCamera = this.entity.findByName('Camera1');
    this.audioListener = this.entity.findByName('Audio Listener');
    
    this.app.keyboard.on(pc.EVENT_KEYDOWN, this.onKeyDown, this);
    this.app.mouse.on("mousemove", this._onMouseMove, this);

    this.on('destroy', function() {
        this.app.keyboard.off(pc.EVENT_KEYDOWN, this.onKeyDown, this);
    }, this);
};

//prevents default browser actions, such as scrolling when pressing cursor keys
CamManager.prototype.onKeyDown = function (event) {
    event.event.preventDefault();
};

CamManager.prototype.setCamera = function (cameraName) {
    // Disable the currently active camera
    this.activeCamera.enabled = false;

    // Enable the newly specified camera
    this.activeCamera = this.entity.findByName(cameraName);
    this.activeCamera.enabled = true;

    this.audioListener.reparent(this.entity.findByName(cameraName));

};

// update code called every frame
CamManager.prototype.update = function(dt) {
    var app = this.app;

    if (app.keyboard.wasPressed(pc.KEY_1) ) {
        this.setCamera('camMan');
    } else if (app.keyboard.wasPressed(pc.KEY_2)) {
        this.setCamera('guyCam');
    } else if (app.keyboard.wasPressed(pc.KEY_3)) {
        this.setCamera('Camera1');
    } else if (app.keyboard.wasPressed(pc.KEY_4)) {
        this.setCamera('Camera2');
    } 
    
};