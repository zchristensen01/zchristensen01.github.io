function slideImage() {
    var image = document.getElementById('sliding-image');
    var text = document.getElementById('sliding-text');
    var scrollPosition = window.scrollY;

    var scrollThresholdImg = 600;
    var scrollThresholdText = 1100;


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