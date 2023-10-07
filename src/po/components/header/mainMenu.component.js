const BaseComponent = require('../common/base.component');

class MainMenuComponent extends BaseComponent {
  constructor() {
    super('nav');
  }

  getItem(name) {
    const selectors = {
      services: '//li//span//a[@href="/services"]',
      insights: '//li//span//a[@href="/insights"]',
      about: '//li//span//a[@href="/about"]',
      careers: '//li//span//a[@href="/careers"]',
    };
    return this.rootElement.$(selectors[name.toLowerCase()]);
  }
}

module.exports = MainMenuComponent;

