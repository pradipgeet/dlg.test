$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/userLogin.feature");
formatter.feature({
  "line": 2,
  "name": "Greenflag user Login",
  "description": "A Greenflag user should be be able to login to the web application",
  "id": "greenflag-user-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@GreenflagRegression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Greenflag user successful login",
  "description": "",
  "id": "greenflag-user-login;greenflag-user-successful-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Login-Success"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "The application user navigates to GreenFlag Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters \"\u003cUsername\u003e\" \u0026 \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should be successfully logged in",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "greenflag-user-login;greenflag-user-successful-login;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 13,
      "id": "greenflag-user-login;greenflag-user-successful-login;;1"
    },
    {
      "cells": [
        "qa@greenflag.com",
        "Password1"
      ],
      "line": 14,
      "id": "greenflag-user-login;greenflag-user-successful-login;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Greenflag user successful login",
  "description": "",
  "id": "greenflag-user-login;greenflag-user-successful-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Login-Success"
    },
    {
      "line": 1,
      "name": "@GreenflagRegression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "The application user navigates to GreenFlag Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters \"qa@greenflag.com\" \u0026 \"Password1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should be successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "userLogin_steps.enter_url_for_login_page()"
});
formatter.result({
  "duration": 16587994400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qa@greenflag.com",
      "offset": 13
    },
    {
      "val": "Password1",
      "offset": 34
    }
  ],
  "location": "userLogin_steps.user_enters(String,String)"
});
formatter.result({
  "duration": 252841900,
  "status": "passed"
});
formatter.match({
  "location": "userLogin_steps.user_clicks_on_Submit_button()"
});
formatter.result({
  "duration": 112681300,
  "status": "passed"
});
formatter.match({
  "location": "userLogin_steps.user_should_be_successfully_logged_in()"
});
formatter.result({
  "duration": 854656000,
  "status": "passed"
});
formatter.after({
  "duration": 58800,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 16,
      "value": "# The below scenario is a defect, as currently the application allows to log in with invalid credentials"
    }
  ],
  "line": 18,
  "name": "Greenflag user login validations - Defect",
  "description": "",
  "id": "greenflag-user-login;greenflag-user-login-validations---defect",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@Login-Fail"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "The application user navigates to GreenFlag Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User enters \"\u003cUsername\u003e\" \u0026 \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User clicks on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User should not be logged in",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "greenflag-user-login;greenflag-user-login-validations---defect;",
  "rows": [
    {
      "cells": [
        "Test_Scenarios",
        "Username",
        "Password"
      ],
      "line": 25,
      "id": "greenflag-user-login;greenflag-user-login-validations---defect;;1"
    },
    {
      "cells": [
        "wrong email",
        "qa@greenflag.uk",
        "Password1"
      ],
      "line": 26,
      "id": "greenflag-user-login;greenflag-user-login-validations---defect;;2"
    },
    {
      "cells": [
        "wrong password",
        "qa@greenflag.com",
        "Password2"
      ],
      "line": 27,
      "id": "greenflag-user-login;greenflag-user-login-validations---defect;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "Greenflag user login validations - Defect",
  "description": "",
  "id": "greenflag-user-login;greenflag-user-login-validations---defect;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GreenflagRegression"
    },
    {
      "line": 17,
      "name": "@Login-Fail"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "The application user navigates to GreenFlag Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User enters \"qa@greenflag.uk\" \u0026 \"Password1\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User clicks on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User should not be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "userLogin_steps.enter_url_for_login_page()"
});
formatter.result({
  "duration": 15711244700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qa@greenflag.uk",
      "offset": 13
    },
    {
      "val": "Password1",
      "offset": 33
    }
  ],
  "location": "userLogin_steps.user_enters(String,String)"
});
formatter.result({
  "duration": 255761600,
  "status": "passed"
});
formatter.match({
  "location": "userLogin_steps.user_clicks_on_Submit_button()"
});
formatter.result({
  "duration": 100620500,
  "status": "passed"
});
formatter.match({
  "location": "userLogin_steps.user_should_not_be_logged_in()"
});
formatter.result({
  "duration": 74576700,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertFalse(Assert.java:64)\r\n\tat org.junit.Assert.assertFalse(Assert.java:74)\r\n\tat stepDefinitions.userLogin_steps.user_should_not_be_logged_in(userLogin_steps.java:71)\r\n\tat ✽.Then User should not be logged in(features/userLogin.feature:22)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 665717300,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Greenflag user login validations - Defect",
  "description": "",
  "id": "greenflag-user-login;greenflag-user-login-validations---defect;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@GreenflagRegression"
    },
    {
      "line": 17,
      "name": "@Login-Fail"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "The application user navigates to GreenFlag Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User enters \"qa@greenflag.com\" \u0026 \"Password2\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User clicks on Submit button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User should not be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "userLogin_steps.enter_url_for_login_page()"
});
formatter.result({
  "duration": 13473484900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qa@greenflag.com",
      "offset": 13
    },
    {
      "val": "Password2",
      "offset": 34
    }
  ],
  "location": "userLogin_steps.user_enters(String,String)"
});
formatter.result({
  "duration": 188869000,
  "status": "passed"
});
formatter.match({
  "location": "userLogin_steps.user_clicks_on_Submit_button()"
});
formatter.result({
  "duration": 145995600,
  "status": "passed"
});
formatter.match({
  "location": "userLogin_steps.user_should_not_be_logged_in()"
});
formatter.result({
  "duration": 82405500,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertFalse(Assert.java:64)\r\n\tat org.junit.Assert.assertFalse(Assert.java:74)\r\n\tat stepDefinitions.userLogin_steps.user_should_not_be_logged_in(userLogin_steps.java:71)\r\n\tat ✽.Then User should not be logged in(features/userLogin.feature:22)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 689155600,
  "status": "passed"
});
});