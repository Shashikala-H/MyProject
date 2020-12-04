import { Given, And} from "cypress-cucumber-preprocessor/steps";
import LoginPage from '../../../../pages/runnersMindFittedRunning/LoginPage';

Given(/^I am at runners mind fitted running webpage$/, () => {
    LoginPage.visitLoginPage();
});

And(/^Login as a FC manager user$/, () => {
    LoginPage.userName();
    LoginPage.password();
    LoginPage.loginButton();
});