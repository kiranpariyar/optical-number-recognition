function HeightByWidthRatioFilter() {

	var mininumRatio = 1;
	var maximunRatio = 8;


	this.setMinimunRatio = function(minValue){
		mininumRatio = minValue
	}

	this.setMaximumRatio = function(maxValue){
		maximunRatio = maxValue;
	}

	// filter data if segmented data height by width ratio is less than minimum or greater than maximum ratio

	this.filter = function(segmentedImageDataArray) {

		console.log('before splicing :',segmentedImageDataArray);		
		
		var width;
		var height;
		var ratio;
		for(var i = 0; i < segmentedImageDataArray.length; i++){

			width = segmentedImageDataArray[i].width;
			height = segmentedImageDataArray[i].height;

			ratio = height/width;

			if(!(ratio > mininumRatio && ratio < maximunRatio)){
				segmentedImageDataArray.splice(i,1);	
			}
		}

		console.log('after splicing :',segmentedImageDataArray);

		return segmentedImageDataArray;
	}
}