$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/co/uk/expedia/resources/featurefile/flightsearch.feature");
formatter.feature({
  "line": 2,
  "name": "Flight Search Feature",
  "description": "As a user, I want to find search flights between cities",
  "id": "flight-search-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FlightSearch"
    }
  ]
});
formatter.before({
  "duration": 22194720200,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify That User is Able to Search Same Destination Flights",
  "description": "",
  "id": "flight-search-feature;verify-that-user-is-able-to-search-same-destination-flights",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Flights Tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter origin city \"London\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter destination city \"Delhi\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter outbound date of travel \"07/08/2020\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter return travel date \"21/08/2020\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I add no travellers",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I must see flights to the same destination",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 860982200,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iClickOnFlightsTab()"
});
formatter.result({
  "duration": 1848572600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 21
    }
  ],
  "location": "FlightsSteps.iEnterOriginCity(String)"
});
formatter.result({
  "duration": 1447063700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Delhi",
      "offset": 26
    }
  ],
  "location": "FlightsSteps.iEnterDestinationCity(String)"
});
formatter.result({
  "duration": 647897900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07/08/2020",
      "offset": 33
    }
  ],
  "location": "FlightsSteps.iEnterOutboundDateOfTravel(String)"
});
formatter.result({
  "duration": 882736000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21/08/2020",
      "offset": 28
    }
  ],
  "location": "FlightsSteps.iEnterReturnTravelDate(String)"
});
formatter.result({
  "duration": 2243683900,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iAddNoTravellers()"
});
formatter.result({
  "duration": 21123223400,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iClickOnSearchButton()"
});
formatter.result({
  "duration": 14495578300,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iMustSeeFlightsToTheSameDestination()"
});
formatter.result({
  "duration": 320238400,
  "status": "passed"
});
formatter.after({
  "duration": 1426248500,
  "status": "passed"
});
formatter.before({
  "duration": 17448652800,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify That User is NOT Able to Search Wrong Destination Flights",
  "description": "",
  "id": "flight-search-feature;verify-that-user-is-not-able-to-search-wrong-destination-flights",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Flights Tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I enter origin city \"Washington\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter destination city \"Mount Gambier\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter outbound date of travel \"07/08/2020\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter return travel date \"21/08/2020\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I add no travellers",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I must get No flights message between the cities",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 68100,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iClickOnFlightsTab()"
});
formatter.result({
  "duration": 1467708100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Washington",
      "offset": 21
    }
  ],
  "location": "FlightsSteps.iEnterOriginCity(String)"
});
formatter.result({
  "duration": 1352295600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mount Gambier",
      "offset": 26
    }
  ],
  "location": "FlightsSteps.iEnterDestinationCity(String)"
});
formatter.result({
  "duration": 1520345300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07/08/2020",
      "offset": 33
    }
  ],
  "location": "FlightsSteps.iEnterOutboundDateOfTravel(String)"
});
formatter.result({
  "duration": 1096294400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21/08/2020",
      "offset": 28
    }
  ],
  "location": "FlightsSteps.iEnterReturnTravelDate(String)"
});
formatter.result({
  "duration": 1940793500,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iAddNoTravellers()"
});
formatter.result({
  "duration": 21128926200,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iClickOnSearchButton()"
});
formatter.result({
  "duration": 18051639100,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iMustGetNoFlightsMessageBetweenTheCities()"
});
formatter.result({
  "duration": 101823800,
  "status": "passed"
});
formatter.after({
  "duration": 1094379500,
  "status": "passed"
});
formatter.uri("src/test/java/co/uk/expedia/resources/featurefile/login.feature");
formatter.feature({
  "line": 2,
  "name": "Login feature",
  "description": "\r\nAs a user, I want to login in to expedia.co.uk successfully",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.before({
  "duration": 14806236100,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should login successfully with valid credentials",
  "description": "",
  "id": "login-feature;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I clickOnAccountTab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I clickOnSignInTab",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter valid Email \"JamesB1234@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter valid password \"James123\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 60000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnAccountTab()"
});
formatter.result({
  "duration": 1687687400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnSignInTab()"
});
formatter.result({
  "duration": 932734400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JamesB1234@gmail.com",
      "offset": 21
    }
  ],
  "location": "MyStepdefs.iEnterValidEmail(String)"
});
formatter.result({
  "duration": 7761200300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "James123",
      "offset": 24
    }
  ],
  "location": "MyStepdefs.iEnterValidPassword(String)"
});
formatter.result({
  "duration": 592030100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 258946900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 523815300,
  "status": "passed"
});
formatter.after({
  "duration": 966741600,
  "status": "passed"
});
formatter.before({
  "duration": 15732893100,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User should Not login successfully with invalid credentials",
  "description": "",
  "id": "login-feature;user-should-not-login-successfully-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I clickOnAccountTab",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I clickOnSignInTab",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter valid Email \"RogerB1234@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter valid password \"Roger123\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should Not login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 58800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnAccountTab()"
});
formatter.result({
  "duration": 698992500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnSignInTab()"
});
formatter.result({
  "duration": 510361000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RogerB1234@gmail.com",
      "offset": 21
    }
  ],
  "location": "MyStepdefs.iEnterValidEmail(String)"
});
formatter.result({
  "duration": 6254733900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Roger123",
      "offset": 24
    }
  ],
  "location": "MyStepdefs.iEnterValidPassword(String)"
});
formatter.result({
  "duration": 546329200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 415659500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldNotLoginSuccessfully()"
});
formatter.result({
  "duration": 426248900,
  "status": "passed"
});
formatter.after({
  "duration": 934760100,
  "status": "passed"
});
});