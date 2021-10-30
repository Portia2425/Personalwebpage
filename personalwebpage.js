// scrollable navbar
let prevScrollPos = window.pageYOffset;
window.onscroll = function() {
  let currentScroll = window.pageYOffset;
  if (prevScrollPos > currentScroll) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-200px";
  }
  prevScrollPos = currentScroll;
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

rollover("image1",2000);

// loop function

// contact form validation
function validation() {
  let name = getElementById("name").value;
  let email = getElementById("email").value;
  let subject = getElementById("subject").value;
  let errorMessage = getElementById("errorMessage");
  let text;

  errorMessage.style.padding = "15px";

  if (name.length < 3) {
    text = "Please enter a valid name";
    errorMessage.innerHTML = text;
    return false;
  };

  if (email.length < 3) {
    text = 'Please enter a valid email';
    errorMessage.innerHTML = text;
    return false;
  };

  if (subject.length > 3) {
    let text = 'Please enter a valid subject';
    errorMessage.innerHTML = text;
    return false;
  };

  return false;
}

