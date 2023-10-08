const {CareerPage} = require('../po/pages');

describe('Career page', ()=>{
  const careerPage = new CareerPage();
  const inputKeyword = careerPage.form.keywordInput;
  const locationSelector = careerPage.form.locationSelector;
  const skillsSelector = careerPage.form.skillsSelector;
  const submitButton = careerPage.form.submitButton;

  beforeEach( async ()=>{
    await careerPage.open();
  });

  it('Check page title', async ()=>{
    await expect(browser).toHaveTitle(
        'Explore Professional Growth Opportunities | EPAM Careers',
    );
  });

  it('Check keyInput label', async ()=>{
    await expect(inputKeyword.label).toHaveText('Keyword or job ID', {ignoreCase: true});
  });

  it('Check keyInput placeholder', async ()=>{
    await expect(inputKeyword.rootElement).toHaveAttribute('placeholder', 'Keyword');
  });

  it('Check location label', async () => {
    await expect(locationSelector.label).toHaveText('Location', {ignoreCase: true});
  });

  it('Check location placeholder', async ()=>{
    await expect(locationSelector.selectedText).toHaveText('All Cities in Latvia');
  });

  it('Check skills label', async () => {
    await expect(skillsSelector.label).toHaveText('Skills', {ignoreCase: true});
  });

  it('Check skills placeholder', async ()=>{
    await expect(skillsSelector.selectedText).toHaveText('All Skills');
  });

  it('Check button name', async ()=>{
    await expect(submitButton.rootElement).toHaveText('Find', {ignoreCase: true});
  });

  it('Check search using job search form', async ()=>{
    await inputKeyword.rootElement.setValue('Frontend');
    await submitButton.rootElement.click();
    await expect(careerPage.searchList.rootElement.isDisplayed());
  });
});
