const customeProductsArrow = "#MUIDataTableBodyRow-0>td>div>button>span.MuiIconButton-label>svg#expandable-button";
const productName = "div.MuiInput-formControl>input[placeholder='Product Name']";
const price = "#regular_price";

class CustomProductsPage {
    static customeProductsArrow() {
        cy.server();
        cy.route("GET", "/v1/3d075300-2d81-4b7d-98ef-577ef2872cdf").as("loadCustomProduct");
        cy.wait("@loadCustomProduct").then(() => {
            cy.get(customeProductsArrow).click();
        });
    }

    static customProductsNameValidation() {
        cy.get(productName, { timeout: 20000 }).invoke('attr', 'value').should('not.be.empty');
    }

    static customProductsPriceValidation() {
        cy.get(price).invoke('attr', 'value').should('not.be.empty');
    }
}
export default CustomProductsPage;