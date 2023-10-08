const BaseComponent = require('../common/base.component');

class FindButton extends BaseComponent {
  constructor() {
    super('#jobSearchFilterForm > button');
  }
}

module.exports = FindButton;
