import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantData {
  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async getRestaurantById(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async postReview(options) {
    const response = await fetch(API_ENDPOINT.POST_REVIEW, options);
    const responseJson = await response.json();
    return responseJson.customerReviews;
  }
}

export default RestaurantData;
