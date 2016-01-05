function ImageToBinaryConversion() {
	
	var blackAndWhiteConverter = new BlackAndWhiteConverter();
    var segmentor = new ImageSegmentation();
    var heightByWidthRatioFilter = new HeightByWidthRatioFilter();
    var imageDownScaler = new ImageDownScaler();
    var dataRepresentor = new DataRepresentor();
    // var imageRenderer = new ImageDataRenderer();


	this.convertImageToBinary = function(imageData){

		var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        canvas.width = imageData.width;
        canvas.height = imageData.height;        
        var blackAndWhiteImageData = blackAndWhiteConverter.convertIntoBlackAndWhite(imageData);
        console.log('blackAndWhiteImageData :',blackAndWhiteImageData);
        ctx.putImageData(blackAndWhiteImageData,0,0);
        
        // var mainContainer = document.getElementsByClassName('main-container')[0];
        // mainContainer.appendChild(canvas);

        var segmentedImageDataArray = segmentor.segmentImageToSingleCharacter(ctx,blackAndWhiteImageData);
        console.log('segmented image Data array :',segmentedImageDataArray);

        var filteredImageDataArray = heightByWidthRatioFilter.filter(segmentedImageDataArray);
        
        var scaleDownImage;
        var blackAndWhiteScaleDown;
        var scaleDownDataArray = [];
        
        for (var i = 0; i < segmentedImageDataArray.length; i++) {
            scaleDownImage = imageDownScaler.getScaleDownImageData(i,filteredImageDataArray[i]);
            blackAndWhiteScaleDown = blackAndWhiteConverter.convertIntoBlackAndWhite(scaleDownImage);
            scaleDownDataArray.push(blackAndWhiteScaleDown);
        }

        console.log('scaleDownImage data :',scaleDownDataArray);
        
        var binaryDataOfImageNumbers = [];     
        for (var i = 0; i < scaleDownDataArray.length; i++) {
            binaryDataOfImageNumbers.push(dataRepresentor.representImageData(scaleDownDataArray[i]));
        }
        console.log('binaryDataOfImageNumbers :',binaryDataOfImageNumbers);

        return binaryDataOfImageNumbers;
	}
}