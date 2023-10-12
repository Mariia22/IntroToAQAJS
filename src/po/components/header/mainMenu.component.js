const BaseComponent = require('../common/base.component');

class MainMenuComponent extends BaseComponent {
  constructor() {
    super('nav');
  }

  getItem(name) {
    const selectors = {
      services: '//li//span//a[@href="/services"]',
      optimizingforgrowth: '//ul/li[1]/div/div/div[2]/ul[1]/li[1]/ul/li[1]/a',
      insights: '//li//span//a[@href="/insights"]',
      industries: '//ul/li[2]/span[1]/a',
      medtech: '//ul/li[2]/div/div/div[2]/ul[2]/li[1]/ul/li/a',
      about: '//li//span//a[@href="/about"]',
      careers: '//li//span//a[@href="/careers"]',
    };
    return this.rootElement.$(selectors[name.toLowerCase()]);
  }
}

module.exports = MainMenuComponent;

