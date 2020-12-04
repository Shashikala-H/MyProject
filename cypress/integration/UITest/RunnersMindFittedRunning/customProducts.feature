@fcManager
Feature: Manage products as a FC Manager
    want to check the product details as a FC Manager

    Background:
        Given I am at runners mind fitted running webpage
        And Login as a FC manager user
    Scenario: Login as a FC Manager and check custom products
        When I click on the Custom Products Beta tab
        And I click the dropdown arrow next to a product
        Then Check Product Name and Price fields are complete