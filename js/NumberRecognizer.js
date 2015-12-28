function NumberRecognizer() {
    
    var imageToBinary = new ImageToBinaryConversion();
    var recognizedNumber = [];  

	this.recognizeNumber = function(imageData) {
        
        var imageDataMatcher = new ImageDataMatcher();
        // imageDataMatcher.setNumbers(numbers);
        var binaryDataArray = imageToBinary.convertImageToBinary(imageData);

        for (var i = 0; i < binaryDataArray.length; i++) {

            var percentageMatchedObject = imageDataMatcher.getPercentageMatched(i,binaryDataArray[i]);
            var matchedNumber = {};
            var alternativeMatched = {};    
            var keysSorted = Object.keys(percentageMatchedObject).sort(function(a,b){
                                return percentageMatchedObject[b]-percentageMatchedObject[a]});

            // console.log(keysSorted);
            var maxPercentage = percentageMatchedObject[keysSorted[0]];
            matchedNumber[keysSorted[0]] = maxPercentage;
            var secondMaxPercentage = percentageMatchedObject[keysSorted[1]];
            alternativeMatched[keysSorted[1]] = secondMaxPercentage;
            console.log('matched number :',matchedNumber);
            console.log('second matched :',alternativeMatched);
            console.log('******');

            if(maxPercentage >= 70){
                recognizedNumber.push(parseInt(Object.keys(matchedNumber)));
            }else{
                recognizedNumber.push('unknown');
            }
            
        }
        
        console.log('recognizedNumber is :',recognizedNumber);
		
        return recognizedNumber;	
	}
}