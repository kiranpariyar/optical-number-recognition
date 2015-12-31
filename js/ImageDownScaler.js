function ImageDownScaler() {
	
	this.getScaleDownImageData = function (number,imageData){

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
		
		// var imageRenderer = new ImageDataRenderer();
		// imageRenderer.renderImageData(number,scaledownImageData);
		
		return scaledownImageData;
	}
}