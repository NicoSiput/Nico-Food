import './list-reviews';
import './posting-review';

import RestaurantData from '../../data/restaurant-data';
import { renderSearchResult } from '../../utils/search-data';
import ScrollingSection from '../../utils/scroll-section';

import ToastInitiator from '../../utils/toast';

class ReviewSection extends HTMLElement {
  set restaurant(restaurant) {
    this._data = restaurant;
    this._className = this.getAttribute('className') || null;
    this.render();
  }

  async render() {
    const restaurant = this._data;
    this.innerHTML = `
    <section id='review' class="${[this._className].join(' ')}">
      <div class='container'>
        <h2 class="title-section my-3">Reviews (<span class='count-review'>1</span>)</h2>
        <p id='restaurant-name' class='mb-2'>Restaurant</p>
        <div class='star-wrapper flex'>
          <p><span class="value-star">4</span> /5</p>
          <star-rating class="stars ml-1"></star-rating>
        </div>

        <list-reviews></list-reviews>
        <posting-review class='mt-5'></posting-review>
        
      </div>
    </section>`;

    document.querySelector(
      '#restaurant-name',
    ).innerHTML = `${restaurant.name}, ${restaurant.city}`;
    document.querySelector('.value-star').innerHTML = restaurant.rating;
    document.querySelector('.count-review').innerHTML = restaurant.consumerReviews.length;
    const starElement = document.querySelector('star-rating');
    starElement.values = restaurant.rating;

    const listReview = document.querySelector('list-reviews');
    listReview.reviews = restaurant.consumerReviews;

    const onSubmitPosting = async () => {
      try {
        const name = document.querySelector('#inName').value;
        const review = document.querySelector('#inReview').value;

        if (review && name) {
          const postData = {
            id: restaurant.id,
            name,
            review,
          };

          const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-Auth-Token': '12345',
            },
            body: JSON.stringify(postData),
          };

          const result = await RestaurantData.postReview(options);
          renderSearchResult(listReview, 'reviews', result);
          const listSection = ['review'];
          const idSection = 'review';
          ScrollingSection.init({ listSection, idSection });

          document.querySelector('#inName').value = '';
          document.querySelector('#inReview').value = '';
          this._renderToastSuccess();
        } else {
          this._renderToastAlert();
        }
      } catch (message) {
        console.log(message);
      }
    };

    const postReviewElement = document.querySelector('posting-review');
    postReviewElement.onClickEvent = onSubmitPosting;
  }

  _renderToastAlert() {
    const options = {
      text: 'Please check you input',
      duration: 3500,
      stopOnFocus: true, // Prevents dismissing of toast on hover
      backgroundColor: '#d91e53',
    };
    ToastInitiator.init(options);
  }

  _renderToastSuccess() {
    const options = {
      text: 'Thank you for your review',
      duration: 3500,
      stopOnFocus: true, // Prevents dismissing of toast on hover
      backgroundColor: '#6eddb8',
    };
    ToastInitiator.init(options);
  }
}

customElements.define('review-section', ReviewSection);
