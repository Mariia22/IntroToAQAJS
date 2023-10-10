const BasePage = require('./base.page');

class MainPage extends BasePage {
  constructor() {
    super('/');
  }

  get contactInfo() {
    return $('//*[@id="main"]/div[1]/div[2]/section/div[3]/div[3]/div/div[1]/div/div[2]');
  }
}
module.exports = MainPage;
