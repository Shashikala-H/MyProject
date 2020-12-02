const frame = "#fci-container > iframe";
const shipToMeRadioButton = "#method-ship";
const addToCart = ".woocommerce-variation-add-to-cart-enabled > button";
const shoppingCart = "#wrapper > div > div > div > span";
const continueShopping =
  "#wrapper > div > div > div > div > a:nth-child(1) > span";

const shoppingCart_Validation = "#wrapper > div > div > div > span";
const spexcolorvarient = "#attr_img_talk-birdie-to-me";
const viewcart = "#wrapper > div > div > div > div > a:nth-child(3)";
const viewcart_Validation = "tbody > tr.cart-subtotal > td > span";

class runnersmind {

  static shipToMeRadioButton() {
    cy.iframe(frame)
      .find(shipToMeRadioButton, { timeout: 15000 })
      .check({ force: true })
      .should("be.checked");
      
    cy.wait(5000);
  }

  static addToCart() {
    cy.iframe(frame).find(addToCart, { timeout: 15000 }).click();
    cy.wait(5000);
  }

  static shoppingCart() {
    cy.iframe(frame)
      .find(shoppingCart, { timeout: 15000 })
      .should(
        "have.text",
        "“Currex RunPro Dynamic Insoles” has been added to your cart."
      );
  }

  static continueShopping() {
    cy.iframe(frame).find(continueShopping, { timeout: 10000 }).click();
    cy.wait(5000);
  }

  static shoppingCart_Validation() {
    cy.iframe(frame)
      .find(shoppingCart_Validation)
      .should(
        "have.text",
        "“Nike Flex Stride Short 5″” has been added to your cart."
      );
  }

  static spexcolorvarient() {
    cy.iframe(frame)
      .find(spexcolorvarient, { timeout: 5000 })
      .click({ force: true });
    cy.wait(5000);
  }

  static shopping_CartValidation() {
    cy.iframe(frame)
      .find(shoppingCart_Validation)
      .should(
        "have.text",
        "“goodr Runway Sunglasses” has been added to your cart."
      );
  }

  static viewcart() {
    cy.iframe(frame).find(viewcart, { timeout: 5000 }).click();
    cy.wait(5000);
  }
  static viewcartValidation() {
    cy.iframe(frame).find(viewcart_Validation).should("have.text", "$130.00");
  }
}

export default runnersmind;
