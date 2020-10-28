class HeaderSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header>
        <nav class="navbar fixed-top">
            <div class="navbar-wrapper container">
                <a href="#" class="brand-logo">Nico Food</a>
                <button
                    id="hamburgerButton"
                    class="ml-auto navbar-mobile d-md-none"
                    aria-label="hamburger button"
                    >☰</button>

                <div class="navbar-collapse ml-auto" id="drawer">
                    <ul class="nav-list">
                    <li class="nav__item"><a href="#/">Home</a></li>
                    <li class="nav__item"><a href="/#booking">Booking</a></li>
                    <li class="nav__item"><a href="#/favorite">Favorite</a></li>
                    <li class="nav__item">
                        <a href="https://me.nicosiput.com" target="_blank" rel="noopener">About Us</a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>`;
  }
}

customElements.define('header-element', HeaderSection);
