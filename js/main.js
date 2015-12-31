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
    
    var imageWidth;
    var imageHeight;
    var img = new Image(); 
    var imageFile = document.getElementById('upload-image').files[0];
    var url = window.URL || window.webkitURL;
    var src = url.createObjectURL(imageFile);
    img.src = src;

    img.onload = function() {
        console.log('image loaded');
        imageWidth = img.naturalWidth;
        imageHeight = img.naturalHeight;        
        console.log('imageWidth :',imageWidth);
        console.log('imageHeight :',imageHeight);
        context.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
        context.drawImage(img, 0, 0);
        var imageData = context.getImageData(0,0,imageWidth,imageHeight);
        var numberRecognizer = new NumberRecognizer();
        var recognizedNumber = numberRecognizer.recognizeNumber(imageData);
        var infoDiv = document.getElementsByClassName('recognized-number')[0];
        infoDiv.innerHTML = recognizedNumber;
    }
}

function drawWithHand(){
    context.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
    context.fillStyle = 'white';
    context.fillRect(0,0,mainCanvas.width, mainCanvas.height);

    drawFlag = true;
    console.log('called');
    var mousedown = false;

    mainCanvas.onmousedown = function(){
        mousedown = true;
    };

    mainCanvas.onmouseup = function(){
        mousedown = false;
    }

    mainCanvas.onmousemove = function(){
        if(mousedown && drawFlag){  
            var x = event.pageX - mainCanvas.offsetLeft;
            var y = event.pageY - mainCanvas.offsetTop;
            context.fillStyle = 'black';
            context.fillRect(x,y,15,15);
        }
    }
}

function recognize() {

    var numberRecognizer = new NumberRecognizer();
    var drawingImageData = context.getImageData(0,0,mainCanvas.width,mainCanvas.height);
    var recognizedNumber = numberRecognizer.recognizeNumber(drawingImageData);
    var infoDiv = document.getElementsByClassName('recognized-number')[0];
    infoDiv.innerHTML = recognizedNumber;

}
