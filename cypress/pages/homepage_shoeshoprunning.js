const product1 =
  ".product_cat-running-shoes.product_cat-running-shoes-womens-shoes.product_cat-womens-shoes.product_tag-diadora.has-post-thumbnail.taxable.shipping-taxable.purchasable.product-type-variable.has-default-attributes > div > div.product-small.box > div.box-image > div.image-fade_in_back > a > img";
const secondProduct =
  ".product_cat-womens-shoes.product_tag-brooks.has-post-thumbnail.taxable.shipping-taxable.purchasable.product-type-variable.has-default-attributes > div > div.product-small.box > div.box-image > div.image-fade_in_back > a > img.show-on-hover.absolute.fill.hide-for-small.back-image";
const thirdProduct =
  ".post-57688.status-publish.instock.product_cat-mens-shoes.product_cat-running-shoes.product_tag-diadora.has-post-thumbnail.taxable.shipping-taxable.purchasable.product-type-variable.has-default-attributes > div > div.product-small.box > div.box-image > div.image-fade_in_back > a > img.show-on-hover.absolute.fill.hide-for-small.back-image";

const color = "#attr_img_black-silver";

class homepage_shoeshoprunning {
  static visit() {
    cy.visit("/");
  }

  static selectProduct() {
    cy.get(product1, { timeout: 30000 }).click({ force: true });
  }

  static selectSecondProduct() {
    cy.get(secondProduct, { timeout: 10000 }).click({ force: true });
  }

  static selectThirdProduct() {
    cy.get(thirdProduct, { timeout: 10000 }).click({ force: true });
    cy.get(color).click({ force: true }, { timeout: 10000 });
  }
}
export default homepage_shoeshoprunning;
