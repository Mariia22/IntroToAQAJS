const {CareerFormComponent, SearchResultList} = require('../components');
const BasePage = require('./base.page');

class CareerPage extends BasePage {
  constructor() {
    super('careers');
    this.form = new CareerFormComponent();
    this.searchList = new SearchResultList();
  }
}

module.exports = CareerPage;
