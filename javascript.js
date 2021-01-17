var myCarousel = document.querySelector('carousel-inner')
var carousel = new bootstrap.Carousel(carousel-inner, {
  interval: 5,
})

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
  }
}
