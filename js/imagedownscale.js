function ImageDownScale() {
	
	this.downscale = function(imageData) {

		var data = imageData.data;
		var initialWidth = imageData.width;
		var initialHeight = imageData.height;
		var finalWidth = 8;
		var finalHeight = 12;
		var scaleX = (initialWidth+0.0)/finalWidth;
		var scaleY = (initialHeight+0.0)/finalHeight;
		var red;
		var green;
		var blue;
		var initialPicture = [];

		for(var i = 0,j = 0; i < data.length; i += 4,j++){
			red = data[i];
			green = data[i+1];
			blue = data[i+2];

			if(red == 255 && green == 255 && blue == 255){
				initialPicture[j] = 1;
			}else{
				initialPicture[j] = 0;
			}
		}		

		var px,py;
		var finalPicture = [];

		for(var i = 0; i < finalHeight; i++){
			for(var j = 0; j < finalWidth; j++){
				px = Math.floor(j*scaleX) ;
            	py = Math.floor(i*scaleY) ;
            	finalPicture[(i*finalWidth)+j] = initialPicture[parseInt((py*initialWidth)+px)] ;
			}
		}

		console.log("initialPicture :",initialPicture);
		console.log("finalPicture :",finalPicture);

		var newCanvas = document.getElementById('process-info');
		var ctx = newCanvas.getContext('2d');
		var finalImageData = ctx.createImageData(finalWidth,finalHeight);
		var finalData = finalImageData.data; 

		for(var i = 0, j = 0; j < finalWidth*finalHeight; i += 4, j++){

			if(finalPicture[j] == 1){
				finalData[i] = 255;
				finalData[i+1] = 255;
				finalData[i+2] = 255;
				finalData[i+3] = 255;
			}else{
				finalData[i] = 0;
				finalData[i+1] = 0;
				finalData[i+2] = 0;
				finalData[i+3] = 255;
			}
		}

		console.log("finalImageData :",finalImageData);
		ctx.putImageData(finalImageData,0,0);
	}

	this.averageFilter = function(imageData){

		var data = imageData.data;
		var width = imageData.width;
		var height = imageData.height;
		var initialPicture = [];

		for(var row = 0; row < height; row ++){
					
			initialPicture[row] = [];		

			for(var column = 0; column < width; column ++){

	            red = data[(width*row + column) * 4];
	           	green = data[(width*row + column) * 4 + 1];
                blue = data[(width*row + column) * 4 + 2];
												            	
	            if(red == 255 && green == 255 && blue == 255){
	        		initialPicture[row][column] = 1; 
	            }else{
	            	initialPicture[row][column] = 0; 
	            }
           	}
        }   	

        // console.log("initialPicture :",initialPicture);

		var thumbwidth = 5;
		var thumbheight = 8;
		var xscale = (thumbwidth + 0.0) / width;
		var yscale = (thumbheight + 0.0) / height;
		var threshold = 0.5 / (xscale * yscale);
		var yend = 0.0;
		var finalPicture = [];

		for(var f = 0; f < thumbheight; f++){

			finalPicture[f] = [];

			var ystart = yend;
			yend = (f + 1) / yscale;

			if(yend >= height){
				yend = height - 0.000001;
			}

			var xend = 0.0;

			for(var g = 0; g < thumbwidth; g++){
				var xstart = xend;
				xend = (g + 1) /xscale;

				if(xend >= width){
					xend = width - 0.000001;
				}
				var sum = 0.0;

				for(var y = parseInt(ystart); y <= parseInt(yend); ++y){
					var yportion = 1.0;
					if(y == parseInt(ystart)){
						yportion -= ystart -y;
					}

					if(y == parseInt(yend)){
						yportion -= y + 1 - yend;
					}

					for(var x = parseInt(xstart); x <= parseInt(xend); ++x){
						var xportion = 1.0;

						if(x == parseInt(xstart)){
							xportion -= xstart -x;
						}

						if(x == parseInt(xend)){
							xportion -= x + 1 - xend;
						}	
						
						sum += initialPicture[y][x] * yportion * xportion;
						
					}
					
				}
				// console.log("sum",sum);
				finalPicture[f][g] = (sum > threshold) ? 1 : 0;
			}
		}

		console.log("finalPicture",finalPicture);

		
		var newCanvas = document.getElementById('process-info');
		var ctx = newCanvas.getContext('2d');
		var finalImageData = ctx.createImageData(thumbwidth,thumbheight);
		var finalData = finalImageData.data;
		var dataIndex = ( thumbwidth * row + column ) * 4;

		for(var row = 0; row < thumbheight; row ++){
						
			for(var column = 0; column < thumbwidth; column ++){

				// console.log(finalPicture[row][column]);


				if(finalPicture[row][column] == 1){				
					finalData[dataIndex] = 255;
					finalData[dataIndex + 1] = 255;
					finalData[dataIndex + 2] = 255;
					finalData[dataIndex + 3] = 255;	
				}else{
					finalData[dataIndex] = 0;
					finalData[dataIndex + 1] = 0;
					finalData[dataIndex + 2] = 0;
					finalData[dataIndex + 3] = 255;	
				}
           	}
        }

      	console.log("finalImageData :",finalImageData);
       	// ctx.putImageData(imageData, 0, 0);
        ctx.putImageData(finalImageData,0,0);

	}
}