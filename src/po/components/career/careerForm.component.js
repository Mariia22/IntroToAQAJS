const BaseComponent = require('../common/base.component');
const LocationSelector = require('./locationSelector.component');
const SkillsSelector = require('./skillsSelector.component');

class CareerFormComponent extends BaseComponent {
  constructor() {
    super('#jobSearchFilterForm');
    this.locationSelector = new LocationSelector();
    this.skillsSelector = new SkillsSelector();
  }
  get input() {
    return $('#new_form_job_search-keyword');
  }

  get inputLabel() {
    return $('label[for="new_form_job_search-keyword"]');
  }

  get submitButton() {
    return $('#jobSearchFilterForm > button');
  }

  get officeCheckbox() {
    return $('#jobSearchFilterForm > fieldset > div > p:nth-child(2)');
  }

  get relocationCheckbox() {
    return $('#jobSearchFilterForm > fieldset > div > p:nth-child(3)');
  }
}

module.exports = CareerFormComponent;

