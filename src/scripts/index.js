import 'regenerator-runtime';
import '../styles/myconfig.css';
import '../styles/main.css';
import App from './views/app';
import './views/parts/header-section';
import 'toastify-js/src/toastify.css';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
