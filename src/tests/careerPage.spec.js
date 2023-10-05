const { CareerPage, MainPage } = require("../po/pages");

const careerPage = new CareerPage()
const mainPage = new MainPage()

describe('test', ()=>{
  
  beforeEach( async()=>{
    await mainPage.open()
  })
  
  it('should career page is opened', async ()=>{
   await mainPage.menu.getItem('careers').click();
    expect(browser.url).toHaveUrl('/careers')
  });
});
