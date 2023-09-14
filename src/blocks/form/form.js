/* eslint-disable unicorn/prevent-abbreviations */
import $ from 'jquery'
import 'parsleyjs'

export default function form() {
  for (const form of document.querySelectorAll('.form')) {
    form.addEventListener('submit', (event) => event.preventDefault())
    $(form).parsley().on('form:success', function () {
      const activePopup = document.querySelector('.popup.active')
      if (activePopup) window.closePopup(activePopup.id)

      const thxPopup = form.dataset.thxPopup
      if (thxPopup) window.openPopup(thxPopup)
    })
  }
}
