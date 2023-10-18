const {pages} = require('../po/pages');
const {Key} = require('webdriverio');

describe('Career page', ()=>{
  beforeEach( async ()=>{
    await pages('main').open();
  });

  /* Task1 */

  it('Check page title', async ()=>{
    await pages('main').header.menu.getItem('careers').click();
    await expect(browser).toHaveTitle(
        'Explore Professional Growth Opportunities | EPAM Careers',
    );
  });

  it('Check search using job search form', async ()=>{
    await pages('main').header.menu.getItem('careers').click();
    await pages('career').cookieAcceptButton.click();
    await pages('career').form.input.setValue('Frontend');
    await pages('career').form.locationSelector.selectIcon.click();
    await pages('career').form.locationSelector.country.click();
    await pages('career').form.locationSelector.city.click();
    await pages('career').form.submitButton.click();
    await expect(pages('career').searchList.listItems).toBeElementsArrayOfSize(2);
  });

  /* Task2 */

  it('Check message when there no searching results', async ()=>{
    await pages('main').header.menu.getItem('careers').click();
    await pages('career').form.input.setValue('Frontend');
    await pages('career').form.officeCheckbox.click();
    await pages('career').form.relocationCheckbox.click();
    await pages('career').form.submitButton.click();
    await expect(pages('career').searchList.messageNoResult).toHaveText('Sorry, your search returned no results. Please try another combination.');
  });

  // I use new added command "Select and copy"
  it('Check copy/paste command from one input to another', async () =>{
    await pages('main').header.menu.getItem('careers').click();
    await pages('career').form.input.setValue('Frontend');
    await browser.selectAndCopy();
    await (pages('main').header.searchButton).click();
    await (pages('main').header.input).click();
    await browser.keys([Key.Ctrl, 'v']);
    await expect(pages('main').header.input).toHaveValue('Frontend');
  });

  /* Task3 */

  it('Check tooltip appears after hovering on the checkbox', async ()=>{
    await pages('main').header.menu.getItem('careers').click();
    await pages('career').cookieAcceptButton.click();
    await pages('career').form.officeCheckbox.scrollIntoView();
    await pages('career').form.officeCheckbox.moveTo();
    const content = await browser.execute(() => {
      const style = document.defaultView.getComputedStyle(document.querySelector('.recruiting-search__filter-icon[data-title="Work from office"]'), '::after');
      return style.getPropertyValue('content');
    });
    await expect(content).toBe('\"Work from office\"');
  });
});
