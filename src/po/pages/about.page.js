const {statisticSliderComponent} = require('../components');
const BasePage = require('./base.page');

class AboutPage extends BasePage {
  constructor() {
    super('about/who-we-are/contact');
    this.statisticSlider = new statisticSliderComponent();
  }
}
module.exports = AboutPage;
