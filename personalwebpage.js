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

// faq section
document.querySelectorAll('.accordian__button').forEach(button => {
  button.addEventListener('click', () => {
    const accordianContent = button.nextElementSibling;

    button.classList.toggle('accordian__button--active');

    if (button.classList.contains('accordian__button--active')) {
      accordianContent.style.display = 'block'
    } else {
      accordianContent.style.display = 'none';
    }
  });
});

// new zealand image rollover
let images = new Array ("img/nz_2.png","img/nz_3.png", "img/nz_4.png", "img/nz_5.png")

let i = 0;

function rollover (image_id, millisecs) {
  let image = document.getElementById(image_id);
  image.src = images[i];
  i++;

  if (i >= images.length) {
    i = 0;
  } 

  setTimeout("rollover('" + image_id + "'," + millisecs + ");",millisecs);
}

rollover("image1",2500);

