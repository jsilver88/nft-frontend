const hamburger = document.querySelector('.navbar__hamburger')
const navLinks = document.querySelector('.navbar__list')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  navLinks.classList.toggle('active')
})

// Explore Swiper
const swiper = new Swiper('.swiper', {
  loop: true,
  loopFillGroupWithBlank: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    250: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
})
