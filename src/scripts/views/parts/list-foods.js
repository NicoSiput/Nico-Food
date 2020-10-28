import './item-food';

import RestaurantData from '../../data/restaurant-data';

class ListFoods extends HTMLElement {
  set restaurants(items) {
    this._items = items;
    this._limit = this.getAttribute('limit') || null;
    this._renderRecommendFoods();
  }

  set foods(foods) {
    this._foods = foods;
    this._renderListFoods();
  }

  _renderRecommendFoods() {
    this.innerHTML = `
    <div class="list-data foods">
      <!-- List foods will display here -->
    </div>`;

    const foodsContainer = document.querySelector('.foods');
    foodsContainer.innerHTML = '';

    this._items.slice(-this._limit).forEach(async (restaurant) => {
      const dataFood = await RestaurantData.getRestaurantById(restaurant.id);
      const food = {
        name: dataFood.menus.foods[0].name,
        restaurant,
      };

      const itemFood = document.createElement('item-food');
      itemFood.setAttribute('showRestaurant', '1');
      itemFood.data = food;

      foodsContainer.appendChild(itemFood);
    });
  }

  _renderListFoods() {
    this.innerHTML = `
    <h3 class="title-section">Foods</h3>
    <div class="list-data foods">
      <!-- List foods will display here -->
    </div>`;

    const foodsContainer = document.querySelector('.foods');
    foodsContainer.innerHTML = '';
    this._foods.forEach(async (food) => {
      const itemFood = document.createElement('item-food');
      itemFood.data = food;

      foodsContainer.appendChild(itemFood);
    });
  }
}

customElements.define('list-foods', ListFoods);
