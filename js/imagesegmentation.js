function ImageSegmentation() {

	this.segmentImage = function(img,ctx,data,imageWidth,imageHeight) {

            var statingFlag = 0;
            var endingFlag = 0;
            var isEndingExist = 0;

            var colCoordinate = getColumnCoordinates();
            var rowCoordinate = [];
            var startX;
            var endX;
            var segementImageData;
            var segmentWidth;


            for(var i = 0; i < colCoordinate.length; i += 2){
            	startX = colCoordinate[i];
	            endX = colCoordinate[i+1];
    	        segmentWidth = endX - startX;
				segmentImageData = ctx.getImageData(startX,0,segmentWidth,imageHeight);
				var row = getRowCoordinates(segmentImageData,segmentWidth);
				rowCoordinate.push(row[0]);
				rowCoordinate.push(row[1]); 
            }

            var coordinates = {column : colCoordinate , row : rowCoordinate};
            // console.log("rowCoordinate :",rowCoordinate);
            // console.log("colCoordinate :",colCoordinate);
   			// console.log("startX :",startX);
			// console.log("endX :",endX);
			// console.log("segmentWidth :",segmentWidth);
			// ctx.drawImage(img, startX, 0, segmentWidth, imageHeight, 0, 150, segmentWidth, imageHeight);
            
            function getColumnCoordinates() {
            	var columnCoordinates = [];
            	var red;
	            var green;
	            var blue;

	            for(var column = 0; column < imageWidth; column++){
	                
	                for(var row = 0; row < imageHeight; row++){
	                    
	                    red = data[(row * imageWidth + column) * 4];
	                    green = data[(row * imageWidth + column) * 4 + 1];
	                    blue = data[(row * imageWidth + column) * 4 + 2];
	                
	                    if(red != 255 && green !=255 && blue != 255 && statingFlag == 0){
	                        columnCoordinates.push(column);
	                        statingFlag = 1;
	                        isEndingExist = 1;
	                        column++;
	                        row = 0;
	                    }
	                    
	                    if(red == 255 && green == 255 && blue == 255 && statingFlag == 1){
	                        endingFlag = 1;
	                    }else if(statingFlag == 1){
	                        endingFlag = 0;
	                        column++;
	                        row = 0;
	                    }
	                }
	                
	                if(endingFlag == 1){
	                    columnCoordinates.push(column);
	                    statingFlag = 0;
	                    isEndingExist = 0;
	                    endingFlag = 0;
	                }
	                
	            }

	            return columnCoordinates;
	        }    

	        function getRowCoordinates(singleImageData,segmentImgWidth) {

	        	var red;
            	var green;
            	var blue;
	        	
	        	statingFlag = 0;
            	endingFlag = 0;
            	isEndingExist = 0;
	        	var rowCoordinates = [];
	        	var row;
	        	var column;
	        	
	            for(row = 0; row < imageHeight; row ++){
					
					for(column = 0; column < segmentImgWidth; column ++){

		            	red = segmentImageData.data[(segmentImgWidth*row + column) * 4];
		            	green = segmentImageData.data[(segmentImgWidth*row + column) * 4 + 1];
	                    blue = segmentImageData.data[(segmentImgWidth*row + column) * 4 + 2];
		            	

		            	if(red != 255 && green != 255 && blue != 255 && statingFlag == 0){
		            		// console.log("red :",red);
		            		// console.log("green :",green);
		            		// console.log("blue :",blue);
		            		// console.log("staring row :",row);
		            		// console.log("column",column);
		            		rowCoordinates.push(row);
		            		statingFlag = 1;
		            		isEndingExist = 1;
		            		row ++;
		            		column = 0;
		            	}

		            	
		            	if(red == 255 && green == 255 & blue == 255 && statingFlag == 1){
		            		endingFlag = 1;
		            	}else if( statingFlag == 1){
		            		endingFlag = 0;
		            		column = 0;
		            		row ++;
		            	}
		            }

		            if(endingFlag == 1){
		            	rowCoordinates.push(row);
		            	statingFlag = 0;
		            	break;
		            }   
	           	}
				
	        	return rowCoordinates;   	   
       		}

       		return coordinates;    
	}

}