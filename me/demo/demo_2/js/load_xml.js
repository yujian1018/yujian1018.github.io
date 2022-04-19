this.AnimationXML=function()
{
    this.quadFrameList;
    this.quadDataList;
    this.loadComplete =null;
    loadTarget=this;

    //取得URL
    this.createURL=function(text){
      this.doSearch(text);
    };

    this.createXMLHttpRequest=function(){
      if (window.ActiveXObject){
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
      }else if (window.XMLHttpRequest){
        xmlHttp = new XMLHttpRequest("Msxml2.XMLHTTP.3.0");
      };
    };
 
    //发请请求
    this.doSearch=function(url){
      this.createXMLHttpRequest();
      xmlHttp.onreadystatechange = this.handleStateChange;
      xmlHttp.open("GET",url,"true");
      xmlHttp.send(null);
    };
 
    //处理响应
    this.handleStateChange=function(){
      if (xmlHttp.readyState == 4){
        if (xmlHttp.status == 200){
          loadTarget.parseResults();
        };
      };
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

    this.parseResults=function(){
        var results = xmlHttp.responseXML;
        var textureAtlas = results.getElementsByTagName("SubTexture");
        this.quadDataList=[];
        this.quadFrameList=[];
 
         for (var i = 0; i< textureAtlas.length; i++){
              subTexture =  textureAtlas[i];
              if(name!=subTexture.getAttribute("name").substr(0,subTexture.getAttribute("name").length-4))
              {
 
                this.quadFrameList=[];
                var quadData=new QuadData();
                quadData.name=subTexture.getAttribute("name").substr(0,subTexture.getAttribute("name").length-4);
                quadData.quadFrameLst=this.quadFrameList;
                this.quadDataList.push(quadData);
              };
 
              var cacheframeWidth;
              var cacheframeHeight;
              var cacheWidth;
              var cacheHeight
              var quadFrame=new QuadFrame();
              quadFrame.name=subTexture.getAttribute("name");
              var replace=subTexture.getAttribute("x");
              if(replace!=null)
              {
                quadFrame.x=replace;
              };
 
              replace=subTexture.getAttribute("y");
              if(replace!=null)
              {
                quadFrame.y=replace;
              };
 
              replace=subTexture.getAttribute("width");
              if(replace!=null)
              {
                  quadFrame.width=replace;
                  cacheWidth=replace;
              };
 
              replace=subTexture.getAttribute("height");
              if(replace!=null)
              {
                  quadFrame.height=replace;
                  cacheHeight=replace;
              };
 
              replace=subTexture.getAttribute("frameX");
              if(replace!=null)
              {
                quadFrame.frameX=subTexture.getAttribute("frameX");
              }else
              {
                  quadFrame.frameX=0;
              }
 
              replace=subTexture.getAttribute("frameY");
              if(replace!=null)
              {
                quadFrame.frameY=replace;
              }else
              {
                  quadFrame.frameY=0;
              }
 
              replace=subTexture.getAttribute("frameWidth");
              if(replace!=null)
              {
                quadFrame.frameWidth=replace;
                cacheframeWidth=replace;
              }else{
 
                  if(cacheframeWidth!=null)
                  {
                      quadFrame.frameWidth=cacheframeWidth;
                  }else
                  {
                      quadFrame.frameWidth=cacheWidth;
                  }
              }
 
              replace=subTexture.getAttribute("frameHeight");
              if(replace!=null)
              {
                 quadFrame.frameHeight=replace;
                 cacheframeHeight=replace;
              }else
              {
                  if(cacheframeHeight!=null)
                  {
                      quadFrame.frameHeight=cacheframeHeight;
                  }else
                  {
                      quadFrame.frameHeight=cacheHeight;
                  }
 
              }
 
              this.quadFrameList.push(quadFrame);
              name=subTexture.getAttribute("name").substr(0,subTexture.getAttribute("name").length-4);
         }
 
         if(this.loadComplete!=null){
            this.loadComplete(this);
         };
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
    /**
     * 帧名称
     */
    this.name="";

    /**
     * 帧X坐标
     */
    this.x = 0;

    /**
     * 帧Y坐标
     */
    this.y = 0;

    /**
     * 帧宽度
     */
    this.width = 0;

    /**
     * 帧高度
     */
    this.height = 0;

    /**
     * 帧X偏移坐标
     */
    this.frameX = 0;

    /**
     * 帧Y偏移坐标
     */
    this.frameY = 0;

    /**
     * 帧最大宽度
     */
    this.frameWidth = 0;

    /**
     * 帧最大高度
     */
    this.frameHeight = 0;
};