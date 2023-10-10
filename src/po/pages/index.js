const CareerPage = require('./career.page');
const MainPage = require('./main.page');

function pages(name) {
  const pages = {
    main: new MainPage(),
    career: new CareerPage(),
  };

  return pages[name.toLowerCase()];
}

module.exports = {
  CareerPage,
  MainPage,
  pages,
};
