import { Controller } from '@hotwired/stimulus'
window.bootstrap = require('bootstrap')

export default class extends Controller {
  static values = {
    open: Boolean,
  }
  static domElement
  static bsModal

  initialize() {
    this.domElement = document.getElementById('cookieconsent')

    if (this.domElement) {
      this.buildModal()
      this.eventFormSubmit()
    }
  }

  connect() {
    if (this.openValue === true) {
      this.show()
    }
  }

  buildModal() {
    this.bsModal = new bootstrap.Modal(this.domElement, {
      backdrop: false,
      keyboard: false,
      focus: true,
    })
  }

  show() {
    this.bsModal.show()
  }

  eventFormSubmit() {
    document.addEventListener('cookie-consent-form-submit-successful', (e) => {
      this.bsModal.hide()
    })
  }
}
