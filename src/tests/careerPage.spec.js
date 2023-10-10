const {pages} = require('../po/pages');

describe('Career page', ()=>{
  beforeEach( async ()=>{
    await pages('main').open();
  });

  it('Check page title', async ()=>{
    await pages('main').header.menu.getItem('careers').click();
    await expect(browser).toHaveTitle(
        'Explore Professional Growth Opportunities | EPAM Careers',
    );
  });

  it('Check search using job search form', async ()=>{
    await pages('main').header.menu.getItem('careers').click();
    await pages('career').form.input.setValue('Frontend');
    await pages('career').form.locationSelector.selectIcon.click();
    await pages('career').form.locationSelector.country.scrollIntoView();
    await pages('career').form.locationSelector.country.click();
    await pages('career').form.locationSelector.city.scrollIntoView();
    await pages('career').form.locationSelector.city.click();
    await pages('career').form.submitButton.scrollIntoView();
    await pages('career').form.submitButton.click();
    await expect(pages('career').searchList.listItems).toBeElementsArrayOfSize(2);
  });
});
