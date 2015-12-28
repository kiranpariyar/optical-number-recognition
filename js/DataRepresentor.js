function DataRepresentor() {
	
	this.representImageData = function(imageData) {

	    var data = imageData.data;
	    var binaryArray = [];
	    var binaryArrayIndex = 0;
	    var red;
	    var green;
	    var blue;

	    for(var i = 0; i < data.length; i += 4){
	    	
            red = data[i];
            green = data[i+1]
            blue = data[i+2];

            if(red == 255 && green == 255 && blue == 255){
                binaryArray[binaryArrayIndex] = -1;
            }else{
                binaryArray[binaryArrayIndex] = 1;
            }

            binaryArrayIndex++;
	    }
	    
	    return binaryArray;
	}
}