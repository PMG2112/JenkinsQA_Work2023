/// <reference types="cypress"/>

import LoginPage from "../pageObjects/LoginPage";
import loginPageData from "../fixtures/loginPageData.json";
import DashboardPage from "../pageObjects/DashboardPage";
import dashboardPageData from "../fixtures/dashboardPageData.json";

describe('Verify Login Page', () => {
   const loginPage = new LoginPage
   const port = Cypress.env('local.port');
   const host = Cypress.env('local.host');
   const baseUrl = `http://${host}:${port}`;

   beforeEach(() => {
      cy.visit(`${baseUrl}/login`)
  })
   it('TC_01.03|Verify UI Login Page | Visible elements| Header_1', () => {
      loginPage
      .verifySizeHeader(loginPageData.header)
      .verifyHeader(loginPageData.header)
   });
   
   it('TC_01.03|Verify UI Login Page | Visible elements| Labels_2', () => {
      loginPage
      .verifyLabel(loginPageData.twoLabel)
   });
   
   it('TC_01.03|Verify UI Login Page | Visible elements| Text Field User Name_3', () => {
      loginPage
      .verifyUserName(loginPageData.vavidUserName)
   });
   it('TC_01.03|Verify UI Login Page | Visible elements| Text Field Password_4', () => {
      loginPage
      .verifyTextPassword(loginPageData.validPassword)
   });
   it('TC_01.03|Verify UI Login Page | Visible elements| CheckBox Remember Me_5', () => {
      loginPage
      .clickRemembeMe()  
   });
   it('TC_01.03|Verify UI Login Page | Visible elements| Text Near CheckBox_6', () => {
      loginPage
      .verifyTextRemember(loginPageData.rememberMe)
      .clickTextRememberMe()  
   });
   it('TC_01.03|Verify UI Login Page | Visible elements| Button Sign In_7', () => {
      loginPage
      .verifyButton(loginPageData.button)
      .typeLogin(loginPageData.vavidUserName)
      .typePassword(loginPageData.validPassword)
      .clickButtonOK()
      .verifyWelcomeMessage(dashboardPageData.welcome)
      .verifyUserName(dashboardPageData.userName)
   });
   it('TC_01.03|Verify UI Login Page | Visible elements| Logo_8', () => {
      loginPage
      .verifyLogo(loginPageData.logo)
   });
});