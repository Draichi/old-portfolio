/*youtube*/
var youtube = document.querySelectorAll(".youtube");
for (var i=0; i<youtube.length; i++) {
  var source = "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/sddefault.jpg"
  var image = new Image();
    image.src = source;
    image.setAttribute("alt", "video thumbnail");
    image.addEventListener("load", function() {
      youtube[i].appendChild(image);
    }(i));
  youtube[i].addEventListener("click", function() {
    var iframe = document.createElement("iframe");
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed)
      this.innerHTML = "";
      this.appendChild(iframe);
  });
}
/*end youtube*/

/*modal*/
function openModal() {
  document.getElementById('myModal').style.display = "block";
}
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}
/*end modal*/

/*slides*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
}
/*end slides*/

/*service worker*/
navigator.serviceWorker.register('../sw.js')
  .then(function() {
    console.log('sw registered');
  });
/*end service worker*/