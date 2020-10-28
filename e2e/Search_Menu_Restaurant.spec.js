/* eslint-disable no-await-in-loop */
const assert = require('assert');

Feature('Searching Menu at Restaurant');

Before((I) => {
  I.amOnPage('/');
  I.seeElement('.restaurant-name a');
  I.click(locate('.restaurant-name a').first());
});

Scenario('should display information when keyword not contains in menu', async (I) => {
  I.seeElement('#searchElement');
  I.fillField('#searchElement', '123xxyyzzz');

  I.seeElement('#result-search');
  I.seeElement('.search-notfound');
});

Scenario('searching menu restaurant', async (I) => {
  const menus = await I.grabTextFrom('.meta-wrapper h3');

  const searchQuery = menus[1].substring(1, 3);
  const matchingMenus = menus.filter((menu) => menu.indexOf(searchQuery) !== -1);

  I.fillField('#searchElement', searchQuery);

  matchingMenus.forEach(async (menu, index) => {
    const visibleMenu = await I.grabTextFrom(locate('.meta-wrapper h3').at(index + 1));
    assert.strictEqual(menu, visibleMenu);
  });
});
