const BaseComponent = require('../common/base.component');
const HamburgerMenuComponent = require('./hamburgerMenu.component');
const LanguageMenuComponent = require('./languageMenu.component');
const MainMenuComponent = require('./mainMenu.component');

class HeaderComponent extends BaseComponent {
  constructor() {
    super('.header-ui-23');
    this.menu = new MainMenuComponent();
    this.hamburgerMenu = new HamburgerMenuComponent();
    this.languageMenu = new LanguageMenuComponent();
  }

  get contactButton() {
    return $('//*/header/div/div/a[2]');
  }

  get contactButtonText() {
    return $('//*/header/div/div/a[2]/span');
  }

  get themeSwitcher() {
    return $('//*/header/div/div/section/div');
  }

  get searchButton() {
    return $('.header-search__button');
  }

  get input() {
    return $('#new_form_search');
  }

  get findButton() {
    return $('div.search-results__action-section > button');
  }

  get searchResults() {
    return $('div.search-results__items > article:nth-child(1) > h3 > a');
  }

  get hamburgerMenuButton() {
    return $('.hamburger-menu__button');
  }

  get switchLanguageButton () {
    return $('.location-selector__button');
  }
}
module.exports = HeaderComponent;
