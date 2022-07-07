
var imageAddress = ["image/donghua.png", "image/map.png", "image/Actor1.png", "image/eff.png", "image/bg.jpg"];
var imageStart = [];
var imageId = 0;

this.loadImg = function(){
	var image = new Image();
	image.src = imageAddress[imageId];
	image.onload = function(){
		if( image.complete == true ){
			imageStart.push(image);
			imageId++;
			if( imageId < imageAddress.length ){
				loadImg();
			}
			if( imageId == imageAddress.length ){
				init();
			}
		}
	}
}


window.onload=function(){	
    this.loadImg();
}


function init(){
    stage2d=new Stage2D();

    stage2d.init();

    // initGround();

    // player();

    var mc=new MovieClip2D(imageStart[4]);
    mc.isPlay=1;
    mc.x=1024/2;
    mc.y=768/2;
    mc.frameWidth=imageStart[4].width;
    mc.frameHeight=imageStart[4].height;
    stage2d.addObject(mc);
}

function event_keyword(e){
    console.log("main111",e);
}

function initGround(){
	for (var m = 0; m <= 26; m++) {
    	for( var n = 0; n<=35; n++ ){
    		var bgmc = new MovieClip2D(imageStart[1]);
    		bgmc.mcX = 0;
    		bgmc.mcY = 0;
    		bgmc.frameWidth =30;
    		bgmc.frameHeight = 30;
    		bgmc.x = n*30;
    		bgmc.y = m*30;
    		bgmc.isPlay = false;
    		stage2d.addObject( bgmc );
    	}
    };
}

function player(){
	for( var i = 0; i<=50; i++ ){
		var play = new MovieClip2D(imageStart[2]);
		play.x = 1027*Math.random();
		play.y = 768*Math.random();
		play.frameWidth = 32;
		play.frameHeight = 32;
		play.frameHeadX = Math.floor( Math.random()*4 )*3;
		play.frameHeadY = Math.floor( Math.random()*8 );
		play.totalFrames = 3;
		play.isPlay=1;
		stage2d.addObject( play );
	}
	var mc=new MovieClip2D(imageStart[0],xmlStart[0].quadDataList);
    mc.isPlay=2;
    mc.x=100;
    mc.y=500;
    //设置动画,可以是字符串,XML解析时注意下,这里我截取名称的后4位,所以只需要访问niao就能知道是哪一个动画
    mc.scene("niao")
    stage2d.addObject(mc);

    var mc2=new MovieClip2D(imageStart[0],xmlStart[0].quadDataList);
    mc2.isPlay=2;
    mc2.x=500;
    mc2.y=500;
    //或者可以直接设置动画的循序ID
    mc2.scene(0)
    stage2d.addObject(mc2);
}