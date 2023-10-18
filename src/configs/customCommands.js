const {Key} = require('webdriverio');

function overwriteCommands() {
  browser.overwriteCommand('click', async function(originClickFunction) {
    await this.waitForDisplayed();
    await originClickFunction();
  }, true);
}

function addCommands() {
  browser.addCommand('selectAndCopy', async function() {
    await browser.keys([Key.Ctrl, 'a']);
    await browser.keys([Key.Ctrl, 'c']);
  });
}

module.exports = {
  overwriteCommands,
  addCommands,
};
