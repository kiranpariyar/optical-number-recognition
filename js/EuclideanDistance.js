function EuclideanDistance () {
	
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


	// two : [-1,1,1,1,-1,  1,-1,-1,1,-1, -1,-1,-1,-1,1, -1,-1,-1,-1,1, -1,-1,-1,1,-1, -1,-1,1,-1,-1, -1,1,-1,-1,-1, 1,1,1,1,1],
	// returns all euclidean distance between source data and destination data  
	this.getEuclideanDistance = function(sourceArray){

		var distances = {};
		
		for(var number in numbers){
			var distance = [];
			for(var i = 0; i < numbers[number].length; i++){
        		distance[i] = calculateEuclideanDistance(numbers[number][i]);
        		// console.log('distance with :', number ,distance[i]);
        	}
        	// console.log('distance with :', number ,distance); 
        	distance.sort(function(a,b){return a-b});
        	// console.log('distance with ', number ,distance); 
        	distances[number] = distance[0];
    	}

    	console.log('distances',distances);

    	//calculates euclidean distace between source array and destination array
		function calculateEuclideanDistance(destinationArray){
			var result = 0;
		    var diff = 0;

		    for(var i = 0; i < sourceArray.length; i++){
		        diff = destinationArray[i] - sourceArray[i];
		        result += diff * diff; 
		    }

		    result = Math.sqrt(result);

		    return result;
		}

		return distances;

	}	
}