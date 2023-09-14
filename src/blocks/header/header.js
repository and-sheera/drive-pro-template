export default function header() {
  const header = document.querySelector('.header')
  const burgerButton = document.querySelector('.header__burger-button')
  if (header && burgerButton) {
    burgerButton.addEventListener('click', function () {
      header.classList.toggle('header--burger')
      header.classList.contains('header--burger') ? document.body.style.overflow = 'hidden' : document.body.style.overflow = ''
    })

    const burgerElement = header.querySelector('.header__burger')
    if (burgerElement) {
      burgerElement.addEventListener('click', function (event) {
        if (event.target === burgerElement) {
          header.classList.remove('header--burger')
          document.body.style.overflow = ''
        }
      })
    }
  }
}
