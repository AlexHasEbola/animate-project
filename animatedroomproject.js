(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"animatedroomproject_atlas_1", frames: [[824,942,1059,276],[0,0,1920,940],[472,1353,318,162],[1621,1387,308,62],[1150,1220,469,378],[0,1353,470,268],[1621,1220,425,165],[824,1220,324,574],[1885,942,157,175],[0,942,822,409]]},
		{name:"animatedroomproject_atlas_2", frames: [[0,0,1920,1880]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_2 = function() {
	this.initialize(ss["animatedroomproject_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.backgroundblur = function() {
	this.initialize(ss["animatedroomproject_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.book = function() {
	this.initialize(ss["animatedroomproject_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bookquote = function() {
	this.initialize(img.bookquote);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3464,986);


(lib.headphones = function() {
	this.initialize(ss["animatedroomproject_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.laptop = function() {
	this.initialize(ss["animatedroomproject_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.markers = function() {
	this.initialize(ss["animatedroomproject_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.paper = function() {
	this.initialize(ss["animatedroomproject_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.paperpov = function() {
	this.initialize(img.paperpov);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3669,2785);


(lib.pixellamp = function() {
	this.initialize(ss["animatedroomproject_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.tinycanvas = function() {
	this.initialize(ss["animatedroomproject_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.tinycanvaspov = function() {
	this.initialize(ss["animatedroomproject_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.whiteboard = function() {
	this.initialize(ss["animatedroomproject_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.WhiteboardButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.whiteboard();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,822,409);


(lib.TinyCanvasPOVSymbol = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.tinycanvaspov();
	this.instance.setTransform(0,0,0.32,0.32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TinyCanvasPOVSymbol, new cjs.Rectangle(0,0,614.4,601.6), null);


(lib.TinyCanvasButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.tinycanvas();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,157,175);


(lib.TextSymbol = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TextSymbol, new cjs.Rectangle(0,0,529.5,138), null);


(lib.PixelLampButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.pixellamp();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,324,574);


(lib.PaperPovSymbol = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.paperpov();
	this.instance.setTransform(0,406.05,0.34,0.34,-18.9953);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PaperPovSymbol, new cjs.Rectangle(0,0.1,1487.7,1301.2), null);


(lib.PaperButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.paper();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,425,165);


(lib.MarkersButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.markers();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,470,268);


(lib.LaptopButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.laptop();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,469,378);


(lib.HeadphonesButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.headphones();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,308,62);


(lib.BookQuote = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bookquote();
	this.instance.setTransform(0,0,0.51,0.51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BookQuote, new cjs.Rectangle(0,0,1766.6,502.9), null);


(lib.BookButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.book();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,318,162);


// stage content:
(lib.animatedroomproject = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		// ==========================================
		// REGISTER ALL SOUNDS
		// ==========================================
		createjs.Sound.registerSound("sounds/book_click.mp3", "book_click");
		createjs.Sound.registerSound("sounds/headphone_music.mp3", "headphone_music");
		createjs.Sound.registerSound("sounds/mouse_click.mp3", "mouse_click");
		createjs.Sound.registerSound("sounds/pencil_shakes.mp3", "pencil_shakes");
		createjs.Sound.registerSound("sounds/pixel_sound.mp3", "pixel_sound");
		createjs.Sound.registerSound("sounds/radio_tuning.mp3", "radio_tuning");
		
		// ==========================================
		// BUTTON ACTIONS
		// ==========================================
		
		// Book Button
		this.book_btn.addEventListener("click", function() {
		    createjs.Sound.play("book_click");
		
		    if (!this.bookquote_btn.visible) {
		        this.bookquote_btn.alpha = 0;
		        this.bookquote_btn.visible = true;
		        createjs.Tween.get(this.bookquote_btn)
		            .to({alpha: 1}, 500);
		    } else {
		        createjs.Tween.get(this.bookquote_btn)
		            .to({alpha: 0}, 500)
		            .call(function() {
		                this.bookquote_btn.visible = false;
		            }.bind(this));
		    }
		}.bind(this));
		
		// Laptop Button
		this.laptop_btn.addEventListener("click", function() {
			createjs.Sound.play("mouse_click");
			
		    var video = document.getElementById("laptop_video");
		    if (video.style.display === "none") {
		        video.style.display = "block";
		        video.play();
		    } else {
		        video.pause();
		        video.style.display = "none";
		    }
		});
		
		// Pixel Lamp Button
		this.pixellamp_btn.addEventListener("click", function() {
		    createjs.Sound.play("pixel_sound");
		
		    createjs.Tween.get(this.pixellamp_btn)
		        .to({ alpha: 0 }, 400)
		        .to({ alpha: 1 }, 200);
		}.bind(this));
		
		// Create a variable to track if music is playing
		var headphoneMusicInstance = null;
		
		// Headphones Button
		this.headphones_btn.addEventListener("click", function() {
		    if (headphoneMusicInstance == null) {
		        // First time clicked - start playing music
		        headphoneMusicInstance = createjs.Sound.play("headphone_music");
		        headphoneMusicInstance.loop = -1; // Optional: loop the music (remove if you don't want loop)
		    } else if (headphoneMusicInstance.paused) {
		        // If paused, resume
		        headphoneMusicInstance.paused = false;
		    } else {
		        // If playing, pause
		        headphoneMusicInstance.paused = true;
		    }
		}.bind(this));
		
		// Markers Button
		this.markers_btn.addEventListener("click", function() {
		    createjs.Sound.play("pencil_shakes");
		
		    createjs.Tween.get(this.markers_btn)
		        .to({ x: this.markers_btn.x + 5 }, 50)
		        .to({ x: this.markers_btn.x - 5 }, 50)
		        .to({ x: this.markers_btn.x + 3 }, 50)
		        .to({ x: this.markers_btn.x - 3 }, 50)
		        .to({ x: this.markers_btn.x }, 50);
		}.bind(this));
		
		// Tiny Canvas Button
		this.tinycanvas_btn.addEventListener("click", function() {
		    createjs.Sound.play("mouse_click");
		
		    if (!this.tinycanvaspov_btn.visible) {
		        this.tinycanvaspov_btn.alpha = 0;
		        this.tinycanvaspov_btn.visible = true;
		        createjs.Tween.get(this.tinycanvaspov_btn)
		            .to({alpha: 1}, 500);
		    } else {
		        createjs.Tween.get(this.tinycanvaspov_btn)
		            .to({alpha: 0}, 500)
		            .call(function() {
		                this.tinycanvaspov_btn.visible = false;
		            }.bind(this));
		    }
		}.bind(this));
		
		// Whiteboard Button
		this.whiteboard_btn.addEventListener("click", function() {
		    createjs.Sound.play("mouse_click");
		
		    if (!this.whiteboard_text_mc.visible) {
		        this.whiteboard_text_mc.alpha = 0;
		        this.whiteboard_text_mc.visible = true;
		        createjs.Tween.get(this.whiteboard_text_mc)
		            .to({ alpha: 1 }, 500);
		    } else {
		        createjs.Tween.get(this.whiteboard_text_mc)
		            .to({ alpha: 0 }, 500)
		            .call(function() {
		                this.whiteboard_text_mc.visible = false;
		            }.bind(this));
		    }
		}.bind(this));
		
		// Paper Button
		this.paper_btn.addEventListener("click", function() {
		    createjs.Sound.play("book_click");
		
		    if (!this.paperpov_btn.visible) {
		        this.paperpov_btn.alpha = 0;
		        this.paperpov_btn.visible = true;
		        createjs.Tween.get(this.paperpov_btn)
		            .to({alpha: 1}, 500);
		    } else {
		        createjs.Tween.get(this.paperpov_btn)
		            .to({alpha: 0}, 500)
		            .call(function() {
		                this.paperpov_btn.visible = false;
		            }.bind(this));
		    }
		}.bind(this));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// text
	this.whiteboard_text_mc = new lib.TextSymbol();
	this.whiteboard_text_mc.name = "whiteboard_text_mc";
	this.whiteboard_text_mc.setTransform(918.8,190.35,1,1,0,0,0,264.8,68.9);
	this.whiteboard_text_mc.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.whiteboard_text_mc).wait(1));

	// movieclips
	this.paperpov_btn = new lib.PaperPovSymbol();
	this.paperpov_btn.name = "paperpov_btn";
	this.paperpov_btn.setTransform(800.4,479.3,1,1,0,0,0,743.8,650.6);
	this.paperpov_btn.visible = false;
	new cjs.ButtonHelper(this.paperpov_btn, 0, 1, 1);

	this.tinycanvaspov_btn = new lib.TinyCanvasPOVSymbol();
	this.tinycanvaspov_btn.name = "tinycanvaspov_btn";
	this.tinycanvaspov_btn.setTransform(1369.2,458.8,1,1,0,0,0,307.2,300.8);
	this.tinycanvaspov_btn.visible = false;
	new cjs.ButtonHelper(this.tinycanvaspov_btn, 0, 1, 1);

	this.bookquote_btn = new lib.BookQuote();
	this.bookquote_btn.name = "bookquote_btn";
	this.bookquote_btn.setTransform(994.2,497.4,1,1,0,0,0,883.2,251.4);
	this.bookquote_btn.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bookquote_btn},{t:this.tinycanvaspov_btn},{t:this.paperpov_btn}]}).wait(1));

	// buttons
	this.whiteboard_btn = new lib.WhiteboardButton();
	this.whiteboard_btn.name = "whiteboard_btn";
	this.whiteboard_btn.setTransform(901,204.5,1,1,0,0,0,411,204.5);
	new cjs.ButtonHelper(this.whiteboard_btn, 0, 1, 1);

	this.tinycanvas_btn = new lib.TinyCanvasButton();
	this.tinycanvas_btn.name = "tinycanvas_btn";
	this.tinycanvas_btn.setTransform(1799.5,421.5,1,1,0,0,0,78.5,87.5);
	new cjs.ButtonHelper(this.tinycanvas_btn, 0, 1, 1);

	this.paper_btn = new lib.PaperButton();
	this.paper_btn.name = "paper_btn";
	this.paper_btn.setTransform(1589.5,857.5,1,1,0,0,0,212.5,82.5);
	new cjs.ButtonHelper(this.paper_btn, 0, 1, 1);

	this.markers_btn = new lib.MarkersButton();
	this.markers_btn.name = "markers_btn";
	this.markers_btn.setTransform(1439.35,626,1,1,0,0,0,235,134);
	new cjs.ButtonHelper(this.markers_btn, 0, 1, 1);

	this.laptop_btn = new lib.LaptopButton();
	this.laptop_btn.name = "laptop_btn";
	this.laptop_btn.setTransform(942.5,615,1,1,0,0,0,234.5,189);
	new cjs.ButtonHelper(this.laptop_btn, 0, 1, 1);

	this.pixellamp_btn = new lib.PixelLampButton();
	this.pixellamp_btn.name = "pixellamp_btn";
	this.pixellamp_btn.setTransform(492,653,1,1,0,0,0,162,287);
	new cjs.ButtonHelper(this.pixellamp_btn, 0, 1, 1);

	this.headphones_btn = new lib.HeadphonesButton();
	this.headphones_btn.name = "headphones_btn";
	this.headphones_btn.setTransform(1175,874,1,1,0,0,0,154,31);
	new cjs.ButtonHelper(this.headphones_btn, 0, 1, 1);

	this.book_btn = new lib.BookButton();
	this.book_btn.name = "book_btn";
	this.book_btn.setTransform(720,841,1,1,0,0,0,159,81);
	new cjs.ButtonHelper(this.book_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.book_btn},{t:this.headphones_btn},{t:this.pixellamp_btn},{t:this.laptop_btn},{t:this.markers_btn},{t:this.paper_btn},{t:this.tinycanvas_btn},{t:this.whiteboard_btn}]}).wait(1));

	// background
	this.instance = new lib.backgroundblur();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(960,298.8,960,831.2);
// library properties:
lib.properties = {
	id: 'C704D9FC8FFCC94E8C579803B5D73813',
	width: 1920,
	height: 940,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bookquote.png?1745836131647", id:"bookquote"},
		{src:"images/paperpov.png?1745836131647", id:"paperpov"},
		{src:"images/animatedroomproject_atlas_1.png?1745836131594", id:"animatedroomproject_atlas_1"},
		{src:"images/animatedroomproject_atlas_2.png?1745836131594", id:"animatedroomproject_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['C704D9FC8FFCC94E8C579803B5D73813'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;