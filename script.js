//write your code here
function diwan(){
  var txt;
var r = confirm("Do you really want to see the favourite place?????");
if (r == true) {
  alert('Bali'); 
} else {
  txt = "You pressed Cancel!";
}
}




function colors(){
  
  var dd1 = document.getElementById("h1")
  var dd1 = document.getElementById("h2")
  
  h1.className = "class_1";
  h2.className = "class_2";
}


function change_text(){
  
  var dd1 = document.getElementById("daru1");
  var dd1 = document.getElementById("daru2");
  
  daru1.innerHTML = "Mojito_Burst";
  daru2.innerHTML = "BlueBerry_Hard";
}


function change_background(){
  var d1 = document.getElementById("HD");
  HD.style.background ="red";
}

function color_picker_tool(){
   var dd1 = document.getElementById("HD");
  var colorinput = document.getElementById("clr");
  var color = colorinput.value;
  dd1.style.backgroundColor = color;
}
function doSquare() {
  var dd1 = document.getElementById("HD");
  var sizeinput = document.getElementById("sldr");
  var size = sizeinput.value;
  var ctx = dd1.getContext("2d");
  ctx.clearRect(0,0,dd1.width,dd1.height);
  ctx.fillStyle = "yellow";
  ctx.fillRect(10,10,size,size);
}




function upload(){
  var fileinput = document.getElementById("finput");
  var filename = fileinput.value;
  alert("uploaded "+ filename);
}

function uploads(){
  var imgcanvas = document.getElementById("can");
  var fileinput = document.getElementById("finputs");
  var image = new SimpleImage(fileinput);
  image.drawTo(imgcanvas);
}
