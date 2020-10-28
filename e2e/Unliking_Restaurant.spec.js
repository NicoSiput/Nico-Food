/* eslint-disable no-await-in-loop */
Feature('Unliking Restaurant');

Scenario('unlike movie from favorite list', async (I) => {
  I.amOnPage('/');
  I.seeElement('.restaurant-name a');

  const favorites = [];
  for (let i = 1; i <= 3; i += 1) {
    I.click(locate('.restaurant-name a').at(i));
    I.seeElement('#likeButton');
    I.click('#likeButton');
    favorites.push(await I.grabTextFrom('.restaurant__name'));
    I.amOnPage('/');
  }

  I.amOnPage('/#/favorite');
  I.seeElement('item-restaurant');
  I.click(locate('.restaurant-name a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeNumberOfVisibleElements('item-restaurant', favorites.length - 1);
});
