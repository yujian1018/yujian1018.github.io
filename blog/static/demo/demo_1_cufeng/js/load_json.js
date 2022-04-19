this.AnimationJson = function(){
    loadTarget=this;
    this.quadFrameList;
    this.quadDataList;
    this.loadComplete =null;
	this.getJson=function( url ){
		$.ajax({
	        url:url,
	        dataType: "json",
	        error:function(){ alert( "链接服务器失败，请稍后重试！" ); },
	        success:function(data){ 
	        	loadTarget.parseJson(data); 
	        }
		})
	};
	//加载完毕回调侦听器
    this.addEventListener=function(fun)
    {
        this.loadComplete = fun;
    };

    /**
     * 删除侦听器
     * @param   event
     */
    this.removeEventListener=function(event)
    {
        switch(event)
        {
            case EVENT_COMPLETE:
                this.loadComplete = null;
                break;
        };
    };

	this.parseJson=function(data){
		console.log( data );
		this.quadDataList=[];
        this.quadFrameList=[];
	};
};


//帧信息
function QuadData()
{
    /**
     * 场景名称
     */
    this.name="";

    /**
     * 帧片段
     */
    this.quadFrameLst;
};


//帧缓存
function QuadFrame()
{
    this.name="";
	this.x = 0;
	this.y = 0;
	this.width = 0;
	this.height = 0;
	this.frameX = 0;
	this.frameY = 0;
	this.frameWidth = 0;
	this.frameHeight = 0;
};