const BaseComponent = require('../common/base.component');
const KeywordInput = require('./keywordInput.component');

class CareerFormComponent extends BaseComponent {
  constructor() {
    super('#jobSearchFilterForm');
    this.keywordInput = new KeywordInput();
  }
}

module.exports = CareerFormComponent

