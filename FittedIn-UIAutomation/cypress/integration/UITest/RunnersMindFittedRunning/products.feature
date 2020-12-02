@fcManager
Feature: Product search as FC Manager
    want to search the products as a store manager

    Background:
        Given I am at runners mind fitted running webpage
        And Login as a FC manager user
    Scenario: Verify products search as a FC Manager
        When I click on the Products tab
        And I search for "saucony" product
        And I click on get products button
        Then I check number of search results is greater than zero
        When I click on saucony variation
        Then I validate the variation page
        When I click on clear filters
        And I search for "nike" product
        And I click on get products button
        Then I check number of search results is greater than zero
        When I click on nike variation
        Then I validate the variation page

