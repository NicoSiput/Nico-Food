import ScrollingSection from '../../utils/scroll-section';
import { renderNetworkErrorPage } from '../../utils/page-handler';
import RestaurantData from '../../data/restaurant-data';
import '../parts/hero-section';
import '../parts/list-restaurants';
import '../parts/list-foods';
import '../parts/list-drinks';
import '../parts/booking-section';
import '../parts/footer-section';
import { createSkeletonItems } from '../templates/template-creator';

const Home = {
  async preLoader() {
    try {
      // renderLoading();
      const restaurants = await RestaurantData.listRestaurant();
      this._state = {
        data: {
          restaurants,
        },
      };
    } catch (error) {
      this._state = {
        isError: true,
      };
    }
  },

  async render() {
    window.scrollTo(0, 0);
    return `
      <hero-section></hero-section>

      <section>
        <div class="container">
          <h2 class="title-section mb-3">Recommendation Restaurant</h2>
          <list-restaurant limit="6">
            <div class="list-data restaurants">
              ${createSkeletonItems(6)}
            </div>
          </list-restaurant>

          <div class="mt-5 flex justify-content-center">
            <a href="#/restaurants" class="btn-custom text-center">See More</a>
          </div>
        </div>
      </section>

      <section id="foods">
        <div class="container">
          <h2 class="title-section mb-3">Recommendation Foods</h2>
          <list-foods limit="4">
            <div class="list-data foods">
              ${createSkeletonItems(4)}
            </div>
          </list-foods>
        </div>
      </section>

      <section id="drinks">
        <div class="container">
          <h2 class="title-section mb-3">Recommendation Drinks</h2>
          <list-drinks limit="4">
            <div class="list-data drinks">
              ${createSkeletonItems(4)}
            </div>
          </list-drinks>
        </div>
      </section>
      <booking-section className="last-section"></booking-section>
      <footer-element></footer-element>`;
  },

  async afterRender() {
    try {
      const restaurants = await RestaurantData.listRestaurant();
      const listRestaurant = document.querySelector('list-restaurant');
      listRestaurant.restaurants = restaurants;

      const listFoods = document.querySelector('list-foods');
      listFoods.restaurants = restaurants;

      const listDrinks = document.querySelector('list-drinks');
      listDrinks.restaurants = restaurants;

      const bookingSection = document.querySelector('booking-section');
      bookingSection.restaurants = restaurants;

      const listSection = ['booking'];
      const idSection = window.location.hash.substr(1);
      ScrollingSection.init({ listSection, idSection });
    } catch (error) {
      console.log(error);
      renderNetworkErrorPage();
    }
  },
};

export default Home;
