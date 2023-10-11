const BaseComponent = require('../common/base.component');

class LanguageMenuComponent extends BaseComponent {
  constructor() {
    super('.location-selector__list');
  }

  getLanguage(name) {
    const languages = {
      english: 'li:nth-child(1) > a',
      czech: 'li:nth-child(4) > a',
      polish: 'li:nth-child(11) > a',
      german: 'li:nth-child(10) > a',
    };

    return this.rootElement.$(languages[name.toLowerCase()]);
  }
}
module.exports = LanguageMenuComponent;
