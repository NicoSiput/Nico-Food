import ToastInitiator from './toast';
import {
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
} from '../views/templates/template-creator';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, restaurant, favoriteRestaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;
    this._favoriteRestaurant = favoriteRestaurant;
    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;
    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  _renderToastLiked() {
    const options = {
      text: 'Added to your favorite list',
      destination: '#/favorite',
      className: 'toast-liked',
      duration: 3500,
      stopOnFocus: true, // Prevents dismissing of toast on hover
      backgroundColor: '#6eddb8',
    };
    ToastInitiator.init(options);
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

  async _isRestaurantExist(id) {
    const restaurant = await this._favoriteRestaurant.getRestaurant(id);
    return restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeRestaurantButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurant.putRestaurant(this._restaurant);
      this._renderButton();

      this._renderToastLiked();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createUnlikeRestaurantButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurant.deleteRestaurant(this._restaurant.id);
      this._renderButton();
      this._renderToastRemove();
    });
  },
};

export default LikeButtonPresenter;
