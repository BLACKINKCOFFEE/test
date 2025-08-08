document.getElementById('newsletter-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thanks for subscribing!');
  this.reset();
});

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    if (this.hash) {
      e.preventDefault();
      document.querySelector(this.hash).scrollIntoView({ behavior: 'smooth' });
    }
  });
});
