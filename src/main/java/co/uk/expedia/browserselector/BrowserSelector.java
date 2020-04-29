package co.uk.expedia.browserselector;


import co.uk.expedia.basepage.BasePage;
import com.cucumber.listener.Reporter;
import org.apache.log4j.Logger;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;


public class BrowserSelector extends BasePage {

// log the processes from browser selector on the log4j
    private static final Logger log = Logger.getLogger(BrowserSelector.class.getName());


    /* projectPath as String is assigned for all project to choose local user directory
     * thru the ("user*dir")
     * Browser selector extends to BasePage in search of the Webdriver
     */
    String projectPath =System.getProperty("user.dir");

    /* if else method is provided to select a browser
     * choose any browser between chrome, firefox or internet explorer
     * else offer a wrong name
     * log the launching of the browser on log4j
     */

    public void selectBrowser(String browser) {
        if (browser.equalsIgnoreCase("chrome")) {
            System.setProperty("webdriver.chrome.driver", projectPath + "/drivers/chromedriver.exe");
            log.info("Launching Chrome Browser");
            driver = new ChromeDriver();
        } else if (browser.equalsIgnoreCase("firefox")) {
            System.setProperty("webdriver.gecko.driver", projectPath + "/drivers/geckodriver.exe");
            log.info("Launching Chrome Browser");
            driver = new FirefoxDriver();
        } else if (browser.equalsIgnoreCase("ie")) {
            System.setProperty("webdriver.ie.driver", projectPath + "/drivers/IEDriverServer.exe");
            log.info("Launching Chrome Browser");
            driver = new InternetExplorerDriver();
        } else {
            log.info("Browser Not Launched");
            System.out.println("Wrong browser name");
        }
    }
}
