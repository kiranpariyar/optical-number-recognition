var uploadImage = document.getElementById("upload-image");
uploadImage.addEventListener('change', loadImage, false);
  
myCanvas = document.getElementById('myCanvas'); 
context = myCanvas.getContext('2d');  

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
        var numberRecognizer = new NumberRecognizer();
        var recognizedNumber = numberRecognizer.recognizeNumber(context,imageWidth,imageHeight);
        var infoDiv = document.getElementsByClassName('info-div')[0];
        infoDiv.innerHTML = " Number is: " + recognizedNumber;
    }
}

var drawCanvas = document.getElementById("drawing");
var drawContext = drawCanvas.getContext("2d");

var drawImage = document.getElementById("draw-image");
var drawFlag = false;
drawImage.addEventListener('click', draw, false);



function draw(){
    drawFlag = true;
    console.log('called');
    drawContext.clearRect(0, 0, drawCanvas.width, drawCanvas.height);
    console.log(drawContext);
}

var mousedown = false;

drawCanvas.onmousedown = function(){
    mousedown = true;
};

drawCanvas.onmouseup = function(){
    mousedown = false;
}

drawCanvas.onmousemove = function(){
    if(mousedown && drawFlag){
        var x = event.pageX - drawCanvas.offsetLeft;
        var y = event.pageY - drawCanvas.offsetTop;
        drawContext.fillStyle = 'black';
        drawContext.fillRect(x,y,10,10);
    }
}

var recognizeNumber = document.getElementById("recognize");
recognizeNumber.addEventListener('click', recognize, false);

function recognize() {

    var numberRecognizer = new NumberRecognizer();
    console.log('here is context',drawContext)
    var recognizedNumber = numberRecognizer.recognizeNumber(drawContext,drawCanvas.width,drawCanvas.height);
    var infoDiv = document.getElementsByClassName('info-div')[0];
    infoDiv.innerHTML = " Number is: " + recognizedNumber;
}
