class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
    this._className = this.getAttribute('className') || null;
    this._placeholder = this.getAttribute('placeholder') || 'Search...';
  }

  set keyupEvent(event) {
    this._keyupEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector('#searchElement').value;
  }

  render() {
    this.innerHTML = `
          <div class="input-group my-5 ${[this._className].join(' ')}">
            <input class="form-control" placeholder="${this._placeholder}" id="searchElement" type="search" aria-label="search">
          </div>
          <div class="result-search" id="result-search"></div>
                `;

    this.querySelector('#searchElement').addEventListener(
      'keyup',
      this._keyupEvent,
    );
  }
}

customElements.define('search-bar', SearchBar);
