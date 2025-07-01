var l1 = document.getElementById('l1');
var l2 = document.getElementById('l2');
var wr = document.getElementById('wr');
var lt = document.getElementById('lt');
var imgg = document.getElementById('imgg1');
var t1 = document.getElementById('t1');
var t2 = document.getElementById('t2');
var overlay = document.getElementById('overlay');

var devWidth = window.innerWidth;
var a=1;
var s=1;

function on() {
  overlay.style = "top: 0%;";
  
}
function off(){
  overlay.style = "top: 100%;";
}

if(devWidth>=460){
  alert("This webpage only works in mobile phones. Please use the mobile phone to view this webpage.");
  window.location.reload();
}
function ev() {
  if(a==1){
    l1.style.transform = "rotateX(90deg)";
  //  lt.style.top = "-100vh";
    
    l2.style.transform = "rotateX(180deg)";
    wr.style.top = "100vh";
  
    setTimeout(function() {
      lt.style.width = window.innerWidth * 0.9;
      lt.style.height = window.innerHeight * 0.9;
      lt.style.fontSize="1.3em";
    }, 100);
    a=0;
  }
  setTimeout(function() {
    imgg.style.width = "90%";
    if(s==1){
      const music = new Audio('claps.mp3');
      music.play();
      s=0;
    }
    
  }, 680);
  
}



//-- See full documentation for TypeIt at https://typeitjs.com.


  new TypeIt("#element", {
    speed: 100,  // adjust typing speed
    afterComplete: function (){
      document.getElementById("click").style.display="block";
    }

    
  })

 // edit the script below 
  .type("Dear <b>Name</b>,")
  .break()
  .pause(1000)
  .type("It's been <b>quite a while</b> ever since we met each other. ")
  .pause(1000)
  .break()
  .pause(1000)
  .type("Although it was short time, we had a <b>great time</b> together,")
  .pause(1000)
  .type(" didn't we?")
  .pause(1000)
  .break()
  .break()
  .type("Anyways, ")
  .pause(1200)
  .type("Happy Birthday to you!")
  .pause(300)
  .break()
  .type("<b> AND I WISH YOU A NICE DAY!!!</b>")
  .break()
  .break()
  .pause(1000)
  .type("Click da button below!")
  .go();