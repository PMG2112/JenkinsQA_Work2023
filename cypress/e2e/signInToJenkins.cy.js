/// <reference types="cypress"/>

import LoginPage from "../pageObjects/LoginPage";
import loginPageData from "../fixtures/loginPageData.json";
import DashboardPage from "../pageObjects/DashboardPage";
import dashboardPageData from "../fixtures/dashboardPageData.json";

describe('Sign in to Jenkins',() => {
   const loginPage = new LoginPage;
   const port = Cypress.env('local.port');
   const host = Cypress.env('local.host');
   const validAdminName = Cypress.env('local.admin.username');
   const validAdminPass = Cypress.env('local.admin.password');
   const baseUrl = `http://${host}:${port}`;
   let invalidUserName = Math.random().toString(36).substring(7);
   let invalidPassword = Math.random().toString(36).substring(7);

   beforeEach(() => {
       cy.visit(`${baseUrl}/login`)
   })
it.only('TC_01.01| Sign in to Jenkins| valid login and password', ()=>{
 loginPage
 .typeLogin(loginPageData.vavidUserName)
 .typePassword(loginPageData.validPassword)
 .clickRemembeMe()
 .clickButtonOK()
 .verifyWelcomeMessage(dashboardPageData.welcome)
})
it('TC_01.02.01|Sign in to Jenkins| invalid login and valid password',()=>{
   loginPage
 .typeLogin(invalidUserName)
 .typePassword(loginPageData.validPassword)
 .clickRemembeMe()
 .clickButtonError()
 .verifyErrorMessageText(loginPageData.errorMessage)
 .verifyErrorColor()
})
it.skip('TC_01.02.02|Sign in to Jenkins| valid login and invalid password',()=>{
   loginPage
//  .typeLogin(loginPageData.vavidUserName)
 .typePassword(invalidPassword)
 .clickRemembeMe()
//  .clickButtonError()
//  .verifyErrorMessageText(loginPageData.errorMessage)
//  .verifyErrorColor()
})
})