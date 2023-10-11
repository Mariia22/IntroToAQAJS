function overwriteCommands() {
  browser.overwriteCommand('click', async function (originClickFunction) {
    await this.scrollIntoView()
    await originClickFunction()
  },true)
}

module.exports = {
  overwriteCommands
}
