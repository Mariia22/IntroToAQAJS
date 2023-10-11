function overwriteCommands() {
  browser.overwriteCommand('click', async function (originClickFunction) {
    await this.scrollIntoView()
    await originClickFunction()
  },true)
}

function addCommands() {
  browser.addCommand('waitThenClick', async function() {
      await this.waitForExist();
      await this.waitForDisplayed();
      await this.click();
  }, true)
}

module.exports = {
  overwriteCommands,
  addCommands
}
