class FooterSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
      <div class="content flex align-item-center">
        <div class="container text-center">
          <p class="text-center my-5">All Right Reserved — ©2020, NicoFood.</p>
          <div class="credits">
            <p class="mb-0">
              Illustration by
              <a
                href="https://stories.freepik.com"
                target="_blank"
                rel="noopener"
                >Freepik Stories</a
              >
            </p>
          </div>
        </div>
      </div>
    </footer>
    `;
  }
}

customElements.define('footer-element', FooterSection);
