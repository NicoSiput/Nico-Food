const searchRestaurants = (keyword, restaurants) => {
  const filteredData = restaurants.filter((restaurant) => {
    // search name
    const byName = restaurant.name
      .toUpperCase()
      .includes(keyword.toUpperCase());

    // search by city
    const byCity = restaurant.city
      .toUpperCase()
      .includes(keyword.toUpperCase());

    return byName || byCity;
  });

  if (filteredData.length) {
    return Promise.resolve(filteredData);
  }
  return Promise.reject(keyword);
};

const searchFood = (keyword, foods) => {
  const filteredData = foods.filter((food) => {
    // search name
    const byName = food.name
      .toUpperCase()
      .includes(keyword.toUpperCase());
    return byName;
  });

  return filteredData;
};

const searchDrink = (keyword, drinks) => {
  const filteredData = drinks.filter((drink) => {
    // search name
    const byName = drink.name
      .toUpperCase()
      .includes(keyword.toUpperCase());
    return byName;
  });

  return filteredData;
};

const searchMenu = (keyword, menus) => {
  const foodSearch = searchFood(keyword, menus.foods);
  const drinkSearch = searchDrink(keyword, menus.drinks);

  const resultSearch = {
    foods: foodSearch,
    drinks: drinkSearch,
  };

  if (foodSearch.length || drinkSearch.length) {
    return Promise.resolve(resultSearch);
  }
  return Promise.reject(keyword);
};

const renderSearchResult = (wrapper, property, data) => {
  wrapper[property] = data;
};

const callbackSearch = (wrapper, data) => {
  if (data.total) {
    // founded data
    if (data.keyword.length > 0) {
      wrapper.innerHTML = `Result: ${data.total} data found with keyword <span>${data.keyword}<span>`;
    } else {
      wrapper.innerHTML = '';
    }
  } else {
    // not founded data
    wrapper.innerHTML = `
      <div class="search-notfound p-3 text-center">
      <h1>Ooops !</h1> <br />
      <span class="not-found">${data.keyword}</span>  not found ! <br />
      Please try another keyword...</div>`;
  }
};

export {
  searchRestaurants, searchMenu, callbackSearch, renderSearchResult,
};
