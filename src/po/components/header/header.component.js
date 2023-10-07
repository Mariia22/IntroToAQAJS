const BaseComponent = require('../common/base.component');
const MainMenuComponent = require('./mainMenu.component');

class HeaderComponent extends BaseComponent {
  constructor() {
    super('.header-ui-23');
    this.menu = new MainMenuComponent();
  }
}
module.exports = HeaderComponent;
