import '../styles/style.scss'
import 'virtual:svg-icons-register'
import 'lazysizes'
import header from '../blocks/header/header'
import catalog from '../blocks/catalog/catalog'
import product from '../blocks/product/product'
import popup from '../blocks/popup/popup'
import uiInput from '../blocks/_ui/ui-input/ui-input'
import form from '../blocks/form/form'
import map from '../blocks/map/map'
import uiAccordion from '../blocks/_ui/ui-accordion/ui-accordion'

document.addEventListener('DOMContentLoaded', function () {
  uiAccordion()
  uiInput()
  header()
  catalog()
  popup()
  product()
  form()
  map()
})
