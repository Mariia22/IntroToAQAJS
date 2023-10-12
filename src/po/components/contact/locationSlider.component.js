const BaseComponent = require('../common/base.component');

class LocationSliderComponent extends BaseComponent {
  constructor() {
    super('//*[@id="main"]/div[1]/div[4]/section');
  }

  getRegion(name) {
    const regions = {
      americas: '//*[@id="id-c1e3377f-1d1e-3625-baf5-08d66e30c4aa"]/div[1]/div/div/div[1]/a',
      emea: '//*[@id="id-c1e3377f-1d1e-3625-baf5-08d66e30c4aa"]/div[1]/div/div/div[2]/a',
      apac: '//*[@id="id-c1e3377f-1d1e-3625-baf5-08d66e30c4aa"]/div[1]/div/div/div[3]/a',
    };

    return this.rootElement.$(regions[name.toLowerCase()]);
  }

  get sliderElementList() {
    return $('//*[@id="id-c1e3377f-1d1e-3625-baf5-08d66e30c4aa"]/div[3]/div/div/div[1]/div[1]/div');
  }

  get sliderElement() {
    return this.sliderElementList.$('//div[36]');
  }
}
module.exports = LocationSliderComponent;
