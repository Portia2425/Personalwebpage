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

// contact us modal
function popupOpen() {
  document.querySelector('.contactUs').style.display = 'flex';
};

function popupClose() {
  document.querySelector('.contactUs').style.display = 'none';
}


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

// contact form validation
function validate(){
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let error_message = document.getElementById("error_message");
  
  let text;
  
  if(name.length < 3){
    text = "Please enter valid name";
    error_message.innerHTML = text;
    return false;
  };

  if(email.indexOf("@") === -1 || email.length < 5){
    text = "Please enter valid email";
    error_message.innerHTML = text;
    return false;
  };

  if(message.length <= 30){
    text = "Please enter more than 30 characters";
    error_message.innerHTML = text;
    return false;
  };

  alert("Form Submitted Successfully!");
  document.querySelector('.contactUs').style.display = 'none';
  return true;
};

