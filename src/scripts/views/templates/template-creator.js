import CONFIG from '../../globals/config';

const createRestaurantItem = (restaurant) => `
        <figure>
              <div class="image-figure">
                <img class="lazyload" src="./images/placeholder.webp" data-src="${CONFIG.IMAGE_URL}/${restaurant.pictureId}" alt="${restaurant.name}" height="150px" width="100%">
                <div class='overlay'></div>
                <div class='restaurant-name pl-3'>
                  <a href="#/detail/${restaurant.id}" class="stretched-link">
                    ${restaurant.name}
                  </a>
                </div>
              </div>
              <div class="meta-wrapper mt-2">
               
                  <div class="footer-wrapper flex align-item-center mt-2">
                    <img src="./images/icons/ic_location.svg" alt="" height="20px" width="20px" /> 
                    <p>${restaurant.city}</p>
                    <div class="star-wrapper ml-auto mr-3">
                      <img src="./images/icons/ic_star.svg" alt="" height="15px" width="15px" />
                      <p class="value-star ml-1">${restaurant.rating}</p>
                    </div>
                  </div>
                  <div class="desc mt-3">
                    ${restaurant.description}
                  </div>
              </div>
        </figure>`;

const createRecommendFoodItem = (food) => `
<figure>
  <div class="image-figure">
    <img src="./images/food-placeholder.webp" alt="${food.name}" height="150px" width="100%" >
    <div class='overlay'></div>
    <div class='price-wrapper'>
      <p class='price'>IDR 5.000</p>
    </div>
  </div>
  <div class="meta-wrapper">
      <h3 class="mb-1">${food.name}</h3>
      <div class="footer-wrapper flex align-item-center mt-2">
        <a href="#/detail/${food.restaurant.id}">
          <img src="./images/icons/ic_location.svg" alt="" height="20px" width="20px" /> 
          ${food.restaurant.name}, <span>${food.restaurant.city}</span>
        </a>
    </div>
  </div>
</figure>
`;

const createFoodItem = (food) => `
<figure>
  <div class="image-figure">
    <img src="./images/food-placeholder.webp" alt="${food.name}" height="150px" width="100%" >
    <div class='overlay'></div>
    <div class='price-wrapper'>
      <p class='price'>IDR 25.000</p>
    </div>
  </div>
  <div class="meta-wrapper">
      <h3 class="mb-1">${food.name}</h3>
  </div>
</figure>
`;

const createRecommendDrinkItem = (drink) => `
<figure>
    <div class="image-figure">
      <img src="./images/drink-placeholder.webp" alt="${drink.name}" height="150px" width="100%">
      <div class='overlay'></div>
      <div class='price-wrapper'>
        <p class='price'>IDR 5.000</p>
      </div>
    </div>
    <div class="meta-wrapper">
        <h3 class="mb-1">${drink.name}</h3>
        <div class="footer-wrapper flex align-item-center mt-2">
          <a href="#/detail/${drink.restaurant.id}">
            <img src="./images/icons/ic_location.svg" alt="" height="20px" width="20px" /> 
              ${drink.restaurant.name}, <span>${drink.restaurant.city}</span>
          </a>
        </div>
    </div>
</figure>`;

const createDrinkItem = (drink) => `
<figure>
    <div class="image-figure">
      <img src="./images/drink-placeholder.webp" alt="${drink.name}" height="150px" width="100%" >
      <div class='overlay'></div>
      <div class='price-wrapper'>
        <p class='price'>IDR 5.000</p>
      </div>
    </div>
    <div class="meta-wrapper">
        <h3 class="mb-1">${drink.name}</h3>
    </div>
</figure>`;

const createDetailRestaurant = (restaurant) => `
  <h2 class='text-center mb-3 title-section restaurant__name'>${restaurant.name}</h2>
  <div class="detail d-xl-flex align-item-center">
    <div class="image-figure basis-1">
      <img src="./images/placeholder.png" data-src="${CONFIG.IMAGE_URL}/${restaurant.pictureId}" class="img-responsive rounded-6 lazyload" alt="${restaurant.name}" height="150px" width="100%">
    </div>
    <div class="meta-wrapper mt-2 basis-1">
      <div class="desc">
        <p>${restaurant.description}</p>
      </div>
      <div class="flex align-item-center mt-2">
        <img src="./images/icons/ic_location.svg" alt="" height="25px" width="25px" />
        <p class="ml-2">${restaurant.address}, ${restaurant.city}</p>
      </div>
      <div class="flex align-item-center mt-2">
        <img src="./images/icons/ic_category.svg" alt="" height="25px" width="25px" />
        <p class="ml-2">
        ${restaurant.categories.map((category) => `${category.name}`).join(', ')}
        </p>
      </div>
      <div class="flex align-item-center mt-2">
      <img src="./images/icons/ic_star.svg" alt="" height="25px" width="25px" />
        <p class="ml-2">${restaurant.rating}</p>
      </div>
    </div>
  </div>
`;

const createUnlikeRestaurantButtonTemplate = () => `
<button aria-label="unlike this restaurant" id="likeButton" class="like">
<i class="fa fa-heart" aria-hidden="true"></i>
</button>
`;

const createLikeRestaurantButtonTemplate = () => `
<button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createReviewItem = (review) => `
<div class='review-wrapper d-md-flex mb-3 desc'>
  <div class='avatar mr-3'>
    <img src='./images/icons/ic_profile.svg' class='d-none d-md-block mx-auto' alt='' height='48px' width="48px"/>
    <div class='user-review my-1'>
      <p>By : <span class='username-review'>${review.name}</span></p>
      <p class='date-review'>${review.date}</p>
    </div>
  </div>
  <div class='review'>
    <div class='text-review'>
      ${review.review}
    </div>
  </div>
