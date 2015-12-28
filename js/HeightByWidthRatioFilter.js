function HeightByWidthRatioFilter() {

	this.filter = function(segmentedImageDataArray) {

		console.log("before splicing :",segmentedImageDataArray);		
		
		var width;
		var height;
		var ratio;
		for(var i = 0; i < segmentedImageDataArray.length; i++){

			width = segmentedImageDataArray[i].width;
			height = segmentedImageDataArray[i].height;

			ratio = height/width;

			if(!(ratio > 1 && ratio < 8)){
				segmentedImageDataArray.splice(i,1);	
			}
		}

		console.log("after splicing :",segmentedImageDataArray);

		return segmentedImageDataArray;
	}
}