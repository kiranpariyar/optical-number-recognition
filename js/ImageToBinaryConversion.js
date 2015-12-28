function ImageToBinaryConversion() {
	
	var blackAndWhiteConverter = new BlackAndWhiteConverter();
    var segmentor = new ImageSegmentation();
    var heightByWidthRatioFilter = new HeightByWidthRatioFilter();
    var imageDownScaler = new ImageDownScaler();
    var dataRepresentor = new DataRepresentor();
    var imageDrawing = new ImageDrawing();


	this.convertImageToBinary = function(imageData){

		var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        canvas.width = imageData.width;
        canvas.height = imageData.height;        
        var blackAndWhiteImageData = blackAndWhiteConverter.convertIntoBlackAndWhite(imageData);
        console.log('blackAndWhiteImageData :',blackAndWhiteImageData);
        ctx.putImageData(blackAndWhiteImageData,0,0);
        // var canvasElement = document.getElementsByClassName('canvas-element')[0];
        // canvasElement.appendChild(canvas);
        
        var segmentedImageDataArray = segmentor.segmentImage(ctx,blackAndWhiteImageData);
        console.log('segmented image Data array :',segmentedImageDataArray);
        
        // for (var i = 0; i < segmentedImageDataArray.length; i++) {
        //      imageDrawing.drawImage(i,segmentedImageDataArray[i]);
        // }

        var filteredImageDataArray = heightByWidthRatioFilter.filter(segmentedImageDataArray);

        // for (var i = 0; i < segmentedImageDataArray.length; i++) {
        //      imageDrawing.drawImage(i,filteredImageDataArray[i]);
        // }

        
        var scaleDownImage;
        var blackAndWhiteScaleDown;
        var scaleDownDataArray = [];
        for (var i = 0; i < segmentedImageDataArray.length; i++) {
            // scaleDownImage = imageDownScaler.getScaleDownImageData(i,segmentedImageDataArray[i]);
            scaleDownImage = imageDownScaler.getScaleDownImageData(i,filteredImageDataArray[i]);
            blackAndWhiteScaleDown = blackAndWhiteConverter.convertIntoBlackAndWhite(scaleDownImage);
            scaleDownDataArray.push(blackAndWhiteScaleDown);
            // imageDrawing.drawImage(i,blackAndWhiteScaleDown);  
        }
        console.log("scaleDownImage data :",scaleDownDataArray);
        

        var binaryDataArray = [];     
        for (var i = 0; i < scaleDownDataArray.length; i++) {
            binaryDataArray.push(dataRepresentor.representImageData(scaleDownDataArray[i]));
        }
        console.log('binaryDataArray :',binaryDataArray);

        return binaryDataArray;
	}
}