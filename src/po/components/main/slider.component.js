const BaseComponent = require('../common/base.component');

class SliderComponent extends BaseComponent {
  constructor() {
    super('.slider section');
  }

  get sliderRightButton() {
    return $('button.slider__right-arrow');
  }

  get sliderTitle() {
    return $('div.owl-item.active > div > div > div > div.single-slide__content-container > div > div > p > span > span:nth-child(1)');
  }

  get sliderCurrentPage() {
    return $('span.slider__pagination--current-page');
  }
}

module.exports = SliderComponent;
