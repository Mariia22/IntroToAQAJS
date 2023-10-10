const BaseComponent = require('../common/base.component');

class SearchResultList extends BaseComponent {
  constructor() {
    super('.search-result__list');
  }

  get listItems() {
    return $$('.search-result__list>li');
  }
}

module.exports = SearchResultList;
