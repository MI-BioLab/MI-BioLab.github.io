$(document).ready(function(){
  console.log('cio');
  $('.side-nav').sidenav();
});

particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});
