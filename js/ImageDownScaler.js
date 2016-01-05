function ImageDownScaler() {
	
	var finalWidth = 5;
	var finalHeight = 8;

	this.getScaleDownImageData = function (number,imageData){

		// var imageRenderer = new ImageDataRenderer();
		var canvas = document.createElement('canvas');
		var context = canvas.getContext('2d');  
		canvas.width = imageData.width;
		canvas.height = imageData.height;
		context.putImageData(imageData,0,0);
		
		// imageRenderer.renderImageData(number,imageData);

		var img = new Image();
		img.src = canvas.toDataURL('image/png');
		img.width = finalWidth;
		img.height = finalHeight;
		context.drawImage(img,0,0,img.width,img.height);
		var scaledownImageData = context.getImageData(0,0,img.width,img.height);

		// imageRenderer.renderImageData(number,scaledownImageData);
		
		return scaledownImageData;
	}
}