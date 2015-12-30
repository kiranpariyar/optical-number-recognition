function DataRepresentor() {


	/*
	 *	represents 40 pixel image data in binary
	 *	with 1 for black and -1 for white
	 *	
	 */

	this.representImageData = function(imageData) {

	    var data = imageData.data;
	    var binaryDataArray = [];
	    var arrayIndex = 0;
	    var red;
	    var green;
	    var blue;

	    for(var i = 0; i < data.length; i += 4){
	    	
            red = data[i];
            green = data[i+1]
            blue = data[i+2];

            if(red == 255 && green == 255 && blue == 255){
                binaryDataArray[arrayIndex] = -1;
            }else{
                binaryDataArray[arrayIndex] = 1;
            }

            arrayIndex++;
	    }
	    
	    return binaryDataArray;
	}
}