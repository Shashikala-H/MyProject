 @e2e-test
Feature: Checkout Feature
  Background: visit shoeshoprunning website
    Given I'm at fittedsite
    When I select ship To me option
  Scenario: Add three Various product to the cart.
    And  Click the product and Check Ship to me option is enabled
    And  Click Add to cart button and Check the product is in the cart
    And  Click the continue shopping Button
    And  Click the Second product and Check Ship to me option is enabled
    And  Click Add to cart button and Check the second product is in the cart
    And  Click the continue shopping button
    And  Click the Third product and Check Ship to me option is enabled
    And  Click Add to cart button and Check the third product is in the cart
    And  Click the view cart button and Check the total price
    And  Click proceed to checkout button
    And  Enter the first Name
    And  Enter the Last Name
    And  Enter the Address
    And  Enter the city
    And  Enter the State
    And  Enter the Zipcode
    And  Enter the Phone number
    And  Enter the Email address
    And  Enter the Card Details
    And  click the place order Button
    Then Check whether order is placed