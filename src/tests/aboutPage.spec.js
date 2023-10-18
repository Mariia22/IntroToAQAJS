const {pages} = require('../po/pages');

describe('About page', ()=>{
  beforeEach( async ()=>{
    await pages('main').open();
  });

  /* Task3 */

  it('Check statistic slider', async ()=>{
    await pages('main').header.menu.getItem('about').click();
    await pages('about').cookieAcceptButton.click();
    await (pages('about').statisticSlider.firstElement).click();
    await browser.action('wheel').scroll({
      deltaX: 0,
      deltaY: 400,
      duration: 200,
    }).perform();
    await expect(pages('about').statisticSlider.lastElementText).toHaveText('55,600+');
  });
});
