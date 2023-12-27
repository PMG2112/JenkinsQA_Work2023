/// <reference types="cypress"/>

import LoginPage from "../pageObjects/LoginPage";
import loginPageData from "../fixtures/loginPageData.json";
import DashboardPage from "../pageObjects/DashboardPage";
import dashboardPageData from "../fixtures/dashboardPageData.json";

describe('Sign in to Jenkins', () => {
   const loginPage = new LoginPage;
   const port = Cypress.env('local.port');
   const host = Cypress.env('local.host');
   // const validAdminName = Cypress.env('local.admin.username');
   // const validAdminPass = Cypress.env('local.admin.password');
   const dashboardUrl = `http://${host}:${port}/`;
   let invalidUserName = Math.random().toString(36).substring(7);
   let invalidPassword = Math.random().toString(36).substring(7);

   beforeEach(() => {
      cy.visit(`${dashboardUrl}${loginPageData.url}`)
   })
   it('TC_01.02| Sign in to Jenkins| valid login and password', () => {
      loginPage
         .typeLogin(loginPageData.vavidUserName)
         .getLogIn()
         .should('have.value', loginPageData.vavidUserName)
      loginPage
         .typePassword(loginPageData.validPassword)
         .getPassword()
         .should('have.value', loginPageData.validPassword)
      loginPage
         .clickRemembeMe()
         .getCheckBoxRemembeMe()
         .should('be.checked')
      loginPage
         .clickButton()
         .should('eql', dashboardUrl)
   })
   it('TC_01.03.01|Sign in to Jenkins| invalid login and valid password', () => {
      loginPage
         .typeLogin(invalidUserName)
         .getLogIn()
         .should('have.value', invalidUserName)
      loginPage
         .typePassword(loginPageData.validPassword)
         .getPassword()
         .should('have.value', loginPageData.validPassword)
      loginPage
         .clickRemembeMe()
         .getCheckBoxRemembeMe()
         .should('be.checked')
      loginPage
         .clickButton()
         .should('eql', `${dashboardUrl}${loginPageData.urlError}`)
      loginPage
         .getErrorMessage()
         .should('have.text', loginPageData.errorMessage)
         .and('be.visible')
         .should('have.css', "color", "rgb(230, 0, 31)")
   })
   it('TC_01.03.02|Sign in to Jenkins| valid login and invalid password', () => {
      loginPage
         .typeLogin(loginPageData.vavidUserName)
         .getLogIn()
         .should('have.value', loginPageData.vavidUserName)
      loginPage
         .typePassword(invalidPassword)
         .getPassword()
         .should('have.value', invalidPassword)
      loginPage
         .clickRemembeMe()
         .getCheckBoxRemembeMe()
         .should('be.checked')
      loginPage
         .clickButton()
         .should('eql', `${dashboardUrl}${loginPageData.urlError}`)
      loginPage
         .getErrorMessage()
         .should('have.text', loginPageData.errorMessage)
         .and('be.visible')
         .should('have.css', "color", "rgb(230, 0, 31)")
   })
   it('TC_01.03.03|Sign in to Jenkins| invalid login and invalid password', () => {
      loginPage
         .typeLogin(invalidUserName)
         .getLogIn()
         .should('have.value', invalidUserName)
      loginPage
         .typePassword(invalidPassword)
         .getPassword()
         .should('have.value', invalidPassword)
      loginPage
         .clickRemembeMe()
         .getCheckBoxRemembeMe()
         .should('be.checked')
      loginPage
         .clickButton()
         .should('eql', `${dashboardUrl}${loginPageData.urlError}`)
      loginPage
         .getErrorMessage()
         .should('have.text', loginPageData.errorMessage)
         .and('be.visible')
         .should('have.css', "color", "rgb(230, 0, 31)")
   })
})

