const BaseComponent = require('../common/base.component');

class LocationSelector extends BaseComponent {
  constructor() {
    super('//*[@id="jobSearchFilterForm"]/div[2]');
  }
  get label() {
    return $('label[for="new_form_job_search-location"]');
  }

  get country() {
    return $('//*[@id="select2-new_form_job_search-location-results"]/div[4]/div/div/li[37]');
  }

  get city() {
    return $('//*[@id="select2-new_form_job_search-location-results"]/div[4]/div/div/li[37]/ul/li[2]');
  }

  get selectIcon() {
    return $('//*[@id="jobSearchFilterForm"]/div[2]/div/span/span[1]/span/span[2]');
  }
}

module.exports = LocationSelector;
