import { createReviewItem } from '../templates/template-creator';

class ItemReview extends HTMLElement {
  set data(item) {
    this._item = item;
    this.render();
  }

  render() {
    this.innerHTML += createReviewItem(this._item);
  }
}

customElements.define('item-review', ItemReview);
