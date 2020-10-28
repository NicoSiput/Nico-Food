class PostingReview extends HTMLElement {
  connectedCallback() {
    this._className = this.getAttribute('classname') || null;
    this.render();
  }

  set onClickEvent(event) {
    this._onClickEvent = event;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="posting-review ${[this._className].join(' ')}">
      <div class="posting-wrapper">
        <h3 class="title-section">We need your review</h3>
        <div class="form-input">
          <label for="inName">Name</label>
          <input
            class="form-control"
            type="text"
            id="inName"
            placeholder="Input Name"
            required
          />
        </div>
        <div class="form-input">
          <label for="inReview">Review</label>
          <textarea class="form-control" id='inReview' placeholder='type your review..' rows='4' cols='50'></textarea>
        </div>
        <button class="btn-custom mx-auto block" id="submit">Submit</button>
      </div>
      
    </div>
    `;

    this.querySelector('#submit').addEventListener(
      'click',
      this._onClickEvent,
    );
  }
}

customElements.define('posting-review', PostingReview);
