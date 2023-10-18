const BaseComponent = require('../common/base.component');

class statisticSliderComponent extends BaseComponent {
  constructor() {
    super('div.scroll-infographic-ui-23__scrollable-section.vertical-scroll');
  }

  get firstElement() {
    return this.rootElement.$('div:nth-child(1)');
  }

  get lastElementText() {
    return this.rootElement.$('div:nth-child(3) > div > p:nth-child(1) > span > span > span');
  }
}

module.exports = statisticSliderComponent;
