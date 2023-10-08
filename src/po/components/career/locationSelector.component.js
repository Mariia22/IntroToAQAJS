const BaseComponent = require('../common/base.component');

class LocationSelector extends BaseComponent {
  constructor() {
    super('//*[@id="jobSearchFilterForm"]/div[2]');
  }
  get label() {
    return $('label[for="new_form_job_search-location"]');
  }

  get selectedText() {
    return $('//*[@id="jobSearchFilterForm"]/div[2]/div/span/span[1]/span/span[1]');
  }
}

module.exports = LocationSelector;
