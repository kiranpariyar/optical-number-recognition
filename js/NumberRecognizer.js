function NumberRecognizer() {
	

	this.recognizeNumber = function(ctx,imageWidth,imageHeight) {
		var recognizedNumber;

	    var imageData = ctx.getImageData(0,0,imageWidth,imageHeight);
        console.log('initial imageData :',imageData);

        
        var blackAndWhiteConverter = new BlackAndWhiteConverter();
        var blackAndWhiteImageData = blackAndWhiteConverter.convertIntoBlackAndWhite(imageData);
        console.log('blackAndWhiteImageData :',blackAndWhiteImageData);
        ctx.putImageData(blackAndWhiteImageData,0,0);

   
        var segmentor = new ImageSegmentation();
        // // var segmentedImageDataArray = segmentor.segmentImage(ctx,imageData);
        var segmentedImageDataArray = segmentor.segmentImage(ctx,blackAndWhiteImageData);
        console.log('segmented image Data array :',segmentedImageDataArray);


        // var imageDownScale = new ImageDownScale();
        // imageDownScale.downscale(imageData);
        // imageDownScale.averageFilter(imageData);
        
        var imgDownScaler = new ImageDownScaler();
        var scaleDownDataArray = [];
        var scaleDownImage;

        for (var i = 0; i < segmentedImageDataArray.length; i++) {
            scaleDownImage = imgDownScaler.getScaleDownImageData(i,ctx,segmentedImageDataArray[i]);
            var blackAndWhiteScaleDown = blackAndWhiteConverter.convertIntoBlackAndWhite(scaleDownImage);
            // scaleDownDataArray.push(scaleDownImage);
            scaleDownDataArray.push(blackAndWhiteScaleDown);
            // imageDownScale.averageFilter(segmentedImageDataArray[i]);
        }

        
        console.log('scaleDownDataArray :',scaleDownDataArray);

        
        var dataRepresentor = new DataRepresentor();
        var binaryDataArray = [];     

        for (var i = 0; i < scaleDownDataArray.length; i++) {
                binaryDataArray.push(dataRepresentor.representImageData(scaleDownDataArray[i]));
        };

        console.log('binaryDataArray :',binaryDataArray);
        var imageDataMatcher = new ImageDataMatcher();
        recognizedNumber = imageDataMatcher.matchWithStoredImage(binaryDataArray);
        for (var i = 0; i < binaryDataArray.length; i++) {
            imageDataMatcher.getPercentageMatched(i,binaryDataArray[i]);    
        }
        
        console.log('recognizedNumber is :',recognizedNumber);
		
        return recognizedNumber;	
	}
}