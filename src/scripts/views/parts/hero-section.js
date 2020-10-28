class HeaderContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section id="hero">
        <div class="overlay d-none d-md-block"></div>
        <div class="container">
          <div class="hero-wrapper">
            <div class="overlay d-md-none"></div>
            <div class="hero-wrapper-text">
              <h2 class="hero-tag">
                Welcome to <span>Nico <br />Food</span>
              </h2>

              <p class="mt-5">
                The best authentic restaurant available in here
              </p>

              <a href="#booking" class="btn-custom">Booking Now</a>
            </div>
          </div>
        </div>
      </section>`;
  }
}

customElements.define('hero-section', HeaderContent);
