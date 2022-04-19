var context;

var image;

var time;

$(document).ready(function(){
	var canvas=$("#myCanvas");
	canvas.attr( "width", 1024 );
	canvas.attr( "height", 768 );

	context=canvas.get(0).getContext("2d");

	context.fillRect(0,0,1024,768);
	context.fillStyle="black";	

	init();
	// image=new Image();
	// image.src="image/lizi1.png";
	// image.onload = function()
	// {
	// 	init();
	// }
});

//FPS
var frameTime = 0, lastLoop = new Date, thisLoop;
function fps(){
  var thisFrameTime = (thisLoop=new Date) - lastLoop;
  frameTime+= (thisFrameTime - frameTime)
  lastLoop = thisLoop;
}

function init(){
	fps();
  	var myDate = new Date();
  	$("#fps").html( (1000/frameTime).toFixed(1) );
	drawimg( context );
	setTimeout(init,0);
}


var acu=0;
function drawimg( context ){
	var mx=512;
	var my=384;

	context.beginPath();
    context.fillStyle = "white";
    context.arc(512, 384, 300, 0, Math.PI*2, true); 
    context.closePath();
    context.fill();

   	context.beginPath();
    context.fillStyle = "red";

    if ( acu <= 90 ) {
    	mx = mx+Math.sin((2*Math.PI / 360) * acu) * 290;
    	my = my+Math.cos((2*Math.PI / 360) * acu) * 290;
    	acu += 1;
    }else if( acu <= 180 ){
    	mx = mx+Math.sin((2*Math.PI / 360) * acu) * 290;
    	my = my+Math.cos((2*Math.PI / 360) * acu) * 290;
    	acu += 1;
    }else if( acu <= 270 ){
    	mx = mx+Math.sin((2*Math.PI / 360) * acu) * 290;
    	my = my+Math.cos((2*Math.PI / 360) * acu) * 290;
    	acu += 1;
    }else if( acu <= 360 ){
    	mx = mx+Math.sin((2*Math.PI / 360) * acu) * 290;
    	my = my+Math.cos((2*Math.PI / 360) * acu) * 290;
    	acu += 1;
    	
    }else{
    	acu = 0;
    };
    context.arc(mx, my, 10, 0, Math.PI*2, true);
    context.closePath();
    context.fill();


}
