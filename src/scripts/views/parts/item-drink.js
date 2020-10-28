import { createDrinkItem, createRecommendDrinkItem } from '../templates/template-creator';

class ItemDrink extends HTMLElement {
  set data(item) {
    this._item = item;
    this._showRestaurantData = this.getAttribute('showRestaurant') || null;
    this.render();
  }

  render() {
    if (this._showRestaurantData) {
      this.innerHTML += createRecommendDrinkItem(this._item);
    } else {
      this.innerHTML += createDrinkItem(this._item);
    }
  }
}

customElements.define('item-drink', ItemDrink);
