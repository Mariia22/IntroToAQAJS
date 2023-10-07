const {CareerPage} = require('../po/pages');

describe('Career page', ()=>{
  const careerPage = new CareerPage();
  
  beforeEach( async ()=>{
    await careerPage.open();
  });

  // it('Check page title', async ()=>{
  //   await expect(browser).toHaveTitle(
  //     'Explore Professional Growth Opportunities | EPAM Careers'
  //     );
  // });

  it('Check keyInput attributes', async ()=>{
    const input = careerPage.form.keywordInput
    await expect(input.label).toHaveText('Keyword or job ID', {ignoreCase:true});
    
   // const placeholder = await careerPage.form.keywordInput.getProperty('placeholder')
    await expect(input.placeholder).toBe('Keyword', {ignoreCase:true});
  });
});
