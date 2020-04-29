package co.uk.expedia.pages;


import co.uk.expedia.utility.Utility;
import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class FlightsResultPage extends Utility {

    //Log the webelements and methods into Log4j reports
    private static final Logger log = LogManager.getLogger(FlightsResultPage.class.getName());

    //Using selenium @Findby and initElement methods
    // using _ help separate from variable

    @FindBy(xpath = "//span[@class='title-city-text']")
    WebElement _getSameDestinationText;

    @FindBy(xpath="//div[@class='bold announce-able']")
    WebElement _errorMessage;

    public String getSameDestinationTextMessage() {
        Reporter.addStepLog("Verify Destination City Message  : " + _getSameDestinationText.toString() + "<br>");
        log.info("Verify Destination City Message  : " + _getSameDestinationText.toString());
        //waitUntilVisibilityOfElementLocated((By)_getSameDestinationText,90);
        return getTextFromElement(_getSameDestinationText);
    }

    public String getErrorMessage() {
        Reporter.addStepLog("Verify Error Message   : " + _errorMessage.toString() + "<br>");
        log.info("Verify Error Message  : " + _errorMessage.toString());
        //waitUntilVisibilityOfElementLocated((By)_getSameDestinationText,90);
        return getTextFromElement(_errorMessage);
    }

}