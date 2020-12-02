import { And, Then, When } from "cypress-cucumber-preprocessor/steps";
import HomePage from '../../../../pages/runnersMindFittedRunning/HomePage';
import CustomProductsPage from '../../../../pages/runnersMindFittedRunning/CustomProductsPage';

When(/^I click on the Custom Products Beta tab$/, () => {
    HomePage.customeProductsTab();
});

And(/^I click the dropdown arrow next to a product$/, () => {
    CustomProductsPage.customeProductsArrow();
});

Then(/^Check Product Name and Price fields are complete$/, () => {
    CustomProductsPage.customProductsNameValidation();
    CustomProductsPage.customProductsPriceValidation();
});
