import FavoriteRestaurant from '../../data/favorite-restaurant-idb';

import { renderNoFavoritePage } from '../../utils/page-handler';
import '../parts/list-restaurants';

const Favorite = {
  async render() {
    window.scrollTo(0, 0);
    return `
      <section>
        <div class="container">
          <div id="main">
            <h2 class="title-section mb-3">My Favorite Restaurant</h2>
            <list-restaurant limit="0"></list-restaurant>
          </div>
        </div>
      </section>
      `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurant.getAllRestaurant();
    if (restaurants.length > 0) {
      const listRestaurant = document.querySelector('list-restaurant');
      listRestaurant.restaurants = restaurants;
    } else {
      renderNoFavoritePage();
    }
  },
};

export default Favorite;
