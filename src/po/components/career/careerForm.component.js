const BaseComponent = require('../common/base.component');
const FindButton = require('./findButton.component');
const KeywordInput = require('./keywordInput.component');
const LocationSelector = require('./locationSelector.component');
const SkillsSelector = require('./skillsSelector.component');

class CareerFormComponent extends BaseComponent {
  constructor() {
    super('#jobSearchFilterForm');
    this.keywordInput = new KeywordInput();
    this.locationSelector = new LocationSelector();
    this.skillsSelector = new SkillsSelector();
    this.submitButton = new FindButton();
  }
}

module.exports = CareerFormComponent;

