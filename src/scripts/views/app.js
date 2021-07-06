/* eslint-disable no-empty-function */
import DrawerInitiator from '../utils/drawer-initiator';
import { render404Page } from '../utils/page-handler';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    try {
      console.log(navigator.onLine);
      if (!navigator.onLine) {
        this._content.innerHTML = 'OFFLINE PAGE';
      } else {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];
        this._content.innerHTML = await page.render();
        await page.afterRender();
      }
    } catch (error) {
      console.log(error);
      render404Page();
    }
  }
}

export default App;
