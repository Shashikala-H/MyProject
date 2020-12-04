const searchBox = "div.MuiFormControl-root.MuiTextField-root.jss8 > div > input"
const getProductsButton = " button.MuiButton-containedPrimary > span.MuiButton-label";
const searchResult = "div.MuiToolbar-root > div > div > h6";
const clearFiltersButton = "button.MuiButtonBase-root.MuiButton-root.MuiButton-outlined.jss7.MuiButton-outlinedPrimary > span.MuiTouchRipple-root";
const sauconyVariation = "#MUIDataTableBodyRow-0 > td > div > button > span.MuiIconButton-label > svg > path";
const variationDetailLink = " div[aria-labelledby='Variation Details Modal']>div > div > div > a";
const nikeVariation = "td[data-testid=MuiDataTableBodyCell-0-0] > div > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root";

class ProductPage {
    static searchBox(searchText) {
        cy.get(searchBox).clear().type(searchText);
    }

    static getProducts() {
        cy.get(getProductsButton).click({ force: true });
    }

    static validateSearchResult() {
        cy.get(searchResult, { timeout: 10000 }).invoke('text').then(text => {
            var productCount = text.match(/[0-9]+/g);
            productCount = Number(productCount);
            expect(productCount).to.be.greaterThan(0);
        })
    }

    static clearFilter() {
        cy.get(clearFiltersButton).click({ force: true });
    }

    static sauconyProductVariation() {
        cy.get(sauconyVariation).click({ timeout: 10000, force: true });
    }

    static validateVariationDetail() {
        cy.get(variationDetailLink).should('include.text', Cypress.env("host"));
    }

    static nikeProductVariation() {
        cy.get(nikeVariation).click({ timeout: 10000, force: true });
    }
}
export default ProductPage;