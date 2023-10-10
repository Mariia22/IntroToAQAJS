const BaseComponent = require('../common/base.component');

class HamburgerMenuComponent extends BaseComponent {
  constructor() {
    super('nav');
  }

  getItem(name) {
    const selectors = {
      services: '//li[1]/a',
      insights: '//ul/div[4]/div/div/li[2]/a',
      industries: '//ul/div[4]/div/div/li[3]/a',
      about: '//ul/div[4]/div/div/li[4]',
      careers: '//ul/div[4]/div/div/li[5]/a',
      aboutcompany: '//ul/div[4]/div/div/li[4]/ul/li[1]',
      contact: '//ul/div[4]/div/div/li[4]/ul/li[1]/ul/li[7]/a',
    };
    return this.rootElement.$(selectors[name.toLowerCase()]);
  }
}

module.exports = HamburgerMenuComponent;

