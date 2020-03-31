$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/userLogin.feature");
formatter.feature({
  "line": 2,
  "name": "Greenflag user Login",
  "description": "As a Greenflag user I should be be ablto login to the greenflag website",
  "id": "greenflag-user-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@reg"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Greenflag user login validation",
  "description": "",
  "id": "greenflag-user-login;greenflag-user-login-validation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Login"
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
  "id": "greenflag-user-login;greenflag-user-login-validation;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 13,
      "id": "greenflag-user-login;greenflag-user-login-validation;;1"
    },
    {
      "cells": [
        "qa@greenflag.com",
        "Password1"
      ],
      "line": 14,
      "id": "greenflag-user-login;greenflag-user-login-validation;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Greenflag user login validation",
  "description": "",
  "id": "greenflag-user-login;greenflag-user-login-validation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Login"
    },
    {
      "line": 1,
      "name": "@reg"
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
  "duration": 12844127300,
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
  "duration": 284841400,
  "status": "passed"
});
formatter.match({
  "location": "userLogin_steps.user_clicks_on_Submit_button()"
});
formatter.result({
  "duration": 99783000,
  "status": "passed"
});
formatter.match({
  "location": "userLogin_steps.user_should_be_successfully_logged_in()"
});
formatter.result({
  "duration": 847923400,
  "status": "passed"
});
});