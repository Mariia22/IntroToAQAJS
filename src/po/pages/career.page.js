const {CareerFormComponent} = require('../components');
const BasePage = require('./base.page');

class CareerPage extends BasePage {
  constructor() {
    super('careers');
    this.form = new CareerFormComponent();
  }
}

module.exports = CareerPage;
