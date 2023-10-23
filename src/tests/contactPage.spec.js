const {pages} = require('../po/pages');

describe('Contact page', ()=>{
  beforeEach( async ()=>{
    await pages('main').open();
    await pages('main').cookieAcceptButton.click();
  });

  /* Task2 */

  it('Check horizontal scroll at the location slider', async ()=>{
    await pages('main').header.contactButton.click();
    await pages('contact').slider.getRegion('EMEA').click();
    await pages('contact').slider.sliderElement.scrollIntoView();
    await expect(pages('contact').slider.sliderElementList).toHaveTextContaining(['Malta', 'Montenegro', 'Netherlands', 'Poland'], {ignoreCase: true});
  });
});
