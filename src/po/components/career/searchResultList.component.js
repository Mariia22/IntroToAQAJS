const BaseComponent = require('../common/base.component');

class SearchResultList extends BaseComponent {
  constructor() {
    super('.search-result__list');
  }

  get listItems() {
    return $$('.search-result__list>li');
  }

  get messageNoResult() {
    return $('.search-result__error-message-23');
  }
}

module.exports = SearchResultList;
