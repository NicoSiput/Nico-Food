import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as testFactories from './helper/testFactories';

describe('Liking A Restaurant', () => {
  const addButtonLikeContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addButtonLikeContainer();
  });

  it('should show the like button when the restaurant has not been liked', async () => {
    await testFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await testFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await testFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);
    expect(restaurant).toEqual({ id: 1 });

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant again when restaurant already added', async () => {
    await testFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
    let favoriteRestaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    // User click like restaurant
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    favoriteRestaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    expect(favoriteRestaurants).toEqual([{ id: 1 }]);

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await testFactories.createLikeButtonPresenterWithRestaurant({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([]);
  });
});
