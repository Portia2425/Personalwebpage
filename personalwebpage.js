// scrollable navbar
let previousPosition = window.pageYOffset;
window.onscroll = function() {
  let currentPosition = window.pageYOffset;
  
  if (previousPosition > currentPosition) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-200px";
  }
  previousPosition = currentPosition;
} 

// contact us modal
function modalOpen() {
  document.querySelector('.contactUs').style.display = 'flex';
};

function modalClose() {
  document.querySelector('.contactUs').style.display = 'none';
}

// new zealand image rollover
let images = ["img/nz_2.png", "img/nz_3.png", "img/nz_4.png", "img/nz_5.png"] 
let i = 0;

function rollover (id_image, sec) {
  let image = document.getElementById(id_image);
  image.src = images[i];
  i++;

  if (i >= images.length) {
    i = 0;
  } 

  setTimeout("rollover('" + id_image + "'," + sec + ");", sec);
}

rollover("image1",2000);


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

// contact form validation
function validate() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let error_message_name = document.getElementById("error_message_name");
  let error_message_email = document.getElementById("error_message_email");
  let error_message_message = document.getElementById("error_message_message");
  
  let text;
  
  if(name.length < 3){
    text = "Please enter valid name";
    error_message_name.innerHTML = text;
    document.getElementById("name").style.borderColor = "red";
    return false;
  } else {
    error_message_name.innerHTML = ""
    document.getElementById("name").style.borderColor = "white";
  };

  if(email.indexOf("@") === -1 || email.length < 5){
    text = "Please enter valid email";
    error_message_email.innerHTML = text;
    document.getElementById("email").style.borderColor = "red";
    return false;
  } else {
    error_message_email.innerHTML = ""
    document.getElementById("email").style.borderColor = "white";
  };

  if(message.length <= 30){
    text = "Please enter more than 30 characters";
    error_message_message.innerHTML = text;
    document.getElementById("message").style.borderColor = "red";
    return false;
  } else {
    error_message_message.innerHTML = ""
    document.getElementById("message").style.borderColor = "white";
  };

  alert("Form Submitted Successfully!");
  return true;
};

