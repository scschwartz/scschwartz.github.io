var p1 = new Image();
var p2 = new Image();
var p3 = new Image();
var p4 = new Image();
var p5 = new Image();
var p6 = new Image();

p1.src="pic_1.jpg"
p6.src = "duomo.jpg";
p2.src ="fountain.jpg";
p3.src = "france.jpg";
p4.src ="green.jpg";
p5.src = "love.jpg";


var imgArray = new Array(p1,p2,p3,p4,p5,p6);

var counter =0;
var end = imgArray.length-1;

function myfunction(){
    alert("Hello! I am an alert box!");
}

function scroll_forward(){
    if (counter == end){
        counter = 0;
    }
    else{
        counter++;
    }
    document.pic_1.src = imgArray[counter].src;
}

function scroll_backward(){
    if (counter == 0){
         counter = end;
    }
    else{
        counter--;

    }
    document.pic_1.src = imgArray[counter].src;
}






