package co.uk.expedia.cucumber.stepdefs;

import co.uk.expedia.pages.HomePage;
import co.uk.expedia.pages.SignInPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class MyStepdefs {
    @Given("^I am on Home page$")
    public void iAmOnHomePage() {
    }

    @When("^I clickOnAccountTab$")
    public void iClickOnAccountTab() {
        new HomePage().clickOnAcceptTab();
        new HomePage().clickonAccountTab();
    }

    @And("^I clickOnSignInTab$")
    public void iClickOnSignInTab() {
        new HomePage().clickOnSignInTab();
    }

    @And("^I enter valid Email \"([^\"]*)\"$")
    public void iEnterValidEmail(String email)  {
        new SignInPage().enterEmailId(email);

    }

    @And("^I enter valid password \"([^\"]*)\"$")
    public void iEnterValidPassword(String password)  {
        new SignInPage().enterPassword(password);

    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        new SignInPage().clickonSignInButton();
    }

    @Then("^I should login successfully$")
    public void iShouldLoginSuccessfully() {
        Assert.assertEquals(new SignInPage().getMyListMessage(), "My Lists");
        //Assert.assertTrue(new SignInPage().getHelloMesage().contains("Hello"));
    }

    @Then("^I should Not login successfully$")
    public void iShouldNotLoginSuccessfully() {
        Assert.assertEquals(new SignInPage().getErrorMessage(), "You may have entered an unknown email address or an incorrect password");
    }
}
