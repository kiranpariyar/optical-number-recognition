function ImageDownScaler() {
	
	this.getScaleDownImageData = function (number,ctx,imageData){

		var canvas = document.createElement('canvas');
		var context = canvas.getContext('2d');  
		canvas.width = imageData.width;
		canvas.height = imageData.height;
		context.putImageData(imageData,0,0);

		var img = new Image();
		img.src = canvas.toDataURL('image/png');
		img.width = 5;
		img.height = 8;
		context.drawImage(img,0,0,img.width,img.height);
		var scaledownImageData = context.getImageData(0,0,img.width,img.height);
		var newCanvas = document.getElementById('process-info');
		var newCanvasCtx = newCanvas.getContext('2d');
		// console.log('scaledownImageData :',scaledownImageData);
		newCanvasCtx.drawImage(img,20*(number + 1),20,img.width,img.height);

		return scaledownImageData;
	}
}