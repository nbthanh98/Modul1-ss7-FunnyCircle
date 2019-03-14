const WIDTH = 1000;
const HEIGHT = 1000;

function Circle(x, y, radius){
    this.x = x;
    this.y = y;
    this.radius = radius;
}


// ham random 1 so torng khoang 0 -255
function getRandomNumber(){
    return Math.floor( Math.random() * 255 )
}

// ham random mau 

function getRadomColor(){
    let red = getRandomNumber();
    let green = getRandomNumber();
    let blue = getRandomNumber();

    return "rgb(" + red + "," + green + ','  + blue + ")";
}


// ham tao 1 hinh tron
function creatCircle(){
    let pen = document.getElementById("myCanvas").getContext("2d");
    let radius = Math.floor( Math.random() * 100);

    let x = Math.floor(Math.random() * 1600);
    let y = Math.floor(Math.random() * 1600);

    let circle = new Circle( x, y, radius);
    let color = getRadomColor();
    pen.beginPath();
    pen.arc( circle.x, circle.y, circle.radius, 0, 2*Math.PI);
    pen.fillStyle = color;
    pen.fill();
}

function creatManyBalls(){
    for( let i = 0; i< 200; i++){
        creatCircle();
    }
}
creatManyBalls();
