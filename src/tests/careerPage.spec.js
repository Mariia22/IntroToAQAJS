const { CareerPage } = require("../po/pages");

const careerPage = new CareerPage()

describe('test', ()=>{
  
  beforeEach( async()=>{
    await careerPage.open()
  })
  
  it('test', async ()=>{
    console.log(1)
  });
});
