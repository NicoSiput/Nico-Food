import Toastify from 'toastify-js';

const ToastInitiator = {
  init(options) {
    this._options = options;
    this._showMessage();
  },

  _showMessage() {
    Toastify(this._options).showToast();
  },
};

export default ToastInitiator;
