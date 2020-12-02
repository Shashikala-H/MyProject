import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import homepage_shoeshoprunning from '../../../pages/homepage_shoeshoprunning'
import shoeshoprunning from '../../../pages/shoeshoprunning'

Given(/^I'm at fittedsite$/, () => {
  homepage_shoeshoprunning.visit();
});

When(/^I select ship To me option$/, () => {
  shoeshoprunning.selectitem();
});

And(/^Click the product and Check Ship to me option is enabled$/, () => {
  homepage_shoeshoprunning.selectProduct();
  shoeshoprunning.selectSize(4);
  shoeshoprunning.checkRadioButton();
});

And(/^Click Add to cart button and Check the product is in the cart$/, () => {
  shoeshoprunning.addToCartButton();
  shoeshoprunning.shoppingCart();
});

And(/^Click the continue shopping Button$/, () => {
  shoeshoprunning.continueShopping();
});

And(/^Click the Second product and Check Ship to me option is enabled$/, () => {
  homepage_shoeshoprunning.selectSecondProduct();
  shoeshoprunning.selectSize(7);
  shoeshoprunning.checkRadioButton();
});

And(/^Click Add to cart button and Check the second product is in the cart$/, () => {
  shoeshoprunning.addToCartButton();
  shoeshoprunning.secondShoppingCart();
});

And(/^Click the continue shopping button$/, () => {
  shoeshoprunning.continueShopping();
});

And(/^Click the Third product and Check Ship to me option is enabled$/, () => {
  homepage_shoeshoprunning.selectThirdProduct();
  shoeshoprunning.selectSize(9);
  shoeshoprunning.checkRadioButton();
});

And(/^Click Add to cart button and Check the third product is in the cart$/, () => {
  shoeshoprunning.addToCartButton();
  shoeshoprunning.ThirdShoppingCart();
});

And(/^Click the view cart button and Check the total price$/, () => {
  shoeshoprunning.viewCart();
  shoeshoprunning.checkTotalPrice();
});

And(/^Click proceed to checkout button$/, () => {
  shoeshoprunning.proceedToCheckout();
});

And(/^Enter the first Name$/, () => {
  shoeshoprunning.firstName();
});

And(/^Enter the Last Name$/, () => {
  shoeshoprunning.lastName();
});

And(/^Enter the Address$/, () => {
  shoeshoprunning.address();
});

And(/^Enter the city$/, () => {
  shoeshoprunning.city();
});

And(/^Enter the State$/, () => {
  shoeshoprunning.state();
});

And(/^Enter the Zipcode$/, () => {
  shoeshoprunning.zipcode();
});

And(/^Enter the Phone number$/, () => {
  shoeshoprunning.phoneNumber();
});

And(/^Enter the Email address$/, () => {
  shoeshoprunning.emailAddress();
});

And(/^Enter the Card Details$/, () => {
  shoeshoprunning.cardDetails();
});

And(/^click the place order Button$/, () => {
  shoeshoprunning.placeOrder();
});

Then(/^Check whether order is placed$/, () => {
  shoeshoprunning.orderValidation();
});

