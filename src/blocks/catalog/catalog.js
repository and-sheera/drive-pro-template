import $ from 'jquery'

export default function catalog() {
  const filter = document.querySelector('.catalog-filter')
  if (filter) {
    for (const name of document.querySelectorAll('.catalog-filter__name')) {
      name.addEventListener('click', () => {
        name.classList.toggle('active')
        const section = name.closest('.catalog-filter__section')
        if (section) $(section).find('.catalog-filter__dropdown').slideToggle(300)
      })
    }

    const title = filter.querySelector('.catalog-filter__title')
    const main = filter.querySelector('.catalog-filter__main')
    if (title && main) {
      title.addEventListener('click', function () {
        if (window.innerWidth <= 1200 && window.innerWidth >= 744) {
          filter.classList.toggle('open')
          $(main).slideToggle()
        }
      })
    }

    const popupButton = filter.querySelector('.catalog-filter__button')
    if (popupButton) {
      popupButton.addEventListener('click', function () {
        filter.classList.add('open')
        document.body.style.overflow = 'hidden'
      })
    }
    const popupCloseButton = filter.querySelector('.catalog-filter__close')
    if (popupCloseButton) {
      popupCloseButton.addEventListener('click', function () {
        filter.classList.remove('open')
        document.body.style.overflow = ''
      })
    }

    const submitButton = filter.querySelector('.catalog-filter__ui-button')
    if (submitButton) {
      submitButton.addEventListener('click', function () {
        filter.classList.remove('open')
        if (window.innerWidth <= 1200 && window.innerWidth >= 744 && main) $(main).slideUp()
        document.body.style.overflow = ''
      })
    }
  }
}
