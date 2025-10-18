document.addEventListener("DOMContentLoaded", function() {
    
    function initializeSlider(slideClass, interval) {
        let slideIndex = 0;
        const slides = document.getElementsByClassName(slideClass);

        if (slides.length === 0) {
            return; 
        }

        function showSlides() {
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }
            slides[slideIndex - 1].style.display = "block";
            setTimeout(showSlides, interval);
        }

        showSlides();
    }

    initializeSlider("food-slide", 3000);
    initializeSlider("banya-slide", 2500);

});


