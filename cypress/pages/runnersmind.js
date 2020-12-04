const frame = "#fci-container > iframe";
const shipToMeRadioButton = "#method-ship";
const addToCart = ".woocommerce-variation-add-to-cart-enabled > button";
const continueShopping =
  "#wrapper > div > div > div > div > a:nth-child(1) > span";
const shoppingCart_Validation = "#wrapper > div > div > div > span";
const spexcolorvarient = "#attr_img_total-lime-piece";
const viewcart = "#wrapper > div > div > div > div > a:nth-child(3)";
const viewcart_Validation = "tbody > tr.cart-subtotal > td > span";
const waitForPageLoad = 8000;

class runnersmind {

  static shipToMeRadioButton() {
    cy.wait(waitForPageLoad)
    cy.iframe(frame)
      .find(shipToMeRadioButton, { timeout: 15000 })
      .check({ force: true })
      .should("be.checked"); 
      cy.wait(waitForPageLoad)
  }

  static addToCart() {
    cy.wait(waitForPageLoad)
    cy.iframe(frame).find(addToCart, { timeout: 15000 }).click();
    
  }

  static continueShopping() {
    cy.wait(waitForPageLoad)
    cy.iframe(frame).find(continueShopping, { timeout: 10000 }).click();
    cy.frameLoaded(frame);
    cy.wait(waitForPageLoad)
  }

  static spexcolorvarient() {
    cy.iframe(frame)
      .find(spexcolorvarient, { timeout: 5000 })
      .click({ force: true });
      cy.wait(waitForPageLoad)
  }

  static verifyShoppingCart(Product) {
    cy.wait(waitForPageLoad)
    cy.iframe(frame)
      .find(shoppingCart_Validation)
      .contains("“"+Product+"” has been added to your cart.");
  }

  static viewcart() {
    cy.iframe(frame).find(viewcart, { timeout: 5000 }).click();
    cy.wait(waitForPageLoad)
  }

  static viewcartValidation() {
    cy.wait(waitForPageLoad)
    cy.iframe(frame).find(viewcart_Validation).should("have.text", "$260.00");
  }
}

export default runnersmind;