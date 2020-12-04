import { And, Then } from "cypress-cucumber-preprocessor/steps";
import CustomProductsPage from '../../../../pages/runnersMindFittedRunning/CustomProductsPage';

And(/^I click the dropdown arrow next to a product$/, () => {
    CustomProductsPage.customeProductsArrow();
});

Then(/^Check Product Name and Price fields are complete$/, () => {
    CustomProductsPage.customProductsNameValidation();
    CustomProductsPage.customProductsPriceValidation();
});
