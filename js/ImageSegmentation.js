function ImageSegmentation() {

	this.segmentImageToSingleCharacter = function(ctx,imageData) {
		
			// data is one dimentional array stores pixel information of image
			var data = imageData.data;
			var imageHeight = imageData.height;
			var imageWidth = imageData.width;
			var segmentedImageDataArray = []
            var columnCoordinateArray = [];
            var rowCoordinateArray = [];
            var columnSegementedData;
            var startX;
            var endX;
            var startY;
            var endY;
            var segmentWidth;
            var segmentHeight;

            // getting start and end column of all chracters in image
            columnCoordinateArray = getColumnCoordinates();
       		
       		// loop for segmenting given image into segmented number	

            for(var i = 0; i < columnCoordinateArray.length; i += 2){
            	startX = columnCoordinateArray[i];
	            endX = columnCoordinateArray[i+1];
    	        segmentWidth = endX - startX;
				columnSegmentedData = ctx.getImageData(startX,0,segmentWidth,imageHeight);
				var row = getRowCoordinates(columnSegmentedData,segmentWidth);
				rowCoordinateArray.push(row[0]);
				rowCoordinateArray.push(row[1]);
				startY = row[0];
				endY = row[1];
				segmentHeight = endY - startY;
				segmentedImageData = ctx.getImageData(startX,startY,segmentWidth,segmentHeight);
				segmentedImageDataArray.push(segmentedImageData);
            }
			
            // returns array of start and end column of all characters in image
            function getColumnCoordinates() {

            	var columnCoordinates = [];
            	var red;
	            var green;
	            var blue;
	            var startingFlag = 0;
            	var endingFlag = 0;

	            for(var column = 0; column < imageWidth; column++){
	                
	                for(var row = 0; row < imageHeight; row++){
	                    
	                    red = data[(row * imageWidth + column) * 4];
	                    green = data[(row * imageWidth + column) * 4 + 1];
	                    blue = data[(row * imageWidth + column) * 4 + 2];

	                    if(red != 255 && green != 255 && blue != 255 && startingFlag == 0){
	                        columnCoordinates.push(column);
	                        startingFlag = 1;
	                        column++;
	                        row = 0;
	                    }else if(red == 255 && green == 255 && blue == 255 && startingFlag == 1){
	                        endingFlag = 1;
	                    }else if(startingFlag == 1){
	                        endingFlag = 0;
	                        column++;
	                        row = 0;
	                        if(column >= imageWidth){
	                			columnCoordinates.push(column);
	                			startingFlag = 0;
	                			break;
	                		}
	                    }
	                }
	                
	                if(endingFlag == 1){
	                	columnCoordinates.push(column);
	                    startingFlag = 0;
	                    endingFlag = 0;
	                }
	            }


	            return columnCoordinates;
	        }    

	        // returns array of start and end row of segmented image character
	        function getRowCoordinates(segmentImageData,segmentImgWidth) {
	        	
	        	var rowCoordinate = [];
	        	var red;
            	var green;
            	var blue;
	        	var startingFlag = 0;
            	var endingFlag = 0;
	        	
	            for(var row = 0; row < imageHeight; row ++){
					
					for(var column = 0; column < segmentImgWidth; column ++){

		            	red = segmentImageData.data[(segmentImgWidth*row + column) * 4];
		            	green = segmentImageData.data[(segmentImgWidth*row + column) * 4 + 1];
	                    blue = segmentImageData.data[(segmentImgWidth*row + column) * 4 + 2];
													            	

		            	if(red != 255 && green != 255 && blue != 255 && startingFlag == 0){
		            		rowCoordinate.push(row);
		            		startingFlag = 1;
		            		row ++;
		            		column = 0;
		            	}else if(red == 255 && green == 255 & blue == 255 && startingFlag == 1){
		            		endingFlag = 1;
		            	}else if(startingFlag == 1){
		            		endingFlag = 0;
		            		column = 0;
		            		row ++;

		            		if(row >= imageHeight){
				            	rowCoordinate.push(row);
				            	startingFlag = 0;
				            	break;
				            }
		            	}
		            }

		            if(endingFlag == 1){
		            	rowCoordinate.push(row);
		            	startingFlag = 0;
		            	endingFlag = 0;
		            	break;
		            }
	           	}
				
	        	return rowCoordinate;
       		}

       		return segmentedImageDataArray;    
	}

}