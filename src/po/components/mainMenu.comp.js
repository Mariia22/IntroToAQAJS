const BaseComponent = require("./base.comp");

class MainMenuComponent extends BaseComponent {
  constructor () {
    super('nav')
  }

  getItem(name) {
    const selectors = {
      services: '//li//span//a[@href="/services"]',
      industries: '//li//span//a[@href="/industries"]',
      insights: '//li//span//a[@href="/insights"]',
      about: '//li//span//a[@href="/about"]',
      careers: '//li//span//a[@href="/careers"]',
    }
    return this.rootElement.$(selectors[name.toLowerCase()])
  }
}

module.exports = MainMenuComponent
//*[@id="wrapper"]/div[2]/div[2]/div/div/header/div/div/nav/ul/li[5]/span[1]/a
