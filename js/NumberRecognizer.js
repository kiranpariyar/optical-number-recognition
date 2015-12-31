function NumberRecognizer() {
    
    var imageToBinary = new ImageToBinaryConversion();
    var imageDataMatcher = new ImageDataMatcher();
    var recognizedNumber = [];  

	this.recognizeNumber = function(imageData) {
        
        var binaryDataOfImageNumbers = imageToBinary.convertImageToBinary(imageData);
        var percentageMatchedWithAllNumbers;
        var matchedNumber;
        var secondMatched;
        var allNumber;
        var maxPercentage;
        var secondMaxPercentage;

        for (var i = 0; i < binaryDataOfImageNumbers.length; i++) {

            percentageMatchedWithAllNumbers = imageDataMatcher.getPercentageMatched(binaryDataOfImageNumbers[i]);
            matchedNumber = {};
            secondMatched = {};    
            allNumber = Object.keys(percentageMatchedWithAllNumbers).sort(function(a,b){
                                return percentageMatchedWithAllNumbers[b] - percentageMatchedWithAllNumbers[a]});

            maxPercentage = percentageMatchedWithAllNumbers[allNumber[0]];
            matchedNumber[allNumber[0]] = maxPercentage;
            
            secondMaxPercentage = percentageMatchedWithAllNumbers[allNumber[1]];
            secondMatched[allNumber[1]] = secondMaxPercentage;
            console.log('matched number :',matchedNumber);
            console.log('second matched :',secondMatched);

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