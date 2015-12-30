function ImageDataRenderer() {

	this.renderImageData = function(number,imageData) {

		var newCanvas = document.getElementById('process-info');
		var newCanvasCtx = newCanvas.getContext('2d');
		newCanvasCtx.putImageData(imageData,50*(number + 1),20);

	}
}