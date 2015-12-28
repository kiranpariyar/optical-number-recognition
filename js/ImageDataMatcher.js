function ImageDataMatcher() {

    var numbers;

    this.setNumbers = function(templateData){
        numbers = templateData;
    }


    this.getPercentageMatched = function(dataNumber,sourceData) {
        
        var numbers = { 
            '0' : [[-1,1,1,1,-1, 1,1,-1,1,1, 1,-1,-1,-1,1, 1,-1,-1,-1,1, 1,-1,-1,-1,1 ,1,-1,-1,-1,1, 1,1,-1,1,1, -1,1,1,1,-1]],
            '1' : [[-1,1,1,-1,-1, 1,-1,1,-1,-1, -1,-1,1,-1,-1, -1,-1,1,-1,-1, -1,-1,1,-1,-1, -1,-1,1,-1,-1, -1,-1,1,-1,-1, 1,1,1,1,1],
                   [-1,1,1,1,1, -1,-1,-1,1,1, -1,-1,-1,1,1, -1,-1,-1,1,1, -1,-1,-1,1,1, -1,-1,-1,1,1, -1,-1,-1,1,1, -1,-1,-1,1,1]],
            '2' : [[1,1,1,1,-1, 1,-1,-1,1,1, -1,-1,-1,-1,1, -1,-1,-1,1,1, -1,-1,-1,1,-1, -1,-1,1,-1,-1, 1,1,-1,-1,-1, 1,1,1,1,1],
                   [-1,1,1,1,-1,  1,-1,-1,1,-1, -1,-1,-1,-1,1, -1,-1,-1,-1,1, -1,-1,-1,1,-1, -1,-1,1,-1,-1, -1,1,-1,-1,-1, 1,1,1,1,1]],
            '3' : [[1,1,1,1,-1, -1,-1,-1,-1,1, -1,-1,-1,-1,1, -1,-1,1,1,-1, -1,-1,-1,1,1, -1,-1,-1,-1,1, -1,-1,-1,-1,1, 1,1,1,1,-1]],
            '4' : [[-1,-1,-1,1,-1, -1,-1, 1,1,-1, -1,1, -1,1,-1, -1,1,-1,1,-1, 1,-1,-1,1,-1, 1,1,1,1,1, -1,-1,-1,1,-1, -1,-1,-1,1,-1]],
            '5' : [[1,1,1,1,1, 1,-1,-1,-1,-1, 1,-1,-1,-1,-1, 1,1,1,1,-1, -1,-1,-1,1,1, -1,-1,-1,-1,1, 1,-1,-1,-1,1, 1,1,1,1,-1]],
            '6' : [[-1,1,1,1,1, -1,1,-1,-1,-1, 1,-1,-1,-1,-1, 1,1,1,1,-1, 1,-1,-1,-1,1, 1,-1,-1,-1,1, 1,1,-1,-1,1, -1,1,1,1,-1]],
            '7' : [[1,1,1,1,1, -1,-1,-1,-1,1, -1,-1,-1,1,-1, -1,-1,-1,1,-1, -1,-1,1,1,-1, -1,-1,1,-1,-1, -1,-1,1,-1,-1, -1,1,-1,-1,-1]],
            '8' : [[-1,1,1,1,-1, 1,-1,-1,-1,1, 1,-1,-1,-1,1, -1,1,1,1,-1, 1,1,-1,1,1, 1,-1,-1,-1,1, 1,-1,-1,-1,1, -1,1,1,1,-1]],
            '9' : [[-1,1,1,1,-1, 1,-1,-1,1,1, 1,-1,-1,-1,1, 1,-1,-1,-1,1, -1,1,1,1,1, -1,-1,-1,-1,1, -1,-1,-1,1,-1, 1,1,1,1,-1]]
        };

        var totalPixel = 5*8;
        var percentageMatchedObject = {};

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
            percentageMatchedObject[number] = percentageMatchedArray[0];
        }
        
        console.log('matched percentage :',percentageMatchedObject);
        return percentageMatchedObject;
    }

}