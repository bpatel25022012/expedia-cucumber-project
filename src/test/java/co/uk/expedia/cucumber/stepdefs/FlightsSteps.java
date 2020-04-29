package co.uk.expedia.cucumber.stepdefs;



import co.uk.expedia.pages.FlightsPage;
import co.uk.expedia.pages.FlightsResultPage;
import co.uk.expedia.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class FlightsSteps {

    @When("^I click on Flights Tab$")
    public void iClickOnFlightsTab() {
     new HomePage().clickOnAcceptTab();
        new HomePage().clickOnFlightsTab();
    }
    @And("^I enter origin city \"([^\"]*)\"$")
    public void iEnterOriginCity(String origin)  {
        new FlightsPage().enterOriginCity(origin);
    }
    @And("^I enter destination city \"([^\"]*)\"$")
    public void iEnterDestinationCity(String destination)  {
        new FlightsPage().enterDestinationCity(destination);
    }
    @And("^I enter outbound date of travel \"([^\"]*)\"$")
    public void iEnterOutboundDateOfTravel(String outdate)  {
new FlightsPage().enterOutboundDateOfTravel(outdate);
    }

    @And("^I enter return travel date \"([^\"]*)\"$")
    public void iEnterReturnTravelDate(String returndate)  {
new FlightsPage().enterReturnDateOfTravel(returndate);
    }

    @And("^I add no travellers$")
    public void iAddNoTravellers() {
        new FlightsPage().clickOnTravellers();
        new FlightsPage().addTwoAdultTravellersAndClose();
    }

    @And("^I click on search button$")
    public void iClickOnSearchButton() {
        new FlightsPage().clickOnSearchButton();
    }

    @Then("^I must see flights to the same destination$")
    public void iMustSeeFlightsToTheSameDestination() {
        Assert.assertTrue(new FlightsResultPage().getSameDestinationTextMessage().contains("Select your departure to Delhi"));
    }

    @Then("^I must get No flights message between the cities$")
    public void iMustGetNoFlightsMessageBetweenTheCities() {
        Assert.assertTrue(new FlightsResultPage().getErrorMessage().contains("We've searched more than 400 airlines that we sell, and couldn't find any flights from Washington (WAS)"));    }
}
