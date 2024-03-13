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

    setInterval(nextSlide, 6000);



    //  s-card animation

const sections = document.querySelectorAll('section');
const cardContainers = document.querySelectorAll('.card-container');
const options = {
  root: null,
  rootMargin: '0px 0px -100px 0px', 
  threshold: 0.01,  
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    const cardContainer = entry.target;
    const card = cardContainer.querySelector('.card');
    const cardCover = cardContainer.querySelector('.card-cover');

    if (entry.isIntersecting) {
      card.classList.add('in-view');
      cardCover.style.transform = 'translateY(100%)'; 

   
      triggerAdditionalFunction();
    } else {
      card.classList.remove('in-view');
      cardCover.style.transform = 'translateY(0)'; 
    }
  });
}, options);

cardContainers.forEach(container => {
  observer.observe(container);
});

function triggerAdditionalFunction() {

  console.log('Card is now 5% in view!'); 

}


// insta slider


let currentIndex = 0;
    const slides1 = document.querySelectorAll('.slide11');
    const totalSlides = slides1.length;

    function shiftSlides() {
      currentIndex = (currentIndex + 1) % (totalSlides - 4); // Adjust totalSlides - 2
      updateSlider();
    }

    function updateSlider() {
      const newPosition = -currentIndex * 20 + '%'; // Each slide takes up 20% of the container width
      document.querySelector('.slider11').style.transform = `translateX(${newPosition})`;
    }

    setInterval(shiftSlides, 2000); // Shift slide every 2 seconds

