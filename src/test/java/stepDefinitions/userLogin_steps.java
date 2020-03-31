package stepDefinitions;

//Cucumber

import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import org.junit.*;
import org.junit.Assert;

import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import pageObjects.*;

//Selenium
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
//java
import java.util.concurrent.TimeUnit;

import static org.junit.Assert.assertThat;


public class userLogin_steps {

    WebDriver driver;

    @Given("^The application user navigates to GreenFlag Login page$")
    public void enter_url_for_login_page() throws InterruptedException {
        String baseUrl = "https://greenflag-qa-experience.dev.mycro.app/"; //This can be replaced by a properties file to give env specific urls
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\P Padmanabhan\\IdeaProjects\\dlg.test\\Drivers\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(100, TimeUnit.SECONDS);
        driver.get(baseUrl);
    }

    @When("^User enters \"([^\"]*)\" & \"([^\"]*)\"$")
    public void user_enters(String arg1, String arg2) throws Throwable {
        Login_PO loginPage = new Login_PO(driver);
        loginPage.enter_Username(arg1);
        loginPage.enter_Password(arg2);
    }

    @When("^User clicks on Submit button$")
    public void user_clicks_on_Submit_button() throws Throwable {
        Login_PO loginPage = new Login_PO(driver);
        if (driver.findElement(By.xpath("/html/body/app-root/div/app-login/form/button")).isEnabled()) {
            loginPage.submit_click();
        }
    }

    @Then("^User should be successfully logged in$")
    public void user_should_be_successfully_logged_in() throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 5);

        Assert.assertTrue(isElementPresent(By.className("logged-in__success")));

        driver.close();
        driver.quit();
    }

    @Then("^User should not be logged in$")
    public void user_should_not_be_logged_in() throws Throwable {
        WebDriverWait wait = new WebDriverWait(driver, 5);

        Assert.assertFalse(isElementPresent(By.className("logged-in__success")));

        driver.close();
        driver.quit();
    }

    @After
    public void tearDown() throws Exception {
        driver.quit();
    }

    private boolean isElementPresent(By by) {
        try {
            driver.findElements(by);
            return true;
        } catch (org.openqa.selenium.NoSuchElementException e) {
            return false;
        }
    }

}