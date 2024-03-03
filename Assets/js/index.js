const container = document.querySelector('.ab-container');
document.querySelector('.ab-slider').addEventListener('input', (e) => {
  container.style.setProperty('--position', `${e.target.value}%`);
})

// 
const container1 = document.querySelector('.ab1-container');
document.querySelector('.ab1-slider').addEventListener('input', (e) => {
  container1.style.setProperty('--position', `${e.target.value}%`);
})

// rivew slider 

let currentSlide = 0;
    const slides = document.querySelectorAll('.testimonial-slide');

    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }
      });
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    setInterval(nextSlide, 3000);



    