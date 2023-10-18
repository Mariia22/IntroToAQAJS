const CareerPage = require('./career.page');
const MainPage = require('./main.page');
const ContactPage = require('./contact.page');
const AboutPage = require('./about.page');

function pages(name) {
  const pages = {
    main: new MainPage(),
    career: new CareerPage(),
    contact: new ContactPage(),
    about: new AboutPage(),
  };

  return pages[name.toLowerCase()];
}

module.exports = {
  CareerPage,
  MainPage,
  ContactPage,
  AboutPage,
  pages,
};
