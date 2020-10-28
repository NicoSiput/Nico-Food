import { createFoodItem, createRecommendFoodItem } from '../templates/template-creator';

class ItemFoods extends HTMLElement {
  set data(item) {
    this._item = item;
    this._showRestaurantData = this.getAttribute('showRestaurant') || null;
    this.render();
  }

  render() {
    if (this._showRestaurantData) {
      this.innerHTML += createRecommendFoodItem(this._item, this._showRestaurantData);
    } else {
      this.innerHTML += createFoodItem(this._item, this._showRestaurantData);
    }
  }
}

customElements.define('item-food', ItemFoods);
