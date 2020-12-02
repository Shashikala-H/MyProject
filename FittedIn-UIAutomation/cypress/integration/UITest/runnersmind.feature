Feature: Create Cart Verification
    want to check correct number of items are in the cart.

    Scenario: visit arunnersmind.com website
        Given I'm at runnersmind webpage
    Scenario: verify whether the products is added in cart
        When  I click the product and Check Ship to me option is Enabled
        And   I Click Add to cart button
        Then  Check the product is in the Cart
        And   Click the continue Shopping
        Then  Search a product by using searchbar
        When  I click the second product
        And   select the different Color varient and Check Ship to me option is Enabled
        When  I Click Add to cart button
        Then  Check the product in the Cart
        And   Click the continue Shopping
        Then  Select a product using filters
        When  I click the third product
        And   select the different color varient and Check Ship to me option is Enabled
        When  I Click Add to cart button
        Then  Check the Product is in the Cart
        And   Click the viewcart button and validate the price



