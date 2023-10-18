const {SliderComponent} = require('../components');
const BasePage = require('./base.page');

class MainPage extends BasePage {
  constructor() {
    super('/');
    this.slider = new SliderComponent();
  }
}
module.exports = MainPage;
