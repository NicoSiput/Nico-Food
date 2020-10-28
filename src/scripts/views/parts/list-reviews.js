import './item-review';

class ListReviews extends HTMLElement {
  set reviews(items) {
    this._items = items;
    this._className = this.getAttribute('classname') || null;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="reviews my-3 ${[this._className].join(' ')}">
      <!-- List reviews will display here -->
    </div>`;

    const reviewsContainer = document.querySelector('.reviews');
    reviewsContainer.innerHTML = '';

    const totalIndex = this._items.length - 1;
    for (let index = totalIndex; index >= 0; index -= 1) {
      const reviewData = this._items[index];
      const itemReview = document.createElement('item-review');

      itemReview.data = reviewData;
      reviewsContainer.appendChild(itemReview);
    }
  }
}

customElements.define('list-reviews', ListReviews);
