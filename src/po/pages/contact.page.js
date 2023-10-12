const {LocationSliderComponent} = require('../components');
const BasePage = require('./base.page');

class ContactPage extends BasePage {
  constructor() {
    super('about/who-we-are/contact');
    this.slider = new LocationSliderComponent();
  }

  get contactInfo() {
    return $('//*[@id="main"]/div[1]/div[2]/section/div[3]/div[3]/div/div[1]/div/div[2]');
  }
}
module.exports = ContactPage;
