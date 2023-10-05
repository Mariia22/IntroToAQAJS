const { HeaderComponent, MainMenuComponent } = require("../components");

class BasePage {
  constructor(url){
    this.url = url
    this.header = new HeaderComponent();
    this.menu = new MainMenuComponent();
  }

  open() {
    return browser.url(this.url)
  }
}

module.exports = BasePage
