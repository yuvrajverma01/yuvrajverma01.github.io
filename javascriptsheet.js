

// ####################################################   Slide Show   #################################################### //


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


// ####################################################   Form Validations   #################################################### //

function successfull() {
  var fn, ln, cno, cv;
  fn = document.getElementById('fname').value;
  ln = document.getElementById('lname').value;
  cno = document.getElementById('cardno').value;
  cv = document.getElementById('cvv').value;
  var flag = 0;
  
  if (fn.length >3 && fn.length<20) {
      if (ln.length >3 && ln.length<20) {
          if (cno.length==12 && cv.length==3) {
              alert("Order Recieved Successfully");
          } else {
              alert("Please Fill The Order Properly");
          }
      } else {
              alert("Please Fill The Order Properly");
          }
   } else {
              alert("Please Fill The Order Properly");
          }
  }

// ####################################################################################################################################

function ordernow() {
  alert("Select The Product From Above.")
  return false;
}