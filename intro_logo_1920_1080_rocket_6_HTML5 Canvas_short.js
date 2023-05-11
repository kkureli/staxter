(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"intro_logo_1920_1080_rocket_6_HTML5 Canvas_short_atlas_1", frames: [[0,0,1920,1080]]}
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



(lib.INTRO_2_opt = function() {
	this.initialize(ss["intro_logo_1920_1080_rocket_6_HTML5 Canvas_short_atlas_1"]);
	this.gotoAndStop(0);
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


(lib.an_Video = function(options) {
	this.initialize();
	this._element = new $.an.Video(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.Symbol75 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#000000").beginStroke().moveTo(-103.8,17.6).lineTo(-103.8,-17.6).lineTo(103.8,-17.6).lineTo(103.8,17.6).closePath();
	this.shape.setTransform(103.75,17.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol75, new cjs.Rectangle(0,0,207.5,35.3), null);


(lib.Symbol74 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-55.9,17.6).lineTo(-55.9,-17.6).lineTo(55.9,-17.6).lineTo(55.9,17.6).closePath();
	this.shape.setTransform(55.875,17.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol74, new cjs.Rectangle(0,0,111.8,35.3), null);


(lib.Symbol57 = function(mode,startPosition,loop,reversed) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#044A68").beginStroke().moveTo(-1460,120.6).lineTo(-1460,-90.4).lineTo(-29.5,-90.4).lineTo(0.4,-120.6).lineTo(30.2,-90.4).lineTo(1460,-90.4).lineTo(1460,120.6).closePath();
	this.shape.setTransform(960,250.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol57, new cjs.Rectangle(-500,129.9,2920,241.1), null);


(lib.an_CSS = function(options) {
	this.initialize();
	this._element = new $.an.CSS(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.Symbol73 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// txt
	this.text = new cjs.Text("Datenschutzerklärung", "20px 'Rubik Light'", "#FFFFFF");
	this.text.lineHeight = 27;
	this.text.lineWidth = 244;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// area
	this.instance = new lib.Symbol75();
	this.instance.setTransform(101.85,15.2,1,1,0,0,0,103.8,17.7);
	var instanceFilter_1 = new cjs.ColorFilter(0,0,0,1,4,74,104,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-2,-2,212,39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol73, new cjs.Rectangle(-1.9,-2.5,249.6,35.3), null);


(lib.Symbol72 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// txt
	this.text = new cjs.Text("Impressum", "20px 'Rubik Light'", "#FFFFFF");
	this.text.lineHeight = 27;
	this.text.lineWidth = 123;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// area
	this.instance = new lib.Symbol74();
	this.instance.setTransform(53.95,15.2,1,1,0,0,0,55.9,17.7);
	var instanceFilter_1 = new cjs.ColorFilter(0,0,0,1,4,74,104,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-2,-2,116,39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol72, new cjs.Rectangle(-1.9,-2.5,128.5,35.3), null);


(lib.Symbol67 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
		
		var lnk_1 = this.lnk_1;
		lnk_1.cursor = "pointer";
		lnk_1.addEventListener("click", function() {
		  window.open("impressum.html", "_blank"); 
		});
		
		var lnk_2 = this.lnk_2; // получаем ссылку на мувиклип с именем lnk_1
		lnk_2.cursor = "pointer"; // меняем тип курсора при наведении на мувиклип
		lnk_2.addEventListener("click", function() {
		  window.open("datenschutzerklaerung.html", "_blank"); // открываем ссылку в новом окне при клике на мувиклип
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// Layer_4
	this.instance = new lib.an_CSS({'id': '', 'href':'assets/styles.css'});

	this.instance.setTransform(1242.75,-163.55,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Layer_2_copy
	this.lnk_2 = new lib.Symbol73();
	this.lnk_2.name = "lnk_2";
	this.lnk_2.setTransform(1469.4,20.5,1,1,0,0,0,123.9,14.5);
	new cjs.ButtonHelper(this.lnk_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.lnk_2).wait(2));
	this.lnk_2.addEventListener("tick", AdobeAn.handleFilterCache);

	// Layer_2
	this.lnk_1 = new lib.Symbol72();
	this.lnk_1.name = "lnk_1";
	this.lnk_1.setTransform(1180.5,6);
	new cjs.ButtonHelper(this.lnk_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.lnk_1).wait(2));
	this.lnk_1.addEventListener("tick", AdobeAn.handleFilterCache);

	// Layer_1
	this.text = new cjs.Text("© 2017-2023 Staxter Technologies GmbH. All rights reserved.", "20px 'Rubik Light'", "#FFFFFF");
	this.text.lineHeight = 27;
	this.text.lineWidth = 1028;
	this.text.parent = this;
	this.text.setTransform(-517.5,8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-519.5,-175,2112.7,222.6);


(lib.Symbol64 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_1 = function() {
		var video = document.getElementById("video_b");
		var mainTimeline = this.parent;
		
		video.addEventListener("timeupdate", function() {
		  if (video.currentTime >= 13) {
		    mainTimeline.play();
		    video.removeEventListener("timeupdate", arguments.callee);
		  }
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(803));

	// Layer_1
	this.video_b = new lib.an_Video({'id': 'video_b', 'src':'videos/INTRO_2_60fps_fix_opt.mp4', 'autoplay':true, 'controls':true, 'muted':true, 'loop':false, 'poster':'', 'preload':false, 'class':'video'});

	this.video_b.name = "video_b";
	this.video_b.setTransform(960,540,4.8,3.6,0,0,0,200,150);

	this.timeline.addTween(cjs.Tween.get(this.video_b).wait(804));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.4,-1.8,1924.8000000000002,1083.6);


// stage content:
(lib.intro_logo_1920_1080_rocket_6_HTML5Canvas_short = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [1,189];
	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_189 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(188).call(this.frame_189).wait(1));

	// copyright
	this.instance = new lib.Symbol67();
	this.instance.setTransform(1279.95,1054.7,1,1,0,0,0,516.1,20.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).to({y:1058.7,alpha:1},73,cjs.Ease.quadInOut).wait(87));

	// PLATE_BLUE
	this.instance_1 = new lib.Symbol57();
	this.instance_1.setTransform(1280,1216.5,1,1,0,0,0,960,105.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(1).to({regY:250.4,y:1360.85},0).wait(1).to({y:1359.3},0).wait(1).to({y:1356.65},0).wait(1).to({y:1353.05},0).wait(1).to({y:1348.45},0).wait(1).to({y:1342.9},0).wait(1).to({y:1336.55},0).wait(1).to({y:1329.35},0).wait(1).to({y:1321.5},0).wait(1).to({y:1313.05},0).wait(1).to({y:1304.15},0).wait(1).to({y:1294.8},0).wait(1).to({y:1285.25},0).wait(1).to({y:1275.5},0).wait(1).to({y:1265.65},0).wait(1).to({y:1255.85},0).wait(1).to({y:1246.1},0).wait(1).to({y:1236.55},0).wait(1).to({y:1227.25},0).wait(1).to({y:1218.2},0).wait(1).to({y:1209.5},0).wait(1).to({y:1201.1},0).wait(1).to({y:1193.15},0).wait(1).to({y:1185.55},0).wait(1).to({y:1178.4},0).wait(1).to({y:1171.65},0).wait(1).to({y:1165.3},0).wait(1).to({y:1159.45},0).wait(1).to({y:1154},0).wait(1).to({y:1148.95},0).wait(1).to({y:1144.35},0).wait(1).to({y:1140.2},0).wait(1).to({y:1136.4},0).wait(1).to({y:1133.05},0).wait(1).to({y:1130.1},0).wait(1).to({y:1127.5},0).wait(1).to({y:1125.3},0).wait(1).to({y:1123.45},0).wait(1).to({y:1121.95},0).wait(1).to({y:1120.8},0).wait(1).to({y:1120},0).wait(1).to({y:1119.55},0).wait(1).to({regY:105.5,y:974.5},0).wait(145));

	// final_fame
	this.instance_2 = new lib.INTRO_2_opt();
	this.instance_2.setTransform(0,-180,1.3333,1.3333);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).wait(188));

	// VIDEO_c
	this.instance_3 = new lib.Symbol64();
	this.instance_3.setTransform(1280,540,1.3333,1.3333,0,0,0,960,540);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({_off:true},1).wait(188));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2740,1482);
// library properties:
lib.properties = {
	id: '4487233948587D4F9FB78D61DB839E22',
	width: 2560,
	height: 1080,
	fps: 60,
	color: "#006B9D",
	opacity: 1.00,
	manifest: [
		{src:"images/intro_logo_1920_1080_rocket_6_HTML5 Canvas_short_atlas_1.png?1683249253191", id:"intro_logo_1920_1080_rocket_6_HTML5 Canvas_short_atlas_1"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1683249253211", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1683249253211", id:"sdk/anwidget.js"},
		{src:"components/video/src/video.js?1683249253211", id:"an.Video"},
		{src:"components/ui/src/css.js?1683249253211", id:"an.CSS"}
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
an.compositions['4487233948587D4F9FB78D61DB839E22'] = {
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
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
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