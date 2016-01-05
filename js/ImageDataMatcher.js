function ImageDataMatcher() {

    var numbers;
    var totalPixel = 40;

    this.setNumbers = function(templateData){
        numbers = templateData;
    }

    this.setTotalPixel = function(noOfPixel){
        totalPixel = noOfPixel;
    }

    this.getPercentageMatched = function(sourceData) {
        
        numbers = { 
            '0' : [[-1,1,1,1,-1, 1,1,-1,1,1, 1,-1,-1,-1,1, 1,-1,-1,-1,1, 1,-1,-1,-1,1 ,1,-1,-1,-1,1, 1,1,-1,1,1, -1,1,1,1,-1]],
            '1' : [[-1,1,1,-1,-1, 1,-1,1,-1,-1, -1,-1,1,-1,-1, -1,-1,1,-1,-1, -1,-1,1,-1,-1, -1,-1,1,-1,-1, -1,-1,1,-1,-1, 1,1,1,1,1],
                   [-1,1,1,1,1, -1,-1,-1,1,1, -1,-1,-1,1,1, -1,-1,-1,1,1, -1,-1,-1,1,1, -1,-1,-1,1,1, -1,-1,-1,1,1, -1,-1,-1,1,1],
                   [-1,1,1,1,1, -1,1,1,1,1, -1,1,1,1,1, -1,1,1,1,1, -1,1,1,1,1, -1,1,1,1,1, -1,1,1,1,1, -1,1,1,1,1]],
            '2' : [[1,1,1,1,-1, 1,-1,-1,1,1, -1,-1,-1,-1,1, -1,-1,-1,1,1, -1,-1,-1,1,-1, -1,-1,1,-1,-1, 1,1,-1,-1,-1, 1,1,1,1,1],
                   [-1,1,1,1,-1,  1,-1,-1,1,-1, -1,-1,-1,-1,1, -1,-1,-1,-1,1, -1,-1,-1,1,-1, -1,-1,1,-1,-1, -1,1,-1,-1,-1, 1,1,1,1,1],
                   [-1,1,1,1,-1, 1,-1,-1,1,-1, -1,-1,-1,1,-1, -1,-1,-1,1,-1, -1,-1,1,-1,-1, -1,-1,1,-1,-1, -1,1,-1,-1,-1, 1,1,1,1,1]],
            '3' : [[1,1,1,1,-1, -1,-1,-1,-1,1, -1,-1,-1,-1,1, -1,-1,1,1,-1, -1,-1,-1,1,1, -1,-1,-1,-1,1, -1,-1,-1,-1,1, 1,1,1,1,-1]],
            '4' : [[-1,-1,-1,1,-1, -1,-1, 1,1,-1, -1,1, -1,1,-1, -1,1,-1,1,-1, 1,-1,-1,1,-1, 1,1,1,1,1, -1,-1,-1,1,-1, -1,-1,-1,1,-1]],
            '5' : [[1,1,1,1,1, 1,-1,-1,-1,-1, 1,-1,-1,-1,-1, 1,1,1,1,-1, -1,-1,-1,1,1, -1,-1,-1,-1,1, 1,-1,-1,-1,1, 1,1,1,1,-1]],
            '6' : [[-1,1,1,1,1, -1,1,-1,-1,-1, 1,-1,-1,-1,-1, 1,1,1,1,-1, 1,-1,-1,-1,1, 1,-1,-1,-1,1, 1,1,-1,-1,1, -1,1,1,1,-1]],
            '7' : [[1,1,1,1,1, -1,-1,-1,-1,1, -1,-1,-1,1,-1, -1,-1,-1,1,-1, -1,-1,1,1,-1, -1,-1,1,-1,-1, -1,-1,1,-1,-1, -1,1,-1,-1,-1]],
            '8' : [[-1,1,1,1,-1, 1,-1,-1,-1,1, 1,-1,-1,-1,1, -1,1,1,1,-1, 1,1,-1,1,1, 1,-1,-1,-1,1, 1,-1,-1,-1,1, -1,1,1,1,-1]],
            '9' : [[-1,1,1,1,-1, 1,-1,-1,1,1, 1,-1,-1,-1,1, 1,-1,-1,-1,1, -1,1,1,1,1, -1,-1,-1,-1,1, -1,-1,-1,1,-1, 1,1,1,1,-1]]
        };

        var percentMatchedWithAllNumbers = {};

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

                percentageMatched = matchedPixel/totalPixel * 100;
                percentageMatchedArray.push(percentageMatched);
            }

            percentageMatchedArray.sort(function(a,b){return b-a});  
            percentMatchedWithAllNumbers[number] = percentageMatchedArray[0];
        }
        
        console.log('matched percentage :',percentMatchedWithAllNumbers);
        return percentMatchedWithAllNumbers;
    }

}