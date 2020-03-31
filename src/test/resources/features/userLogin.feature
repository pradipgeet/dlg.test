@GreenflagRegression
Feature: Greenflag user Login
  A Greenflag user should be be able to login to the web application

  @Login-Success
  Scenario Outline: Greenflag user successful login
    Given The application user navigates to GreenFlag Login page
    When User enters "<Username>" & "<Password>"
    And User clicks on Submit button
    Then User should be successfully logged in

    Examples:
      | Username         | Password  |
      | qa@greenflag.com | Password1 |

# The below scenario is a defect, as currently the application allows to log in with invalid credentials
  @Login-Fail
  Scenario Outline: Greenflag user login validations - Defect
    Given The application user navigates to GreenFlag Login page
    When User enters "<Username>" & "<Password>"
    And User clicks on Submit button
    Then User should not be logged in

    Examples:
      | Test_Scenarios                     | Username         | Password  |
      | wrong email                        | qa@greenflag.uk  | Password1 |
      | wrong password                     | qa@greenflag.com | Password2 |


