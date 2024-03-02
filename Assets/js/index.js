var divisor = document.getElementById("divisor"),
handle = document.getElementById("handle"),
slider = document.getElementById("slider");

function moveDivisor() {
handle.style.left = slider.value+"%";
divisor.style.width = slider.value+"%";
}

window.onload = function() {
moveDivisor();
};

// 
var divisor1 = document.getElementById("divisor1"),
handle1 = document.getElementById("handle1"),
slider1 = document.getElementById("slider1");

function moveDivisor1() {
handle1.style.left = slider1.value+"%";
divisor1.style.width = slider1.value+"%";
}

window.onload = function() {
    moveDivisor();
    moveDivisor1(); 
};

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



    