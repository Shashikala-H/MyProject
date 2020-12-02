import * as fcManagerCredential from "../../data/FCManagerCredential.json";

const userName = "#user_login";
const password = "#user_pass";
const loginButton = "div.tml-field-wrap.tml-submit-wrap > input";

class LoginPage {
    static visitLoginPage() {
        cy.visit(Cypress.env("runnersMindFittedRunning"));
    }

    static userName() {
        cy.get(userName).type(fcManagerCredential.userName)
    }

    static password() {
        cy.get(password).type(fcManagerCredential.password);
    }

    static loginButton() {
        cy.get(loginButton).click();
    }
}
export default LoginPage;