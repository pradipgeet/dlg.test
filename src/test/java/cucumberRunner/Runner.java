package cucumberRunner;

//import org.junit.AfterClass;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.*;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "classpath:features",
        glue = "stepDefinitions",
        tags = {" @GreenflagRegression"},
        plugin = {"pretty", "html:target/cucumber-login", "json:target/cucumber-login.json", "junit:target/cucumber-login.xml"}
)
public class Runner {

}
