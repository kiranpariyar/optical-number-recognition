var mainCanvas = document.getElementById('main-canvas'); 
var context = mainCanvas.getContext('2d');  
var uploadImage = document.getElementById('upload-image');
var recognizeNumber = document.getElementById('recognize');
var drawImage = document.getElementById('draw-image');
var drawFlag = false;

uploadImage.addEventListener('change', loadImage, false);
recognizeNumber.addEventListener('click', recognize, false);
drawImage.addEventListener('click', drawWithHand, false);


function loadImage() {
        
    var img = new Image(); 
    var imageWidth;
    var imageHeight;
    var imageFile = document.getElementById('upload-image').files[0];
    var url = window.URL || window.webkitURL;
    var src = url.createObjectURL(imageFile);
    img.src = src;
    var imageData;
    drawFlag = false;

    img.onload = function() {
        console.log('image loaded');     
        context.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
        imageWidth = img.naturalWidth;
        imageHeight = img.naturalHeight;        
        context.drawImage(img, 0, 0); 
        imageData = context.getImageData(0,0,imageWidth,imageHeight);
        
        // checking if images size is greater than canvas width
        if(imageHeight > mainCanvas.height || imageWidth > mainCanvas.width){ 

            context.drawImage(img,0,0,imageWidth,imageHeight,0,0,mainCanvas.width,mainCanvas.height);
            var newCanvas = document.createElement('canvas');
            var newContext = newCanvas.getContext('2d');
            newCanvas.width = imageWidth;
            newCanvas.height = imageHeight;
            newContext.drawImage(img,0,0);
            imageData = newContext.getImageData(0,0,imageWidth,imageHeight);
            recognize(imageData);

        }else{

            imageData = context.getImageData(0,0,imageWidth,imageHeight);
            recognize(imageData);
        }
        
    }
}

function drawWithHand(){
    context.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
    context.fillStyle = 'white';
    context.fillRect(0,0,mainCanvas.width, mainCanvas.height);

    drawFlag = true;
    console.log('called');
    var mousedown = false;

    mainCanvas.onmousedown = function() {
        mousedown = true;
    };

    mainCanvas.onmouseup = function() {
        mousedown = false;
    }


    var coordArray = [];
    mainCanvas.onmousemove = function() {
        if(mousedown && drawFlag){  
            var x = event.pageX - mainCanvas.offsetLeft;
            var y = event.pageY - mainCanvas.offsetTop;
            context.fillStyle = 'black';
            coordArray.push([x,y]);
            context.fillRect(x,y,15,15);
        }
    }

    mainCanvas.onmouseout = function(){
        mousedown = false;
    }
}


function recognize(imageData) {

    var numberRecognizer = new NumberRecognizer();
    var recognizedNumber;
    var infoDiv = document.getElementsByClassName('recognized-number')[0];

    if(drawFlag == true){
        imageData = context.getImageData(0,0,mainCanvas.width,mainCanvas.height);
    }

    recognizedNumber = numberRecognizer.recognizeNumber(imageData);
    infoDiv.innerHTML = recognizedNumber;
}
