import './item-drink';

import RestaurantData from '../../data/restaurant-data';

class ListDrinks extends HTMLElement {
  set restaurants(items) {
    this._items = items;
    this._limit = this.getAttribute('limit') || null;
    this.render();
  }

  set drinks(drinks) {
    this._drinks = drinks;
    this._renderListDrinks();
  }

  render() {
    this.innerHTML = `
    <div class="list-data drinks">
      <!-- List drinks will display here -->
    </div>`;

    const drinkContainer = document.querySelector('.drinks');
    drinkContainer.innerHTML = '';

    this._items.slice(-this._limit).forEach(async (restaurant) => {
      const dataDrink = await RestaurantData.getRestaurantById(restaurant.id);
      const drink = {
        name: dataDrink.menus.drinks[0].name,
        restaurant,
      };

      const itemDrink = document.createElement('item-drink');
      itemDrink.setAttribute('showRestaurant', '1');
      itemDrink.data = drink;

      drinkContainer.appendChild(itemDrink);
    });
  }

  _renderListDrinks() {
    this.innerHTML = `
    <h3 class="title-section">Drinks</h3>
    <div class="list-data drinks">
      <!-- List drinks will display here -->
    </div>`;

    const drinkContainer = document.querySelector('.drinks');
    drinkContainer.innerHTML = '';

    this._drinks.forEach(async (food) => {
      const itemDrink = document.createElement('item-drink');
      itemDrink.setAttribute('showRestaurant', '');
      itemDrink.data = food;

      drinkContainer.appendChild(itemDrink);
    });
  }
}

customElements.define('list-drinks', ListDrinks);
