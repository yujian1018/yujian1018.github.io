
var imageAddress = ["images/bg/bg.png", "images/role/yan/yan.png"];
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

// var jsonLoad=["images/role/yan/yan.json"];
// var jsonList=[];
// var jsonId=0;
// this.loadJson=function()
// {
//     var load=new AnimationJson();
//     this.initer=function(e)
//     {
//         jsonList.push(load);
//         jsonId++;

//         if(jsonId<jsonLoad.length)
//         {
//             console.log( "111" );
//             loadXml();
//         }
//         if(jsonId==jsonLoad.length)
//         {
//             console.log( "222" );
//             init();
//         }
//     }
//     load.addEventListener(this.initer);
//     load.getJson(jsonLoad[jsonId]);
// }

window.onload=function(){	
    this.loadImg();
}


function init(){
    stage2d=new Stage2D();

    stage2d.init();

    initGround();

    player();
}


function initGround(){
    var bgmc = new MovieClip2D(imageStart[0]);
    bgmc.mcX = 1158;
    bgmc.mcY = 235;
    bgmc.frameWidth =724;
    bgmc.frameHeight = 54;
    bgmc.x = 0;
    bgmc.y = 0;
    bgmc.isPlay = 0;
    stage2d.addObject( bgmc );

    bgmc = new MovieClip2D(imageStart[0]);
    bgmc.mcX = 1158;
    bgmc.mcY = 235;
    bgmc.frameWidth =724;
    bgmc.frameHeight = 54;
    bgmc.x = 724;
    bgmc.y = 0;
    bgmc.isPlay = 0;
    stage2d.addObject( bgmc );

    bgmc = new MovieClip2D(imageStart[0]);
    bgmc.mcX = 1158;
    bgmc.mcY = 290;
    bgmc.frameWidth =754;
    bgmc.frameHeight = 222;
    bgmc.x = 220;
    bgmc.y = 0;
    bgmc.isPlay = 0;
    stage2d.addObject( bgmc );    

	bgmc = new MovieClip2D(imageStart[0]);
	bgmc.mcX = 0;
	bgmc.mcY = 0;
	bgmc.frameWidth =1156;
	bgmc.frameHeight = 484;
	bgmc.x = 0;
    bgmc.y = -32;
	bgmc.isPlay = 0;
	stage2d.addObject( bgmc );
}


