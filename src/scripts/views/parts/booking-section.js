class BookingSection extends HTMLElement {
  set restaurants(items) {
    this._items = items;
    this._className = this.getAttribute('className') || null;
    this.render();
  }

  render() {
    this.innerHTML = `
    <section id="booking" class="${[this._className].join(' ')}">
      <div class="container">
        <h2 class="title-section mb-3">Booking Now !</h2>
        <div class="form-booking d-xl-flex align-item-center">
        
          <aside class="right-side">
            <img src="./images/icons/ic_fill_form.webp" height="350px" width="350px" alt="" />
          </aside>

          <aside class="input-form">
            <form action="#">
              <div class="form-input">
                <label for="inName">Name</label>
                <input
                  class="form-control"
                  type="text"
                  id="inName"
                  placeholder="Input Name"
                />
              </div>
              <div class="form-input">
                <label for="inPhone">Phone</label>
                <input
                  class="form-control"
                  type="tel"
                  id="inPhone"
                  placeholder="Phone Number"
                />
              </div>
              <div class="form-input">
                <label for="inRestaurant">Restaurants</label>
                <select id="inRestaurant" class="form-control">
                  <option value="">Select</option>
                  <option value="">Medan</option>
                  <option value="">Jakarta</option>
                </select>
              </div>
              <div class="form-input">
                <label for="inDate">Date</label>
                <input
                  class="form-control"
                  type="datetime-local"
                  min="1"
                  id="inDate"
                  placeholder="2 Person"
                />
              </div>
              <div class="form-input">
                <label for="inTotalSeat">Number of Seat</label>
                <input
                  class="form-control"
                  type="number"
                  min="1"
                  id="inTotalSeat"
                  placeholder="2 Person"
                />
              </div>

              <button class="block btn-custom my-5 mx-auto">Submit</button>
            </form>
          </aside>
        </div>
      </div>
    </section>`;

    const optionRestaurants = document.querySelector('#inRestaurant');
    optionRestaurants.innerHTML = '';

    this._items.forEach((restaurant) => {
      optionRestaurants.innerHTML += `<option> ${restaurant.name} </option>`;
    });
  }
}

customElements.define('booking-section', BookingSection);
