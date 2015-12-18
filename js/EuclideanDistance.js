function EuclideanDistance () {
	
	var numbers = { 
        zero : [-1,1,1,1,-1, 1,1,-1,1,1, 1,-1,-1,-1,1, 1,-1,-1,-1,1, 1,-1,-1,-1,1 ,1,-1,-1,-1,1, 1,1,-1,-1,1, -1,1,1,1,-1],
        one : [-1,-1,1,-1,-1, -1,1,1,-1,-1, 1,-1,1,-1,-1, -1,-1,1,-1,-1, -1,-1,1,-1,-1, -1,-1,1,-1,-1, -1,-1,1,-1,-1, 1,1,1,1,1],
        two : [-1,1,1,1,-1,  1,-1,-1,1,-1, -1,-1,-1,-1,1, -1,-1,-1,-1,1, -1,-1,-1,1,-1, -1,-1,1,-1,-1, -1,1,-1,-1,-1, 1,1,1,1,1],
        three : [1,1,1,1,-1, 1,-1,-1,-1,1, -1,-1,-1,-1,1, -1,-1,1,1,-1, -1,-1,-1,-1,1, -1,-1,-1,-1,1, 1,-1,-1,-1,1, 1,1,1,1,-1],
        four : [-1,-1,-1,1,-1, -1,-1, 1,1,-1, -1,-1, 1,1,-1, -1,1,-1,1,-1, 1,-1,-1,1,-1, 1,1,1,1,1, -1,-1,-1,1,-1, -1,-1,-1,1,-1],
        five : [1,1,1,1,1, 1,-1,-1,-1,-1, 1,-1,-1,-1,-1, 1,1,1,1,-1, -1,-1,-1,-1,1, -1,-1,-1,-1,1, 1,-1,-1,-1,1, 1,1,1,1,-1],
        six : [-1,1,1,1,1, 1,1,-1,-1,-1, 1,-1,-1,-1,-1, 1,1,1,1,1, 1,-1,-1,-1,1, 1,-1,-1,-1,1, 1,-1,-1,-1,1, -1,1,1,1,-1],
        seven : [1,1,1,1,1, -1,-1,-1,-1,1, -1,-1,-1,1,-1, -1,-1,-1,1,-1, -1,-1,1,-1,-1, -1,-1,1,-1,-1, -1,1,-1,-1,-1, -1,1,-1,-1,-1],
        eight : [-1,1,1,1,-1, 1,-1,-1,-1,1, 1,-1,-1,-1,1, -1,1,1,1,-1, -1,1,1,1,-1, 1,-1,-1,-1,1, 1,-1,-1,-1,1, -1,1,1,1,-1],
        nine : [-1,1,1,1,-1, 1,-1,-1,-1,1, 1,-1,-1,-1,1, 1,-1,-1,-1,1, -1,1,1,1,1, -1,-1,-1,-1,1, 1,-1,-1,-1,1, -1,1,1,1,-1]
	};


	// returns all euclidean distance between source data and destination data  
	this.getEuclideanDistance = function(sourceArray){

		var distances = {};

		for(var number in numbers){
        	distances[number] = calculateEuclideanDistance(numbers[number]);
    	}

    	// var keysSorted = Object.keys(distances).sort(function(a,b){return distances[a]-distances[b]});
    	// var number = keysSorted[0];
    	// console.log("number is ", number ,distances[number]);   

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