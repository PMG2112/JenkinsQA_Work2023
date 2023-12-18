/// <reference types="cypress"/>

import LoginPage from "../pageObjects/LoginPage";
import loginPageData from "../fixtures/loginPageData.json";
import DashboardPage from "../pageObjects/DashboardPage";
import dashboardPageData from "../fixtures/dashboardPageData.json";

describe('Verify Login Page', () => {
   const loginPage = new LoginPage;
   const dashboardPage = new DashboardPage;
   const port = Cypress.env('local.port');
   const host = Cypress.env('local.host');
   const baseUrl = `http://${host}:${port}/`;

   beforeEach(() => {
      cy.visit(`${baseUrl}login`)
   })
   it.skip('TC_01.01|Verify UI Login Page | Visible elements', () => {
      loginPage
         .getSignInHeader()
         .should('be.visible').and('have.text', loginPageData.header)
         .and("have.prop", "tagName", "H1")
      loginPage
         .verifyLabel(loginPageData.twoLabel)
         .getTwoLabelPage()
         .should('be.visible')
      loginPage
         .getImage()
         .should('have.attr', 'src', loginPageData.logo)
         .and('be.visible')
      loginPage
         .typeLogin(loginPageData.vavidUserName)
         .getLogIn()
         .should('be.visible')
         .and('have.value', loginPageData.vavidUserName)
      loginPage
         .typePassword(loginPageData.validPassword)
         .getPassword()
         .should('be.visible')
         .and('have.value', loginPageData.validPassword)
      loginPage
         .getTextRemembeMe()
         .should('be.visible')
         .and('have.text', loginPageData.rememberMe)
      loginPage
         .clickRemembeMe()
         .getCheckBoxRemembeMe()
         .should('be.checked')
         .and('be.visible')
      loginPage
         .getButton()
         .should('have.text', loginPageData.button)
         .and('be.visible')
      loginPage
         .clickButton()
         .should('contain', baseUrl)
      dashboardPage
         .getUserName()
         .should('have.text', dashboardPageData.userName)
         .and('be.visible')
      dashboardPage
         .getWelcomeMessage()
         .should('have.text', dashboardPageData.welcome)
         .and('be.visible')
   });
   it('TC_01.01|Verify UI Login Page | Visible elements| Header_1', () => {
      loginPage
         .getSignInHeader()
         .should('be.visible').and('have.text', loginPageData.header)
         .and("have.prop", "tagName", "H1")
   });

   it('TC_01.01|Verify UI Login Page | Visible elements| Labels_2', () => {
      loginPage
         .verifyLabel(loginPageData.twoLabel)
         .getTwoLabelPage()
         .should('be.visible')
   });

   it('TC_01.01|Verify UI Login Page | Visible elements| Text Field User Name_3', () => {
      loginPage
         .typeLogin(loginPageData.vavidUserName)
         .getLogIn()
         .should('be.visible')
         .and('have.value', loginPageData.vavidUserName)
   });
   it('TC_01.01|Verify UI Login Page | Visible elements| Text Field Password_4', () => {
      loginPage
         .typePassword(loginPageData.validPassword)
         .getPassword()
         .should('be.visible')
         .and('have.value', loginPageData.validPassword)
   });
   it('TC_01.01|Verify UI Login Page | Visible elements| CheckBox Remember Me_5', () => {
      loginPage
         .clickRemembeMe()
         .getCheckBoxRemembeMe()
         .should('be.checked')
         .and('be.visible')
   });
   it('TC_01.01|Verify UI Login Page | Visible elements| Text Near CheckBox_6', () => {
      loginPage
         .getTextRemembeMe()
         .should('be.visible')
         .and('have.text', loginPageData.rememberMe)
      loginPage
         .clickTextRememberMe()
         .getCheckBoxRemembeMe()
         .should('be.checked')
   });
   it('TC_01.01|Verify UI Login Page | Visible elements| Button Sign In_7', () => {
      loginPage
         .getButton()
         .should('have.text', loginPageData.button)
         .and('be.visible')
      loginPage
         .typeLogin(loginPageData.vavidUserName)
         .typePassword(loginPageData.validPassword)
         .clickButton()
         .should('contain', baseUrl)
      dashboardPage
         .getWelcomeMessage()
         .should('have.text', dashboardPageData.welcome)
      dashboardPage
         .getUserName()
         .should('have.text', dashboardPageData.userName)
   });
   it('TC_01.01|Verify UI Login Page | Visible elements| Logo_8', () => {
      loginPage
         .getImage()
         .should('have.attr', 'src', loginPageData.logo)
         .and('be.visible')
   });
});