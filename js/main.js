/*
var templateDataGenerator = new TemplateDataGenerator();
var numbers = templateDataGenerator.getTemplateData();
console.log("template data :",numbers);
*/
var uploadImage = document.getElementById("upload-image");
uploadImage.addEventListener('change', loadImage, false);

var myCanvas = document.getElementById('myCanvas'); 
var context = myCanvas.getContext('2d');  

function loadImage() {
    
    var imageWidth;
    var imageHeight;
    var img = new Image(); 
    var imageFile = document.getElementById("upload-image").files[0];
    var url = window.URL || window.webkitURL;
    var src = url.createObjectURL(imageFile);
    img.src = src;

    img.onload = function() {
        console.log('loaded');
        context.clearRect(0, 0, myCanvas.width, myCanvas.height);
        context.drawImage(img, 0, 0);
        var imageWidth = img.naturalWidth;
        var imageHeight = img.naturalHeight;
        console.log("imageWidth :",imageWidth);
        console.log("imageHeight :",imageHeight);
        var imageData = context.getImageData(0,0,imageWidth,imageHeight);
        var numberRecognizer = new NumberRecognizer();
        var recognizedNumber = numberRecognizer.recognizeNumber(imageData);
        var infoDiv = document.getElementsByClassName('info-div')[0];
        infoDiv.innerHTML = " Number is: " + recognizedNumber;
    }
}

var drawImage = document.getElementById("draw-image");
drawImage.addEventListener('click', draw, false);
var drawFlag = false;


function draw(){
    context.clearRect(0, 0, myCanvas.width, myCanvas.height);
    context.fillStyle = 'white';
    context.fillRect(0,0,myCanvas.width, myCanvas.height);

    drawFlag = true;
    console.log('called');
    var mousedown = false;

    myCanvas.onmousedown = function(){
        mousedown = true;
    };

    myCanvas.onmouseup = function(){
        mousedown = false;
    }

    myCanvas.onmousemove = function(){
        if(mousedown && drawFlag){
            var x = event.pageX - myCanvas.offsetLeft;
            var y = event.pageY - myCanvas.offsetTop;
            context.fillStyle = 'black';
            context.fillRect(x,y,15,15);
        }
    }
}

var recognizeNumber = document.getElementById("recognize");
recognizeNumber.addEventListener('click', recognize, false);

function recognize() {

    var numberRecognizer = new NumberRecognizer();
    var drawingImageData = context.getImageData(0,0,myCanvas.width,myCanvas.height);
    var recognizedNumber = numberRecognizer.recognizeNumber(drawingImageData);
    var infoDiv = document.getElementsByClassName('info-div')[0];
    infoDiv.innerHTML = " Number is: " + recognizedNumber;

}
