function BlackAndWhiteConverter() {

	this.convertIntoBlackAndWhite = function(imageData){
		var data = imageData.data;
		var thresholdValue = 100;
		var avgValue;

		for(var i = 0; i < data.length; i += 4){
			avgValue = (0.2126*data[i] + 0.7152*data[i + 1] + 0.0722*data[i + 2] >= thresholdValue) ? 255 : 0;
			data[i] = data[i + 1] = data[i + 2] = avgValue; 
			data[i + 3] = 255; 
		}

		return imageData;
	}
}			

