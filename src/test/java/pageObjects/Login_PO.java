package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class Login_PO {

    public Login_PO(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }

    @FindBy(how = How.NAME, using = "loginUsername")
    private WebElement login_Username;

    @FindBy(how = How.NAME, using = "loginPassword")
    private WebElement login_Password;

    @FindBy(how = How.XPATH, using = "/html/body/app-root/div/app-login/form/button")
    private WebElement submit_btn;

    public void enter_Username(String name) {
        login_Username.sendKeys(name);
    }

    public void enter_Password(String lastName) {
        login_Password.sendKeys(lastName);
    }

    public void submit_click() {
        submit_btn.click();
    }

}