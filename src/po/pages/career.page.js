const {CareerFormComponent, SearchResultList} = require('../components');
const BasePage = require('./base.page');

class CareerPage extends BasePage {
  constructor() {
    super('careers');
    this.form = new CareerFormComponent();
    this.searchList = new SearchResultList();
  }

  get cookieAcceptButton() {
    return $('#onetrust-accept-btn-handler');
  }
}

module.exports = CareerPage;
