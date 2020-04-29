package co.uk.expedia.cucumber;


import co.uk.expedia.basepage.BasePage;
import co.uk.expedia.browserselector.BrowserSelector;
import co.uk.expedia.loadproperty.LoadProperty;
import co.uk.expedia.utility.Utility;
import com.cucumber.listener.Reporter;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

public class Hooks extends BasePage {
    BrowserSelector browserSelector = new BrowserSelector();
    LoadProperty loadProperty = new LoadProperty();

    String baseUrl = loadProperty.getProperty("baseUrl");

    String browser = loadProperty.getProperty("browser");

    /*
     * Before and After import from cucumber
     * java import cucumber.api.java and NOT JUnit.****
     */

    // assigning author
    @Before
    public void openBrowser(){
        browserSelector.selectBrowser(browser);
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.get(baseUrl);

        // Assigning Author to report
        Reporter.assignAuthor("Best in Testing", "Bhavesh Patel");
    }

    /*
     * Assigning parameter for listener for screenshots and removing the space and replace by _
     * handle exception with try and catch
     */

    @After
    public void tearDown(Scenario scenario){
        if (scenario.isFailed()){
            String screenShotPath = Utility.getScreenshot(driver, scenario.getName().replace(" ", "_"));
            try {
                Reporter.addScreenCaptureFromPath(screenShotPath);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        driver.quit();
    }


}
