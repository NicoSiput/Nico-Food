const assert = require('assert');

Feature('Liking Restaurants');

Before((I) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty list favorite', (I) => {
  I.seeElement('#trouble');
  I.see('NO FAVORITE DATA');
});

Scenario('liking one restaurant favorite', async (I) => {
  I.see('NO FAVORITE DATA');

  I.amOnPage('/');
  I.seeElement('.restaurant-name a');

  const restaurantFirst = locate('.restaurant-name a').first();
  const restaurantFirstTitle = await I.grabTextFrom(restaurantFirst);
  I.click(restaurantFirst);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('item-restaurant');

  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-name a');

  assert.strictEqual(restaurantFirstTitle, likedRestaurantTitle);
});
