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

// accordian faq section
// quesiton 1 button
function faqButton(one) {
  let x = document.getElementById(one);
  if (x.style.display === "none") {
    x.style.display = "block";
  };
} 

// quesiton 2 button
function faqButton(two) {
  let x = document.getElementById(two);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} 

// quesiton 3 button
function faqButton(three) {
  let x = document.getElementById(three);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} 

// quesiton 4 button
function faqButton(four) {
  let x = document.getElementById(four);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} 
