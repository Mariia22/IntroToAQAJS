const {MainPage} = require('../po/pages');

describe('main menu links', ()=> {
  const mainPage = new MainPage();

  beforeEach(async ()=>{
    await mainPage.open();
  });

  it('should open services page', async () => {
    await mainPage.header.menu.getItem('services').click();
    expect(browser).toHaveUrl('/services');
  });

  it('should open insights page', async () => {
    await mainPage.header.menu.getItem('insights').click();
    expect(browser).toHaveUrl('/insights');
  });

  it('should open about page', async () => {
    await mainPage.header.menu.getItem('about').click();
    expect(browser).toHaveUrl('/about');
  });

  it('should open career page', async () => {
    await mainPage.header.menu.getItem('careers').click();
    expect(browser).toHaveUrl('/careers');
  });
});
