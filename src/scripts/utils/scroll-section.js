const ScrollingSection = {
  init({ listSection, idSection }) {
    this._listSection = listSection;
    this._targetSection = idSection;
    this._scrolling();
  },

  _scrolling() {
    if (this._listSection.some((section) => this._targetSection === section)) {
      const elmnt = document.getElementById(this._targetSection);
      elmnt.scrollIntoView();
    }
  },

};

export default ScrollingSection;
