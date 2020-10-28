import './item-restaurant';

class ListRestaurants extends HTMLElement {
  set restaurants(items) {
    this._items = items;
    this._limit = this.getAttribute('limit') || null;
    this._titleSection = this.getAttribute('titleSection') || '';
    this.render();
  }

  render() {
    const shortenText = (str, maxLen, separator = ' ') => {
      if (str.length <= maxLen) return str;
      return str.substr(0, str.lastIndexOf(separator, maxLen));
    };

    this.innerHTML = `
    <div class="list-data restaurants">
      <!-- List restaurant will display here -->
    </div>`;

    const restaurantsContainer = document.querySelector('.restaurants');
    restaurantsContainer.innerHTML = '';

    this._items.slice(-this._limit).forEach((data) => {
      const itemRestaurant = document.createElement('item-restaurant');

      const { description } = data;
      data.description = shortenText(description, 250);

      itemRestaurant.data = data;

      restaurantsContainer.appendChild(itemRestaurant);
    });
  }
}

customElements.define('list-restaurant', ListRestaurants);
