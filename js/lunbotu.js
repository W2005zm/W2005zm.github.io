document.addEventListener('DOMContentLoaded', function() {
    
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dotsContainer = document.querySelector('.dots-container');
    
    let currentIndex = 0;
    let slideInterval;

    
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    
    function updateDots() {
        document.querySelectorAll('.dot').forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    
    function goToSlide(index) {
        
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        
        slides[index].classList.add('active');
        currentIndex = index;
        updateDots();
    }

    
    function nextSlide() {
        const nextIndex = (currentIndex + 1) % slides.length;
        goToSlide(nextIndex);
    }

   
    function prevSlide() {
        const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
        goToSlide(prevIndex);
    }

    
    function startSlideInterval() {
        slideInterval = setInterval(nextSlide, 3000); // 每2秒切换一次
    }

  
    function stopSlideInterval() {
        clearInterval(slideInterval);
    }

    
    goToSlide(0);
    startSlideInterval();

    
    prevBtn.addEventListener('click', () => {
        stopSlideInterval();
        prevSlide();
        startSlideInterval(); 
    });

    nextBtn.addEventListener('click', () => {
        stopSlideInterval();
        nextSlide();
        startSlideInterval(); 
    });

    
    document.querySelector('.banner').addEventListener('mouseenter', stopSlideInterval);
    document.querySelector('.banner').addEventListener('mouseleave', startSlideInterval);
});