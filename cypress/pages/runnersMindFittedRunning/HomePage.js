const customeProducts = "#toplevel_page_fitted-connect-custom-products > a > div.wp-menu-image";
const products = "#toplevel_page_fitted-connect-products > a > div.wp-menu-image";

class HomePage {
    static customeProductsTab() {
        cy.get(customeProducts).click();
    }

    static productsTab() {
        cy.server();
        cy.route("GET", "/v1/3d075300-2d81-4b7d-98ef-577ef2872cdf").as("loadProducts");
        cy.wait("@loadProducts").then(() => {
        cy.get(products).click();
        });
    }
}
export default HomePage;