
var P= ["sounds/n1.mp3","sounds/n2.mp3","sounds/n3.mp3","sounds/n4.mp3","sounds/n5.mp3","=sounds/n3.mp3"]
var faces=["image/image1.png","image/image2.png","image/image3.png","image/image4.png"]
function prout()
{
var randomIndex = Math.floor(Math.random() * P.length);
var randomValue = P[randomIndex];
 const audio=new Audio(randomValue);
    audio.play();
}
function changeimage()
{
    var image = document.getElementById('cat');
    var randomIndex = Math.floor(Math.random() * faces.length);
    image.src = faces[randomIndex];
}

function bigImg(x) {
    x.style.height = "510px";
    x.style.width = "510px";
  } 
    

  function normalImg(x) {
    x.style.height = "500px";
    x.style.width = "500px";
  }
function cachertitre()
{
    var pageTitle = document.getElementById('h1');
    pageTitle.classList.add('hidden');
}

function birthday()
{
 const audio=new Audio("sounds/birthday.mp3");
    audio.play();
}
function birthdayimg()
{
    var image=document.getElementById('cat')
    image.src='image/birthday.png'
}