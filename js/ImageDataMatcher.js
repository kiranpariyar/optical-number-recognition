function ImageDataMatcher() {
	
	this.matchWithStoredImage = function(sourceDataArray) {

		var euclideanDistance = new EuclideanDistance();
		var matchedNumber = [];

		for (var i = 0; i < sourceDataArray.length; i++) {
            
			var distances = euclideanDistance.getEuclideanDistance(sourceDataArray[i]);
			var keysSorted = Object.keys(distances).sort(function(a,b){return distances[a]-distances[b]});
    		var number = keysSorted[0];
    		// console.log('number is :', number ,distances[number]);
    		switch(keysSorted[0]){

    			case 'zero':matchedNumber.push(0);
    						break;
    			case 'one': matchedNumber.push(1);
    						break;
    			case 'two': matchedNumber.push(2);
    						break;
				case 'three':matchedNumber.push(3);
    						break;
    			case 'four': matchedNumber.push(4);
    						break;
    			case 'five': matchedNumber.push(5);
    						break;
    			case 'six': matchedNumber.push(6);
    						break;
    			case 'seven': matchedNumber.push(7);
    						break;
    			case 'eight': matchedNumber.push(8);
    						break;
    			case 'nine': matchedNumber.push(9);
    						break;			
    		} 
		};


		return matchedNumber;
	}

    this.getPercentageMatched = function(dataNumber,sourceData) {
        
        var numbers = { 
            zero : [[-1,1,1,1,-1, 1,-1,-1,-1,1, 1,-1,-1,-1,1, 1,-1,-1,-1,1, 1,-1,-1,-1,1 ,1,-1,-1,-1,1, 1,-1,-1,-1,1, -1,1,1,1,-1]],
            one : [[-1,-1,1,-1,-1, -1,1,1,-1,-1, 1,-1,1,-1,-1, -1,-1,1,-1,-1, -1,-1,1,-1,-1, -1,-1,1,-1,-1, -1,-1,1,-1,-1, 1,1,1,1,1],
                    [-1,1,1,1,1, -1,-1,-1,1,1, -1,-1,-1,1,1, -1,-1,-1,1,1, -1,-1,-1,1,1, -1,-1,-1,1,1, -1,-1,-1,1,1, -1,-1,-1,1,1],
                    ],
            two : [[1,1,1,1,1, -1,-1,-1,-1,1, -1,-1,-1,-1,1, -1,-1,-1,1,-1, -1,-1,1,-1,-1, -1,1,-1,-1,-1, 1,-1,-1,-1,-1, 1,1,1,1,1],
                    [-1,1,1,1,-1,  1,-1,-1,1,-1, -1,-1,-1,-1,1, -1,-1,-1,-1,1, -1,-1,-1,1,-1, -1,-1,1,-1,-1, -1,1,-1,-1,-1, 1,1,1,1,1]],
            three : [[1,1,1,1,-1, 1,-1,-1,-1,1, -1,-1,-1,-1,1, -1,-1,1,1,-1, -1,-1,-1,-1,1, -1,-1,-1,-1,1, 1,-1,-1,-1,1, 1,1,1,1,-1]],
            four : [[-1,-1,-1,1,-1, -1,-1, 1,1,-1, -1,-1, 1,1,-1, -1,1,-1,1,-1, 1,-1,-1,1,-1, 1,1,1,1,1, -1,-1,-1,1,-1, -1,-1,-1,1,-1]],
            five : [[1,1,1,1,1, 1,-1,-1,-1,-1, 1,-1,-1,-1,-1, 1,1,1,1,-1, -1,-1,-1,-1,1, -1,-1,-1,-1,1, 1,-1,-1,-1,1, 1,1,1,1,-1]],
            six : [[-1,1,1,1,1, 1,-1,-1,-1,1, 1,-1,-1,-1,-1, 1,1,1,1,-1, 1,-1,-1,-1,1, 1,-1,-1,-1,1, 1,-1,-1,-1,1, -1,1,1,1,-1]],
            seven : [[1,1,1,1,1, -1,-1,-1,-1,1, -1,-1,-1,1,-1, -1,-1,-1,1,-1, -1,-1,1,-1,-1, -1,-1,1,-1,-1, -1,1,-1,-1,-1, -1,1,-1,-1,-1]],
            eight : [[-1,1,1,1,-1, 1,-1,-1,-1,1, 1,-1,-1,-1,1, -1,1,1,1,-1, 1,-1,-1,-1,1, 1,-1,-1,-1,1, 1,-1,-1,-1,1, -1,1,1,1,-1],
                    [1,1,1,1,1, 1,-1,-1,-1,1, 1,-1,-1,-1,1, 1,1,1,1,1, 1,-1,-1,-1,1, 1,-1,-1,-1,1, 1,-1,-1,-1,1, 1,1,1,1,1]],
            nine : [[-1,1,1,1,-1, 1,-1,-1,-1,1, 1,-1,-1,-1,1, 1,-1,-1,-1,1, -1,1,1,1,1, -1,-1,-1,-1,1, 1,-1,-1,-1,1, -1,1,1,1,-1]]
        };

        var totalPixel = 40;
        var percentageMatchedObject = {};

        //matching source data with 0 to 9
        console.log('*********');
        console.log('matching ',dataNumber+1,'th number with 0 to 9:');

        for(var number in numbers){

            var percentageMatchedArray = [];

            for (var i = 0; i < numbers[number].length; i++) {

                var matchedPixel = 0;
                var unmatchedPixel = 0;
                var percentageMatched = 0.0;

                for(var j = 0; j < numbers[number][i].length; j++){
                
                   if(sourceData[j] == numbers[number][i][j]){
                        matchedPixel++; 
                   }else{
                        unmatchedPixel++;
                   }
                }
                // console.log('matched pixel with :',number ,matchedPixel);

                percentageMatched = matchedPixel/totalPixel * 100;
                percentageMatchedArray.push(percentageMatched);
                // console.log('matchedPixel with :',number,matchedPixel);
                // console.log('unmatchedPixel with :',number,unmatchedPixel);
                // console.log('matched percentage with:',number,percentageMatched);
            }

            percentageMatchedArray.sort(function(a,b){return b-a});
            // console.log(percentageMatchedArray);    
            percentageMatchedObject[number] = percentageMatchedArray[0];
        }
        
        console.log('matched percentage :',percentageMatchedObject);
    }
}