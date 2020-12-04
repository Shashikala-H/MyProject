import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import homePage_runnersmind from "../../../pages/homePage_runnersmind";
import HomePage_arunnersmind from '../../../pages/homePage_runnersmind'
import runnersmind from '../../../pages/runnersmind'


Given(/^I'm at runnersmind webpage$/, () => {   
  HomePage_arunnersmind.visit1();   
});

When(/^I click the product and Check Ship to me option is Enabled$/, () => {
  HomePage_arunnersmind.productlink();
  runnersmind.shipToMeRadioButton();
});

And(/^I Click Add to cart button$/, () => {
  runnersmind.addToCart();
});

// Then(/^Check the product is in the Cart$/, () => {
//   runnersmind.shoppingCart();
// });

And(/^Click the continue Shopping$/, () => {
  runnersmind.continueShopping();
});

Then(/^Search a product by using searchbar$/, () => {
  HomePage_arunnersmind.searchBar();
});

When(/^I click the second product$/, () => {
  HomePage_arunnersmind.secondProduct();
});

And(/^select the different Color varient and Check Ship to me option is Enabled$/, () => {
  HomePage_arunnersmind.colorvarient();
  runnersmind.shipToMeRadioButton();
});

When(/^I Click Add to cart button$/, () => {
  runnersmind.shipToMeRadioButton();
  runnersmind.addToCart();
});

And(/^Click the continue Shopping$/, () => {
  runnersmind.continueShopping();
});

Then(/^Select a product using filters$/, () => {
  HomePage_arunnersmind.filter();
});

When(/^I click the third product$/, () => {
  HomePage_arunnersmind.thirdProduct();
});

And(/^select the different color varient and Check Ship to me option is Enabled$/, () => {
  runnersmind.spexcolorvarient();
});

Then('Check the {string} is in the Cart', (Product) => {
  runnersmind.verifyShoppingCart(Product);
});

And(/^Select Multiple filters$/, () => {
   homePage_runnersmind.selectCategories();
   homePage_runnersmind.selectBrand();
});

And(/^Select the fourth product$/, () => {
   homePage_runnersmind.fourthProduct();
});

Then(/^Click the viewcart button and validate the price$/, () => {
  runnersmind.viewcart();
  runnersmind.viewcartValidation();
});
