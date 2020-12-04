import { When } from "cypress-cucumber-preprocessor/steps";
import HomePage from '../../../../pages/runnersMindFittedRunning/HomePage';

When(/^I click on the Products tab$/, () => {
    HomePage.productsTab();
});

When(/^I click on the Custom Products Beta tab$/, () => {
    HomePage.customeProductsTab();
});