var imageContainer = document.querySelector('.image-container');

imageContainer.addEventListener('wheel', function(event) {
    event.preventDefault();
    
    var scrollDelta = event.deltaY || event.deltaX;
    
    var scrollSpeed = 5;
    
    imageContainer.scrollLeft += scrollDelta * scrollSpeed;
}, { passive: false }); 