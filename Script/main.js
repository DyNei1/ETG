// Get the modal/popup from html
var popup = document.getElementById("overlap");

// Get the image and insert it inside the modal - use its "alt" text as a caption
// I used this website to help me out with the js that is presented here https://www.geeksforgeeks.org/how-to-make-the-images-bigger-when-clicked/
// I had look over some w3school lessons aswell to get to know javascript more

var img = document.getElementById("topimg");
//takes any picture in picture1
var popupImg = document.getElementById("picture1");
//takes anything written in bottomtxt id
var captionText = document.getElementById("bottomtxt");
img.onclick = function(){
  popup.style.display = "block";
  popupImg.src = this.src;
  captionText.innerHTML = this.alt;
}
var img = document.getElementById("midimg");
img.onclick = function(){
  popup.style.display = "block";
  popupImg.src = this.src;
  captionText.innerHTML = this.alt;
}
var img = document.getElementById("botimg");
img.onclick = function(){
  popup.style.display = "block";
  popupImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// get the element (<span>) for closing popup
var span = document.getElementsByClassName("exit")[0];

// script for X button to close the popup
span.onclick = function() { 
  popup.style.display = "none";
}
