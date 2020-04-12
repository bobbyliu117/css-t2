// smooth scroll
$('header a, .btn').on('click', function(e){
  if(this.hash !== '') {
    event.preventDefault();
    const hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top -100
    }, 600)
  }
});

window.addEventListener('scroll', function(){
  this.document.querySelector('header .overlay').style.opacity = window.scrollY>65?0.6:1;
});