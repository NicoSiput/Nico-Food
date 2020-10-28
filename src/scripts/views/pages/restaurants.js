import RestaurantData from '../../data/restaurant-data';
import '../parts/list-restaurants';
import '../parts/search-bar';
import '../parts/footer-section';
import { searchRestaurants, callbackSearch, renderSearchResult } from '../../utils/search-data';
import { renderNetworkErrorPage } from '../../utils/page-handler';

import ScrollingSection from '../../utils/scroll-section';
import {
  createSkeletonItems,
} from '../templates/template-creator';

const Restaurants = {

  async render() {
    window.scrollTo(0, 0);
    return `
      <section id='restaurants'>
        <div class="container" id='top-section'>
          <h2 class="title-section mb-3">Our Restaurants</h2>
          <search-bar classname='sticky'></search-bar>
          <list-restaurant limit="0">
            <div class="list-data restaurants">
              ${createSkeletonItems(20)}
            </div>
          </list-restaurant>
        </div>
      </section>
      
      <footer-element></footer-element>`;
  },

  async afterRender() {
    try {
      const restaurants = await RestaurantData.listRestaurant();
      const listRestaurant = document.querySelector('list-restaurant');
      listRestaurant.restaurants = restaurants;

      // searching handling
      const searchElement = document.querySelector('search-bar');
      const onSearchTyped = async () => {
        const resultSearch = document.querySelector('.result-search');
        try {
          const result = await searchRestaurants(searchElement.value, restaurants);
          const data = {
            total: result.length,
            keyword: searchElement.value,
          };
          renderSearchResult(listRestaurant, 'restaurants', result);
          callbackSearch(resultSearch, data);

          const listSection = ['restaurants'];
          const idSection = 'restaurants';
          ScrollingSection.init({ listSection, idSection });
        } catch (message) {
          const data = {
            keyword: message,
          };

          listRestaurant.innerHTML = '';
          callbackSearch(resultSearch, data);
        }
      };
      searchElement.keyupEvent = onSearchTyped;
    } catch (error) {
      console.log(error);
      renderNetworkErrorPage();
    }
  },
};

export default Restaurants;
