document.onkeydown = systemKeyWord;

var role;

function player(){
	role = new MovieClip2D(imageStart[1]);
    role.mcX = 675;
    role.mcY = 558;
    role.frameWidth=139;
    role.frameHeight=70;
    role.x = 101;
    role.y = 289;
    role.rotate = 270;
    role.isPlay = 0;
    role.totalFrames = 3;
    stage2d.addObject( role );
}

function systemKeyWord (e) {
    var keyID = e.keyCode ? e.keyCode :e.which;
    if( keyID == 39 ){
    	role.x+=10;
        role.scaleY = 1;
    }else if( keyID == 37){
    	role.x-=10;
        role.scaleY = -1;
    }else if( keyID == 40 ){
    	role.y+=10;
        
    }else if( keyID == 38 ){
    	role.y-=10;
        
    }
}