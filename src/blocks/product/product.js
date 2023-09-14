import Swiper from 'swiper/bundle'

export default function product() {
  const thumbsSlider = new Swiper('.product__thumbs', {
    spaceBetween: 10,
    slidesPerView: 3,
    breakpoints: {
      1201: {
        slidesPerView: 4
      }
    }
  })
  const mainSlider = new Swiper('.product__slider', {
    slidesPerView: 1.2,
    spaceBetween: 10,
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.product__slider .product__btn--next',
      prevEl: '.product__slider .product__btn--prev'
    },
    thumbs: {
      swiper: thumbsSlider
    },
    breakpoints: {
      744: {
        slidesPerView: 1
      }
    }
  })
}
