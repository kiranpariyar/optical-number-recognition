function NumberRecognizer() {
    
    var imageToBinary = new ImageToBinaryConversion();
    var recognizedNumber = [];  

	this.recognizeNumber = function(imageData) {
        
        var imageDataMatcher = new ImageDataMatcher();
        var binaryDataOfImageNumbers = imageToBinary.convertImageToBinary(imageData);

        for (var i = 0; i < binaryDataOfImageNumbers.length; i++) {

            var percentageMatchedObject = imageDataMatcher.getPercentageMatched(binaryDataOfImageNumbers[i]);
            var matchedNumber = {};
            var alternativeMatched = {};    
            var keysSorted = Object.keys(percentageMatchedObject).sort(function(a,b){
                                return percentageMatchedObject[b]-percentageMatchedObject[a]});

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
        
        if(recognizedNumber.length == 0){
            recognizedNumber = ['unknown']
        }

        console.log('recognizedNumber is :',recognizedNumber);
		
        return recognizedNumber;	
	}
}