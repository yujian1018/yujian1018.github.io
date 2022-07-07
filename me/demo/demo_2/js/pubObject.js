//画布
var canvas;
//上下文
var context;

//场景宽度
var stageWidth=1024;

//场景高度
var stageHeight=768;

//显示列表
var displayObjectList = new Array();

var EVENT_KEY_WORD="event_keyword";

//创建画布上下文
$(document).ready(function(){
    canvas=$("#myCanvas");
    canvas.attr( "width", 1024 );
	canvas.attr( "height", 768 );
    context=canvas.get(0).getContext("2d");
});


function MovieClip2D( img, data ){
	this.x = 0;
	this.y = 0;	
	this.visible = true;
	this.alpha = 1;
	this.rotation = 0;
	this.scaleX = 1;
	this.scaleY = 1;
	
	//动画相对于原始图像的裁切X位置
    this.mcX=0;
    //动画相对于原始图像的裁切Y位置
    this.mcY=0;
    //动画对象的宽度
    this.frameWidth=32;
    //动画对象的高度
    this.frameHeight=32;

	//动画播放头X位置
    this.frameHeadX=0;
    //动画播放头Y位置
    this.frameHeadY=0;
	this.isPlay = true;
	this.totalFrames = 0;
	this.currentFrame = 0;
	//动画播放速度
    this.animationSpeed=10;
    //用于计算过去的时间
    this.animationTime=0;
    //逻辑更新开关
    this.logicUpData=true;
 
    //动画实际宽度
    this.width=0;
 
    //动画实际高度
    this.height=0;
 
    //帧偏移X信息
    this.frameX=0;
 
    //帧偏移Y信息
    this.frameY=0;
 
    //动画ID
    this.nameId=0;

    //混色参数
 	this.blend="source-over";
    //跳转到某一帧并且播放
    this.gotoAndPlay=function(value)
    {
        this.currentFrame=value;
        this.logicUpData=true;
    }
 
    //跳转到某一帧并且停止
    this.gotoAndStop=function(value)
    {
        this.currentFrame=value;
        this.logicUpData=false;
    }
 
    //开始播放动画
    this.play=function()
    {
        this.logicUpData=true;
    }
 
    //停止播放动画
    this.stop=function()
    {
        this.logicUpData=false;
    }
 
    //查询名字
    this.queryName=function(name)
    {
        for(var i=0;i<data.length;i++)
        {
            if(data[i].name==name)
            {
                return i;
            };
        };
        return 0;
    };
 
    //设置场景,可以是数字或者名称
    this.scene=function(name)
    {
        if(isNaN(name))
        {
            this.nameId=this.queryName(name);
        }else
        {
            this.nameId=name;
        };
    };

	this.updateFrame = function(){
		if( this.isPlay ){
            switch(this.isPlay)
	        {
	            case 1:
	                this.mcY=this.frameHeadY*this.frameHeight;
	                this.mcX=this.frameHeadX*this.frameWidth+this.currentFrame*this.frameWidth;
	 
	                break;
	            case 2:
	                this.width=data[this.nameId].quadFrameLst[this.currentFrame].width;
	                this.height=data[this.nameId].quadFrameLst[this.currentFrame].height
	 
	                this.mcX=data[this.nameId].quadFrameLst[this.currentFrame].x;
	                this.mcY=data[this.nameId].quadFrameLst[this.currentFrame].y;
	                this.frameX=data[this.nameId].quadFrameLst[this.currentFrame].frameX;
	                this.frameY=data[this.nameId].quadFrameLst[this.currentFrame].frameY;
	                this.frameWidth=data[this.nameId].quadFrameLst[this.currentFrame].frameWidth;
	                this.frameHeight=data[this.nameId].quadFrameLst[this.currentFrame].frameHeight;
	                this.totalFrames=data[this.nameId].quadFrameLst.length;
	 
	                break;
	        }

			var date=new Date();
	        if((date.getTime()-this.animationTime)>=1000/this.animationSpeed)
	        {
	            this.animationTime=date.getTime();
	            this.currentFrame++;
	        }
	        if(this.currentFrame>=this.totalFrames)
	        {
	            this.currentFrame=0;
	        }
		}
		
	};
	this.paint = function(){
		if( this.visible ){
			this.updateFrame();
			context.save();
            context.globalCompositeOperation=this.blend;//加入混色功能
			context.globalAlpha=this.alpha; //透明度
			context.translate( this.x, this.y ); //设置图像位于画布的相对位置
			context.rotate( this.rotation*Math.PI/180 ); //旋转角度
			context.scale( this.scaleX, this.scaleY ); //图像的比例
			switch(this.isPlay)
            {
                case 1:
                    context.drawImage(img,this.mcX,this.mcY,this.frameWidth,this.frameHeight,-this.frameWidth/2,-this.frameHeight/2,this.frameWidth/2,this.frameHeight/2);
                    break;
                case 2:
                    //增加了帧信息的偏移量,和最后一段的动画实际宽度和高度
                    context.drawImage(img,this.mcX,this.mcY,this.width,this.height,
                        -(this.frameX)-this.frameWidth/2,
                        -(this.frameY)-this.frameHeight/2
                        ,this.width,this.height);
                    break
                default :
                    context.drawImage(img,this.mcX,this.mcY,this.frameWidth,this.frameHeight,-this.frameWidth/2,-this.frameHeight/2,this.frameWidth/2,this.frameHeight/2);
                    break;
            }
			context.restore();
		}
	}
}


