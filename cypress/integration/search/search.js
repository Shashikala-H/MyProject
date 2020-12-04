import { When, Then } from 'cypress-cucumber-preprocessor/steps';

import HomePage from '../../../pages/homePage';

When(/^Press 'Search'$/, () => {
  HomePage.pressSearch();
});