</div>
`;

const createDataNotFoundPage = (content) => `
      <section id="trouble">
        <div class="container">
            <div class="d-md-flex flex-row-reverse align-item-center">
                <div class="basis-1">
                    <div class='container'>
                        <div class="error-page s-flex xl-flex center justify-content-center align-item-center">
                            <img
                            src="./images/placeholder.webp"
                            alt="loading..."
                            data-src="./images/no-data.webp"
                            height="350px"
                            width="100%"
                            class="lazyload img-fluid"
                          />
                            
                        </div>
                    </div>
                    
                </div>
                <div class="basis-1">
                    <div class='container'>
                        <h3 class="mb-3">${content.title}</h3>
                        <p>${content.text}</p>
                        <a href='#/' class='btn-custom d-block d-md-inline-block mt-5 text-center'>${content.buttonText}</a>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>

`;

const createNetworkErrorPage = (content) => `
      <section id="trouble">
        <div class="container">
            <div class="d-md-flex flex-row-reverse align-item-center">
                <div class="basis-1">
                
                    <div class='container'>
                        <div class="error-page s-flex xl-flex center justify-content-center align-item-center">
                            <img src='./images/internet.svg' alt="page-error" class="img-fluid" />
                        </div>
                    </div>
                    
                </div>
                <div class="basis-1">
                    <div class='container'>
                        <h3 class="mb-3">${content.title}</h3>
                        <p>${content.text}</p>
                        <a href='#/' class='btn-custom d-block d-md-inline-block mt-5 text-center'>${content.buttonText}</a>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>

`;

const create404Page = (content) => `
      <section id="trouble">
        <div class="container">
            <div class="d-md-flex flex-row-reverse align-item-center">
                <div class="basis-1">
                
                    <div class='container'>
                        <div class="error-page s-flex xl-flex center justify-content-center align-item-center">
                            <img src='./images/404.svg' alt="page-error" class="img-fluid" />
                        </div>
                    </div>
                    
                </div>
                <div class="basis-1">
                    <div class='container'>
                        <h3 class="mb-3">${content.title}</h3>
                        <p>${content.text}</p>
                        <a href='#/' class='btn-custom d-block d-md-inline-block mt-5 text-center'>${content.buttonText}</a>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>

`;

const createSkeletonItems = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
    <figure>
      <div class="image-figure">
        <div class="skeleton" style="width:100%;height:350px"></div>
      </div>
      <div class="meta-wrapper mt-2">
        <div class="footer-wrapper flex align-item-center mt-2">
          <div class="skeleton" style="width:100px;height:15px"></div>
        </div>
        <div class="desc mt-3">
          <div class="skeleton" style="width:200px;height:15px"></div>
        </div>
      </div>
    </figure>`;
  }

  return template;
};

const createDetailSkeleton = () => {
  let template = '';
  template = `
  <div class="detail-wrapper d-xl-flex align-item-center">
    <div class="image-figure basis-1">
      <div class="skeleton" style="width:100%;height:350px"></div>
    </div>
    <div class="meta-wrapper mt-2 basis-1">
      <div class="desc">
        <div class="skeleton" style="width:80%;height:155px"></div>
      </div>
      <div class="flex align-item-center mt-2">
        <div class="skeleton" style="width:70%;height:15px"></div>
      </div>
      <div class="flex align-item-center mt-2">
        <div class="skeleton" style="width:70%;height:15px"></div>
      </div>
      <div class="flex align-item-center mt-2">
        <div class="skeleton" style="width:70%;height:15px"></div>
      </div>
    </div>
  </div>`;

  return template;
};

const createReviewSkeleton = (count) => {
  let template = '';
  for (let i = 0; i < count; i += 1) {
    template += `
    <div class='review-wrapper d-md-flex mb-3 desc'>
      <div class='avatar mr-3'>
        <div class="skeleton rounded mx-auto mb-3" style="width:48px;height:48px"></div>
        <div class='user-review my-1'>
          <div class="skeleton" style="width:100%;height:15px"></div>
        </div>
      </div>
      <div class='review'>
        <div class='text-review'>
          <div class="skeleton" style="width:100%;height:50px"></div>
        </div>
      </div>
    </div>`;
  }
  return template;
};

const createPreloader = () => `
<div class="loader-wrapper">
  <span class="flex justify-content-center text-center">
    <span class="loader-inner">
      <div class="image-wrapper" style="height:150px">
        <img
          src="./images/placeholder.webp"
          alt="loading..."
          data-src="./images/loading.webp"
          height="150px"
          width="150px"
          class="lazyload img-responsive"
        />
      </div>
      
      <h2 class="mb-5">Wait a sec, we are preparing data...</h2>
    </span>
  </span>
</div>
`;

export {
  createRestaurantItem,
  createUnlikeRestaurantButtonTemplate,
  createLikeRestaurantButtonTemplate,
  createFoodItem,
  createDrinkItem,
  createDetailRestaurant,
  createRecommendFoodItem,
  createRecommendDrinkItem,
  createReviewItem,
  createDataNotFoundPage,
  createNetworkErrorPage,
  create404Page,
  createSkeletonItems,
  createDetailSkeleton,
  createReviewSkeleton, createPreloader,
};
