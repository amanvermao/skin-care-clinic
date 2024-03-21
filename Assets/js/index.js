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



    // responsive sidebar js


    function showmodal() {
      document.querySelector(".body-overlay").classList.add("showoverlay");
      document.querySelector(".details").classList.add("showdetails");
    }
    function closemodal() {
      document.querySelector(".body-overlay").classList.remove("showoverlay");
      document.querySelector(".details").classList.remove("showdetails");
    }









    

// fade scroll

window.addEventListener('scroll', reveal);

function reveal() {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (boxTop < windowHeight * 0.75) {
      box.classList.add('visible');
    } else {
      box.classList.remove('visible');
    }
  });
}

// right fade on scroll

window.addEventListener('scroll', reveal1);

function reveal1() {
  const boxes = document.querySelectorAll('.box1');
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (boxTop < windowHeight * 0.95) {
      box.classList.add('visible1');
    } else {
      box.classList.remove('visible1');
    }
  });
}
// left fade

window.addEventListener('scroll', reveal2);

function reveal2() {
  const boxes = document.querySelectorAll('.box2');
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (boxTop < windowHeight * 0.75) {
      box.classList.add('visible2');
    } else {
      box.classList.remove('visible2');
    }
  });
}

// 
window.addEventListener('scroll', reveal3);

function reveal3() {
  const boxes = document.querySelectorAll('.box3');
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (boxTop < windowHeight * 0.75) {
      box.classList.add('visible3');
    } else {
      box.classList.remove('visible3');
    }
  });
}
// 
window.addEventListener('scroll', reveal4);

function reveal4() {
  const boxes = document.querySelectorAll('.box4');
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (boxTop < windowHeight * 0.75) {
      box.classList.add('visible4');
    } else {
      box.classList.remove('visible4');
    }
  });
}

// Animate on load left
window.addEventListener('DOMContentLoaded', () => {
  revealOnLoadLeft();
});

function revealOnLoadLeft() {
  const customBoxes = document.querySelectorAll('.custom-box');
  customBoxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (boxTop < windowHeight * 0.75) {
      box.classList.add('visible-box');
    } else {
      box.classList.remove('visible-box');
    }
  });
}

// Animate on load right
window.addEventListener('DOMContentLoaded', () => {
  revealOnLoadRight();
});

function revealOnLoadRight() {
  const rightBoxes = document.querySelectorAll('.right-box');
  rightBoxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (boxTop < windowHeight * 0.75) {
      box.classList.add('visible-right');
    } else {
      box.classList.remove('visible-right');
    }
  });
}



// dillay in hinding subitems
const navItems = document.querySelectorAll('.nav-items li');

navItems.forEach(navItem => {
  navItem.addEventListener('mouseenter', () => {
    const submenue = navItem.querySelector('.submenue');
    submenue.style.display = 'block';
  });

  navItem.addEventListener('mouseleave', () => {
    const submenues = navItem.querySelectorAll('.submenue');
    submenues.forEach(submenue => {
      const delayTimeout = setTimeout(() => {
        submenue.style.display = 'none';
      }, 500); // Delay of 500 milliseconds

      navItem.addEventListener('mouseenter', () => {
        clearTimeout(delayTimeout);
      });
    });
  });
});




