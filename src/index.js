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
navigator.serviceWorker.register('https://draichi.github.io/portfolio/sw.js')
  .then(function() {
    console.log('sw registered');
  });
/*end service worker*/

/*fade on scroll*/
var onEnterViewPort = function(entries, observer) {
  entries.forEach(function(entry) {
    // fade in when we enter the viewport
    if (entry.intersectionRatio !== 0) {
      entry.target.classList.add('in');
    }
    // fade back out when we leave the viewport
    else {
      entry.target.classList.remove('in');
    }
  })
}
var observer = new IntersectionObserver(onEnterViewPort, {});
var textHeader = document.querySelectorAll('.text-header');
for (var i = 0; i < textHeader.length; ++i) {
  observer.observe(textHeader[i]);
}
/*end fade on scroll*/

// <!-- Google Analytics -->
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-125805162-1', 'auto');
ga('send', 'pageview');
// <!-- End Google Analytics -->