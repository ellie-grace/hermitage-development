
  [].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
	img.setAttribute('src', img.getAttribute('data-src'));
	img.onload = function() {
	  img.removeAttribute('data-src');
	};
  });

 

const carouselContainer = document.querySelector('.carousel-container');
const listImageArea = carouselContainer.querySelector('.next-list');
const listOfImages = listImageArea.querySelectorAll('img');
const currentImage = carouselContainer.querySelector('.current-image');
const arrowLeft = carouselContainer.querySelector('.arrow-left');
const arrowRight = carouselContainer.querySelector('.arrow-right');

function styleList() {
    if (listImageArea.scrollWidth == listImageArea.offsetWidth){
        listImageArea.style.justifyContent = 'center'
    } else {
        listImageArea.style.justifyContent = 'flex-start'
    }

};

function goToRight() {
    var current = listImageArea.querySelector('.current-image-list');
    current.parentElement.nextElementSibling.children[0].classList.add('current-image-list');
    current.classList.remove('current-image-list');
    current = listImageArea.querySelector('.current-image-list');
    listImageArea.scrollLeft = current.offsetLeft;
    currentImage.attributes.src.value = current.attributes.src.value;
    

    currentImage.classList.add('fadeIn');
    setTimeout(function () {
        currentImage.classList.remove('fadeIn');
    }, 700);
};

function goToLeft() {
    var current = listImageArea.querySelector('.current-image-list');
    current.parentElement.previousElementSibling.children[0].classList.add('current-image-list');
    current.classList.remove('current-image-list');
    current = listImageArea.querySelector('.current-image-list');
    listImageArea.scrollLeft = current.offsetLeft;
    currentImage.attributes.src.value = current.attributes.src.value;
    currentImage.classList.add('fadeIn');
    setTimeout(function () {
        currentImage.classList.remove('fadeIn');
    }, 700);
};

function changeCurrentImage (newImage) {
    currentImage.classList.add('fadeIn');
    setTimeout(function () {
        currentImage.classList.remove('fadeIn');
    }, 300);
    currentImage.attributes.src.value = this.attributes.src.value;
    //listOfImages.forEach(image => image.classList.remove('current-image-list'));
    listOfImages.forEach(function (image) {
        image.classList.remove('current-image-list');
    })
    this.classList.add('current-image-list');
}

styleList();

arrowLeft.addEventListener('click', goToLeft);
arrowRight.addEventListener('click', goToRight);

window.addEventListener('resize', function (e) {
    styleList();
});

(function () {
    if ( typeof NodeList.prototype.forEach === "function" ) return false;
    NodeList.prototype.forEach = Array.prototype.forEach;
})();

//listOfImages.forEach(image => image.addEventListener('click', changeCurrentImage));
listOfImages.forEach(function(image) {
    image.addEventListener('click', changeCurrentImage);
});
 

