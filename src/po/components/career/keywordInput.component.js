const BaseComponent = require('../common/base.component');

class KeywordInput extends BaseComponent {
  constructor() {
    super('#new_form_job_search-keyword');
  }

  get label (){
    return $('label[for="new_form_job_search-keyword"]');
  }

  get placeholder () {
    return $('#new_form_job_search-keyword')['placeholder']
  }
}

module.exports = KeywordInput
