import * as cardDetails from "../data/cardDetails.json";
import * as message from "../data/constantMessage.json";
import * as userDetails from "../data/userDetails.json";

const ShipToMe = ".prdctfltr_ft_dropship > span";
const radioButton = "#method-ship";
const addToCart = ".woocommerce-variation-add-to-cart-enabled > button";
const shoppingCart = "#wrapper > div > div > div > span";
const continueShopping = "#wrapper>div>div>div>div>a:nth-child(1)>span";
const secondShoppingCart = "#wrapper > div > div > div > span";
const thirdShoppingCart = "#wrapper > div > div > div > span";
const viewcart = "#wrapper > div > div > div > div > a:nth-child(3) > span";
const totalPrice = "tr.cart-subtotal > td > span";
const proceedToCheckout = "div > div.cart_totals > div > a";
const proceedToCheckoutButton = "div > div.cart_totals > div > a";
const firstName = "#billing_first_name";
const lastname = "#billing_last_name";
const address = "#billing_address_1";
const city = "#billing_city";
const state = "#select2-billing_state-container";
const zipcode = "#billing_postcode";
const phoneNumber = "#billing_phone";
const email = "#billing_email";
const frame = "#stripe-card-element > div > iframe";
const placeorder = "#place_order";
const orderValidation =
  ".page-checkout > div > div > div.large-5.col > div > p > strong";
const shoeSize = "#attr_img_";  

class shoeshoprunning {

  static selectitem() {
         cy.get(ShipToMe, { timeout: 10000 }).click();
    }

  static selectSize(size) {
    cy.get(shoeSize + size, { timeout : 10000})
       .check({ force: true })
       .should("be.checked");
  }  

  static checkRadioButton() {
    cy.get(radioButton, { timeout: 15000 })
      .check({ force: true })
      .should("be.checked");
  }

  static addToCartButton() {
    cy.get(addToCart, { timeout: 5000 }).click({ force: true });
  }

  static shoppingCart() {
    cy.get(shoppingCart).should(
      "have.text",
      message.product1
    );
  }

  static continueShopping() {
    cy.get(continueShopping).click();
  }

  static secondShoppingCart() {
    cy.get(secondShoppingCart).should(
      "have.text",
      message.product2
      );
  }

  static ThirdShoppingCart() {
    cy.get(thirdShoppingCart, { timeout: 3000 }).should(
      "have.text",
      message.product3
    );
  }

  static viewCart() {
    cy.get(viewcart).click({ force: true });
  }

  static checkTotalPrice() {
    cy.get(totalPrice).should("have.text", "$355.00");
  }

  static proceedToCheckout() {
    cy.get(proceedToCheckout).click();
  }

  static proceedToCheckoutButton() {
    cy.get(proceedToCheckoutButton).should("be.visible");
  }

  static firstName() {
    cy.server();
    cy.route("POST", "/?wc-ajax=wc_stripe_get_cart_details").as("loadCart");
     
    cy.wait("@loadCart").then(() => {  
        cy.get(firstName).type(userDetails.firstName);
  });
}

  static lastName() {
    cy.get(lastname).type(userDetails.lastName);
  }

  static address() {
    cy.get(address).type(userDetails.address);
  }

  static city() {
    cy.get(city).type(userDetails.city);
  }

  static state() {
    cy.get(state).click().type(userDetails.state);
  }

  static zipcode() {
    cy.get(zipcode).type(userDetails.zipcode);
  }

  static phoneNumber() {
    cy.get(phoneNumber).type(userDetails.phoneNumber);
  }
  static emailAddress() {
    cy.get(email).type(userDetails.email);
  }

  static cardDetails() {
    cy.server();
    cy.route("POST", "/?wc-ajax=wc_stripe_get_cart_details").as("loadCart");
    cy.wait("@loadCart").then(() => {  
      
    cy.get(frame, { timeout: 15000 }).then(function ($iframe) {
      const body = $iframe.contents().find("body");
      cy.wrap(body)
        .find("input:eq(1)")
        .type(cardDetails.cardNumber);
      cy.wrap(body)
        .find("input:eq(2)")
        .type(cardDetails.expiryDate);
      cy.wrap(body)
        .find("input:eq(3)")
        .type(cardDetails.CVVNumber);
    });
  });
}

  static placeOrder() {
    cy.get(placeorder).click();
  }

  static orderValidation() {
    cy.route("POST", "/?wc-ajax=checkout").as("checkout");
    cy.wait("@checkout").then(() => {
    cy.get(orderValidation).should(
      "have.text",
      message.orderSuccessful
    );
    });
  }
}

export default shoeshoprunning;
