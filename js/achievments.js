

function loop() {

  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
        element.classList.add('animate__animated','animate__bounceInDown', 'animate__delay-3s');
    } else {
        element.classList.remove('animate__animated','animate__bounceInDown', 'animate__delay-3s');
    }
  });

  scroll(loop);
}




