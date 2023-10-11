const {pages} = require('../po/pages');

describe('Career page', ()=>{
  beforeEach( async ()=>{
    await pages('main').open();
    await pages('career').cookieAcceptButton.click();
  });

  /* Task1 */

  it('Check page title', async ()=>{
    await pages('main').header.menu.getItem('careers').click();
    await expect(browser).toHaveTitle(
        'Explore Professional Growth Opportunities | EPAM Careers',
    );
  });

  // I've overwritten base click()command, so scrolling is no longer needed.
  it('Check search using job search form', async ()=>{
    await pages('main').header.menu.getItem('careers').click();
    await pages('career').form.input.setValue('Frontend');
    await pages('career').form.locationSelector.selectIcon.click();
    // await pages('career').form.locationSelector.country.scrollIntoView();
    await pages('career').form.locationSelector.country.click();
    // await pages('career').form.locationSelector.city.scrollIntoView();
    await pages('career').form.locationSelector.city.click();
    // await pages('career').form.submitButton.scrollIntoView();
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
});
