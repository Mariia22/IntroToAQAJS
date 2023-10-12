const {HeaderComponent} = require('../components');

class BasePage {
  constructor(url) {
    this.url = url;
    this.header = new HeaderComponent();
  }

  open() {
    return browser.url(this.url);
  }

  get cookieAcceptButton() {
    return $('#onetrust-accept-btn-handler');
  }
}

module.exports = BasePage;
