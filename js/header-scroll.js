const header = document.querySelector(".menu-nav");
// const scrollUp = "scroll-up";
// const scrollDown = "scroll-down";
// let lastScroll = 0;
const body = document.body;


// window.addEventListener("scroll", () => {
//   const currentScroll = window.pageYOffset;
//   if (currentScroll == 0) {
//     header.classList.remove(scrollUp);
//     return;
//   }

//   if (currentScroll > lastScroll ) {
//     // down
//     header.classList.remove(scrollUp);
//     header.classList.add(scrollDown);
//   } else if (currentScroll < lastScroll) {
//     // up
//     header.classList.remove(scrollDown);
//     header.classList.add(scrollUp);
//   }
//   lastScroll = currentScroll;
// });

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  if (scrollPos > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  };
  if (scrollPos > 100) {
    arrow.style.opacity = '0';
  
  } else {
    arrow.style.opacity = '1';
  }
});