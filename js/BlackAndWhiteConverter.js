function BlackAndWhiteConverter() {

	this.convertIntoBlackAndWhite = function(imageData){

		var data = imageData.data;
		var red;
		var green;
		var blue;
		var alpha;

		for (var i = 0; i < data.length; i += 4) {
			red = data[i];
			green = data[i+1];
			blue = data[i+2];
			alpha = data[i+3];

			if( (red > 200 && green > 200 && blue > 200) || (red == 0 && green == 0 && blue == 0 && alpha == 0)){
				data[i] = 255;
				data[i+1] = 255;
				data[i+2] = 255;
				data[i+3] = 255; 
			}else{
				data[i] = 0;
				data[i+1] = 0;
				data[i+2] = 0;
				data[i+3] = 255;
			}

		}

		// console.log("black and white imageData :",imageData);
		// ctx.clearRect(0,0,500,650);
		// ctx.putImageData(imageData,0,0);

		return imageData;
	}
}			

