import { createRestaurantItem } from '../templates/template-creator';

class ItemRestaurant extends HTMLElement {
  set data(item) {
    this._item = item;
    this.render();
  }

  render() {
    this.innerHTML += createRestaurantItem(this._item);
  }
}

customElements.define('item-restaurant', ItemRestaurant);
