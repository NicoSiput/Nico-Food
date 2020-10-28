import UrlParser from '../../routes/url-parser';
import RestaurantData from '../../data/restaurant-data';
import {
  createDetailRestaurant,
  createPreloader,
} from '../templates/template-creator';

import LikeButtonPresenter from '../../utils/like-button-presenter';
import { renderDataNotFound, renderNetworkErrorPage } from '../../utils/page-handler';

import FavoriteRestaurant from '../../data/favorite-restaurant-idb';
import ToastInitiator from '../../utils/toast';

import '../parts/search-bar';
import '../parts/star';
import '../parts/list-foods';
import '../parts/list-drinks';
import '../parts/review-section';
import '../parts/footer-section';

import { searchMenu, callbackSearch, renderSearchResult } from '../../utils/search-data';
import ScrollingSection from '../../utils/scroll-section';

const Detail = {
  async render() {
    window.scrollTo(0, 0);
    return `
    <div class="loading">
      ${createPreloader()}
    </div>
    <div class="main">
      <section>
        <div class="container">
          <div id="detail__wrapper"></div>
        </div>
      </section>

      <section id="menu">
        <div class="container">
          <h2 class="title-section mb-3 mt-3">Our Delicious Menu</h2>
          
          <search-bar classname="sticky" placeholder="Search food / drink here..."></search-bar>
          <div>
            <list-foods limit="0">
              <div class="list-data foods">
              </div>
            </list-foods>
          </div>
          <div class="mt-5">
            <list-drinks limit="0">
            </list-drinks>
          </div>
        </div>
        
        <div id="likeButtonContainer"></div>
      </section>
      <review-section className="last-section"></review-section>
    </div>
    
    <footer-element></footer-element>
      `;
  },

  async afterRender() {
    const loading = document.querySelector('.loading');
    const main = document.querySelector('.main');
    const footer = document.querySelector('footer-element');

    main.style.display = 'none';
    footer.style.display = 'none';
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await RestaurantData.getRestaurantById(url.id);
      if (restaurant) {
        const detailContainer = document.querySelector('#detail__wrapper');
        detailContainer.innerHTML = createDetailRestaurant(restaurant);

        const listFoods = document.querySelector('list-foods');
        const listDrinks = document.querySelector('list-drinks');

        renderSearchResult(listFoods, 'foods', restaurant.menus.foods);
        renderSearchResult(listDrinks, 'drinks', restaurant.menus.drinks);

        // searching handling
        const searchElement = document.querySelector('search-bar');
        const onSearchTyped = async () => {
          const resultSearch = document.querySelector('.result-search');
          try {
            const result = await searchMenu(searchElement.value, restaurant.menus);
            const totalLength = result.foods.length + result.drinks.length;
            const data = {
              total: totalLength,
              keyword: searchElement.value,
            };

            if (result.foods.length > 0) renderSearchResult(listFoods, 'foods', result.foods);
            else listFoods.innerHTML = '';

            if (result.drinks.length > 0) renderSearchResult(listDrinks, 'drinks', result.drinks);
            else listDrinks.innerHTML = '';

            callbackSearch(resultSearch, data);

            const listSection = ['menu'];
            const idSection = 'menu';
            ScrollingSection.init({ listSection, idSection });
          } catch (message) {
            const data = {
              keyword: message,
            };
            listFoods.innerHTML = '';
            listDrinks.innerHTML = '';
            callbackSearch(resultSearch, data);
          }
        };
        searchElement.keyupEvent = onSearchTyped;

        const reviewSection = document.querySelector('review-section');
        reviewSection.restaurant = restaurant;

        const idRestaurantFavorite = `${restaurant.id}?fav=true`;
        LikeButtonPresenter.init({
          likeButtonContainer: document.querySelector('#likeButtonContainer'),
          restaurant: {
            id: idRestaurantFavorite,
            name: restaurant.name,
            description: restaurant.description,
            city: restaurant.city,
            rating: restaurant.rating,
            pictureId: restaurant.pictureId,
          },
          favoriteRestaurant: FavoriteRestaurant,
        });

        loading.style.display = 'none';
        main.style.display = 'block';
        footer.style.display = 'block';
      } else {
        if (url.id.includes('?fav')) {
          const pureId = url.id.substring(0, url.id.indexOf('?'));
          await FavoriteRestaurant.deleteMovie(pureId);
          this._renderToastRemove();
        }
        renderDataNotFound();
      }
    } catch (error) {
      console.log(error);
      renderNetworkErrorPage();
    }
  },
  _renderToastRemove() {
    const options = {
      text: 'Removed from favorite list',
      className: 'toast-removed',
      duration: 3500,
      stopOnFocus: true, // Prevents dismissing of toast on hover
      backgroundColor: '#d91e53',
    };
    ToastInitiator.init(options);
  },
};

export default Detail;
