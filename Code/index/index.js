function slideImage() {
    var image = document.getElementById('sliding-image');
    var text = document.getElementById('sliding-text');
    var scrollPosition = window.scrollY;

    var scrollThresholdImg = 900;
    var scrollThresholdText = 1300;

    if (window.innerWidth <= 900) {
        scrollThresholdImg = 300;
        scrollThresholdText = 400;
    } else if (window.innerWidth <= 900) {
        scrollThresholdImg = 600;
        scrollThresholdText = 600;
    } else {
        scrollThresholdImg = 500;
        scrollThresholdText = 700;
    }

    if (scrollPosition > scrollThresholdImg) {
        image.style.left = '50%';
    } else {
        image.style.left = '-200px'; 
    }

    if (scrollPosition > scrollThresholdText) {
        text.style.left = '50%';
    } else {
        text.style.left = '-200px';
    }
}

window.addEventListener('scroll', slideImage);