function indexOf( Object ){
	for( var i = 0; i< displayObjectList.length; i++ ){
		if( displayObjectList[i] == Object ){
			return i;
		}
	}
	return -1;
}

// document.onmouseup = systemMouseUp;
// document.onmousedown = systemMouseDown;
// document.onmousemove = systemMouseMove;
// document.keydown = systemKeyWord;
document.body.onkeydown = onkeydown;

function systemKeyWord (e) {
    if(coreStage2d!=null){
        var keyID = e.keyCode ? e.keyCode :e.which;  
        console.log( keyID );
        coreStage2d.stageKeyWord( KeyId );
    }
    
}

//事件类
function Event2D(event,callback)
{
    //事件类型
    this.event=event;

    //事件回调函数
    this.callback=callback;
}

var coreStage2d;
function Stage2D(){    
    this.eventList=[];

	this.init = function(){
        coreStage2d = this;
		setTimeout(paint,0);
	};

    this.addEventListener=function(event2D)
    {
        console.log( "pubObject222", event2D );
        this.eventList.push(event2D)
    };
    this.removeEventListener=function(event2D)
    {
        if(this.eventList.indexOf(event2D)!=-1)
            this.eventList.splice(event2D,1);
    };

    this.stageKeyWord=function(e){
        this.isKeyWordEvent(e);
    };
    this.isKeyWordEvent=function(e){
         for(var i = displayObjectList.length-1;i>=0;i--){
            //因为最后添加的对象在最顶上,从画面理解,上层的内容会挡住下层的内容,所以我们的事件触发循序也应该是从显示列表的最后一位开始检测
            if(Math.abs(displayObjectList[i].x-e.pageX)<=displayObjectList[i].width/2&&Math.abs(displayObjectList[i].y-e.pageY)<=displayObjectList[i].height/2)
            {
                for(var j=0;j<this.eventList.length;j++)
                {
                    //如果检测通过并且有相应的事件就回调事件模块中的函数然后把当前点击的对象通过回调函数传递出去,并且返回出去不再执行下一次的逻辑,这就好像上层的图像挡住了下层的对
                    //象而导致你点不到
                    this.eventList[j].callback(displayObjectList[i]);
                    return;
                }
            }
        }
    };
	this.addObject = function(child){
		var index = indexOf( child );
		if( index == -1 ){
			displayObjectList.push( child );
		}else{
			displayObjectList.splice( index, 1, child );
		}
	};
	this.removeObject = function(child){
		var index = indexOf( child );
		if( index != -1 ){
			displayObjectList.splice( index, 1, child );
		}
	};
}

//FPS
var frameTime = 0, lastLoop = new Date, thisLoop;
function fps(){
  var thisFrameTime = (thisLoop=new Date) - lastLoop;
  frameTime+= (thisFrameTime - frameTime);
  lastLoop = thisLoop;
}

function paint()
{
	context.clearRect(0,0,stageWidth,stageHeight);
	var myDate = new Date();
	fps();
  	$("#fps").html( (1000/frameTime).toFixed(1) );

    context.globalAlpha=1;

	for(var i=0;i<displayObjectList.length;i++)
	{
		displayObjectList[i].paint();
	}

	setTimeout(paint,0);
}



