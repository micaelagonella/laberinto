let image = document.getElementsByClassName('parallax');

function parallaxImagenesCard(){
  for (let i = 0; i < image.length; i++) {
    if(window.matchMedia("(min-width: 0px) and (max-width: 992px)").matches){
    }else if (window.matchMedia("(min-width: 992px)").matches) {
      image[i].classList.add("thumbnail");
      new simpleParallax(image[i], {
        overflow: true,
        scale: 1.5,
        delay: .6,
        transition: 'cubic-bezier(0,0,0,1)'
      })
    }else {
      image[i].classList.remove("thumbnail");
    }
  }   
};
parallaxImagenesCard();


