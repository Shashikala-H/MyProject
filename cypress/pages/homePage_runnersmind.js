const productlink =
  ".product_cat-insoles-2.product_tag-currex.has-post-thumbnail.taxable.shipping-taxable.purchasable.product-type-variable.has-default-attributes > div > div.product-small.box > div.box-image > div.image-fade_in_back > a > img.show-on-hover.absolute.fill.hide-for-small.back-image";
const secondProduct =
  "a > img.show-on-hover.absolute.fill.hide-for-small.back-image";
const thirdProduct =
  ".post-118993.status-publish.instock.product_cat-accessories.product_cat-sunglasses.product_tag-goodr.has-post-thumbnail.taxable.shipping-taxable.purchasable.product-type-variable.has-default-attributes > div > div.product-small.box > div.box-image > div.image-fade_in_back > a > img.show-on-hover.absolute.fill.hide-for-small.back-image";
const frame = "#fci-container > iframe";
const searchBar = "aside>div>form>div>input[id^=dgwt-wcas-search-input]";
const filter = "label.prdctfltr_ft_accessories.pfw--has-childeren > span";
const colorvarient1 = "#attr_img_nike-flex-stride-short-5-black-reflective-silv";
const categoriesWomensShoes = ".prdctfltr_ft_womens-shoes";
const brandAltra = ".prdctfltr_ft_altra";
const waitForPageLoad = 8000;

class homePage_runnersmind {

  static visit1() {
    cy.visit(Cypress.env("host"));
    cy.wait(waitForPageLoad);
    cy.url().should("include", Cypress.env("host"));
  }

  static productlink() {
    cy.iframe(frame).find(productlink,{timeout:15000}).click({ force: true }).should('be.visible') ;
    cy.wait(waitForPageLoad)
  }

  static searchBar() {
    cy.wait(3000);
    cy.iframe(frame).find(searchBar,{timeout:15000}).type("Nike Flex Stride Short 5{enter}");
    cy.wait(waitForPageLoad)
  }

  static secondProduct() {
    cy.iframe(frame).find(secondProduct,{timeout:15000}).click({ force: true });
    cy.wait(waitForPageLoad)
  }

  static filter() {
    cy.wait(waitForPageLoad)
    cy.iframe(frame).find(filter,{timeout:15000}).click();
  }

  static thirdProduct() {
    cy.iframe(frame).find(thirdProduct,{timeout:15000}).click({ force: true });
    cy.wait(waitForPageLoad)
  }

  static colorvarient() {
    cy.iframe(frame).find(colorvarient1,{timeout:10000}).click({ force: true });
    cy.wait(waitForPageLoad)
  }

  static selectCategories() {
    cy.wait(waitForPageLoad)
    cy.iframe(frame).find(categoriesWomensShoes,{timeout:15000}).click();
  }

  static selectBrand()
  {
    cy.wait(waitForPageLoad)
    cy.iframe(frame).find(brandAltra,{timeout:15000}).click();
  }

  static fourthProduct()
  {
    cy.wait(waitForPageLoad)
    cy.iframe(frame).contains("Altra Escalante 2.5").click();
  }
}
export default homePage_runnersmind;
