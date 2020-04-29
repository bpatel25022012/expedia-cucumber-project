@login
Feature: Login feature

  As a user, I want to login in to expedia.co.uk successfully

  Scenario: User should login successfully with valid credentials
    Given I am on Home page
    When I clickOnAccountTab
    And I clickOnSignInTab
    And I enter valid Email "JamesB1234@gmail.com"
    And I enter valid password "James123"
    And I click on login button
    Then I should login successfully

  Scenario: User should Not login successfully with invalid credentials
    Given I am on Home page
    When I clickOnAccountTab
    And I clickOnSignInTab
    And I enter valid Email "RogerB1234@gmail.com"
    And I enter valid password "Roger123"
    And I click on login button
    Then I should Not login successfully
