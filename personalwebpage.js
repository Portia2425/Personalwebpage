// scrollable navbar
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
} 

// pop up form
document.getElementById('contactButton').addEventListener('click', 
function() {
  document.querySelector('.contactUs').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', 
function() {
  document.querySelector('.contactUs').style.display = 'none';
});