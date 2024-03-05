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

// 

