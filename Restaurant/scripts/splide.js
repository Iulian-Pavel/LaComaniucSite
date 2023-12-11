let browserWidth = window.innerWidth;
let carouselWidth;

if(browserWidth < 1000) {
    carouselWidth = '100vw';
} else {
    carouselWidth = '50vw';
}

new Splide("#image-carousel", {
    width: carouselWidth,
    height: "60vh",
  }).mount();