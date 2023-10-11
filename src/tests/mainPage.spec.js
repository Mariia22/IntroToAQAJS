const {pages} = require('../po/pages');

describe('Main page', ()=>{
  beforeEach( async ()=>{
    await pages('main').open();
  });

  /* Task1 */

  it('Check the modification of the \'Contact us\' button\'s color and background color (light mode) after hovering', async ()=>{
    await (pages('main').header.themeSwitcher).click();
    await (pages('main').header.contactButton).moveTo();
    const color = await (pages('main').header.contactButtonText).getCSSProperty('color');
    const backgroundColor = await (pages('main').header.contactButton).getCSSProperty('backgroundColor');
    await expect(color.value).toBe('rgba(255,255,255,1)');
    await expect(backgroundColor.value).toBe('rgba(0,0,0,1)');
  });

  it('Check search button at the header', async () => {
    await (pages('main').header.searchButton).click();
    await (pages('main').header.input).setValue('Contacts');
    await (pages('main').header.findButton).click();
    await expect(pages('main').header.searchResults).toHaveLink('/about/who-we-are/contact');
  });

  it('Check the navigation through nested menu items', async () => {
    await (pages('main').header.menu.getItem('industries')).moveTo();
    await (pages('main').header.menu.getItem('medtech')).click();
    await expect(browser).toHaveUrl('https://www.epam.com/industries/life-sciences-and-healthcare/medtech');
  });

  it('Check the navigation through hamburger menu', async () => {
    await (pages('main').header.hamburgerMenuButton).click();
    await (pages('main').header.hamburgerMenu.getItem('about')).click();
    await (pages('main').header.hamburgerMenu.getItem('aboutCompany')).click();
    await (pages('main').header.hamburgerMenu.getItem('contact')).click();
    await expect(pages('main').contactInfo).toHaveTextContaining(['41 University Drive • Suite 202,', ' Newtown, PA 18940 • USA ', 'P +1-267-759-9000', 'F +1-267-759-8989']);
  });

  /* Task2 */

  // I use my new command 'waitThenClick'
  it('Check language switch', async () => {
    await (pages('main').header.switchLanguageButton).click();
    await (pages('main').header.languageMenu.getLanguage('German')).waitThenClick();
    await expect(browser).toHaveUrl('https://www.epam.de/');
  });
});
