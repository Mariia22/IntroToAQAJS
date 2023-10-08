const BaseComponent = require('../common/base.component');

class SkillsSelector extends BaseComponent {
  constructor() {
    super('//*[@id="new_form_job_search-department"]');
  }
  get label() {
    return $('label[for="new_form_job_search-department"]');
  }

  get selectedText() {
    return $('//*[@id="jobSearchFilterForm"]/div[3]/div/div[1]/div[1]');
  }
}

module.exports = SkillsSelector;
