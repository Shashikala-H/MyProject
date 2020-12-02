import { And, Then, When } from "cypress-cucumber-preprocessor/steps";
import HomePage from '../../../../pages/runnersMindFittedRunning/HomePage';
import ProductsPage from '../../../../pages/runnersMindFittedRunning/ProductsPage';

When(/^I click on the Products tab$/, () => {
    HomePage.productsTab();
});

And('I search for {string} product', (searchText) => {
    ProductsPage.searchBox(searchText);
});

And(/^I click on get products button$/, () => {
    ProductsPage.getProducts();
});

Then(/^I check number of search results is greater than zero$/, () => {
    ProductsPage.validateSearchResult();
});

When(/^I click on clear filters$/, () => {
    ProductsPage.clearFilter();
});

When(/^I click on nike variation$/, () => {
    ProductsPage.nikeProductVariation();
});

When(/^I click on saucony variation$/, () => {
    ProductsPage.sauconyProductVariation();
});

Then(/^I validate the variation page$/, () => {
    ProductsPage.validateVariationDetail();
});