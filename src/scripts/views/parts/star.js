class StarRating extends HTMLElement {
  connectedCallBack() {
    this.value = this.getAttribute('value') || null;
    this.render();
  }

  set values(value) {
    this.value = value;
    this.render();
  }

  render() {
    const { value } = this;
    const decimals = Number(value) % 1;
    let leftPos = 0;
    const width = 35; // width star
    const height = 35; // height star

    let stars = '';

    // Add valued star
    let limitRight = value;
    if (decimals > 0) {
      limitRight = value - 1;
      // ex: value = 4.4, limit right = 3.4 / 4
    }
    for (let index = 0; index < limitRight; index += 1) {
      stars += `<div class="star" style="left: 
        ${width * index}px; height:${height}px; width:${width}px;"></div>`;
      leftPos = width * index;
    }

    leftPos += width;
    // Add point value from rating
    if (decimals > 0 && value <= 5) {
      stars += `<div class="star" style="left: 
        ${leftPos}px; height:${height}px; width:${width * decimals}px;"></div>`;
    }

    // Add placeholder star
    for (let index = 0; index < 5; index += 1) {
      stars += `<div class="star placeholder" style="left: 
      ${width * index}px; height:${height}px; width:${width}px;"></div>`;
    }
    this.innerHTML = stars;
  }
}

customElements.define('star-rating', StarRating);
