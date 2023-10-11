Feature: Test task ProPartner QA Automation
 

Scenario: Implement automated test scenario using mentioned technology stack that validates search functionality of the Amazon web-store.
    Given User open the google chrome and go to amazon application url.
    When User Enter laptop in the search box
    And User Filter the items by price using filter
    And Go to the last Page
    Then Log to console title and price of the penultimate item
 
 