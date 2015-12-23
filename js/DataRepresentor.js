function DataRepresentor() {
	

	this.representImageData = function(imageData) {

	    var data = imageData.data;
	    var binaryArray = [];
	    var arrayIndex = 0;
	    var red;
	    var green;
	    var blue;

	    for(var i=0; i < data.length; i+=4){
            red = data[i];
            green = data[i+1]
            blue = data[i+2];

            if(red == 255 && green == 255 && blue == 255){
                binaryArray[arrayIndex] = -1;
                arrayIndex++; 
            }else{
                binaryArray[arrayIndex] = 1;
                arrayIndex++;
            }
	    }
	    
	    return binaryArray;
	}
}