/// <reference types="cypress"/>

import enpointPage from "../fixtures/endpointPageData.json";
import DashboardPage from "../pageObjects/DashboardPage";
import dashboardPageData from "../fixtures/dashboardPageData.json";

describe('verify Dashboard Page', () => {
   const dashboardPage = new DashboardPage;
   const port = Cypress.env('local.port');
   const host = Cypress.env('local.host');
   const baseUrl = `http://${host}:${port}/`;

   function Text(i) {
      let tex = '';
      while (tex.length < i) {
         tex += Math.random().toString(36).substring(2)
      }
      return tex.substring(0, i)
   }
   console.log(Text(5));


   it('TC_02.01|Verify UI Dashboard Page|Visible elements|No Jobs on Jenkins|Headers Elements', () => {
      dashboardPage
      cy.url()
         .should('eql', baseUrl)
      dashboardPage
         .getLogoPicture()
         .should('be.visible')
         .and('have.attr', 'src', dashboardPageData.logoPicture)
      dashboardPage
         .getLogoTitle()
         .should('be.visible')
         .and('have.attr', 'src', dashboardPageData.logoTitle)
      dashboardPage
         .typeSearchField(Text(20))
         .getSearchField()
         .should('be.visible')
         .and('have.attr', 'placeholder', dashboardPageData.searchText)
      dashboardPage
         .getIconSearch()
         .should('be.visible')
      dashboardPage
         .getSearchQuection()
         .should('be.visible')
      dashboardPage
         .getIconNotifications()
         .should('be.visible')
      dashboardPage
         .getIconSecurityAdministrative()
         .should('be.visible')
      dashboardPage
         .getUserName()
         .should('be.visible')
         .and('have.text', dashboardPageData.userName)
      dashboardPage
         .getLinkLogOut()
         .should('be.visible')
         .and('have.text', dashboardPageData.linkOut)
   });
   it('TC_02.01|Verify UI Dashboard Page|Visible elements|No Jobs on Jenkins|Header Search Icon', () => {
      dashboardPage
         .typeSearchField(Text(20))
         .clickIconSearch()
      cy.url()
         .should('contain', enpointPage.searchURL)
   });
   it('TC_02.01|Verify UI Dashboard Page|Visible elements|No Jobs on Jenkins|Header Question Icon', () => {
      dashboardPage
         .clickIconQuestion()
      cy.url()
         .should('contain', enpointPage.questionURL)
   });
   it('TC_02.01|Verify UI Dashboard Page|Visible elements|No Jobs on Jenkins|Header Search', () => {
      dashboardPage
         .typeEnterSearchField(Text(20))
      cy.url()
         .should('contain', enpointPage.searchURL)
   });
   it('TC_02.01|Verify UI Dashboard Page|Visible elements|No Jobs on Jenkins|Header Search Field Max Enter', () => {
      dashboardPage
         .typeSearchField(Text(163))
         .getLogoPicture()
         .should('be.visible')
      dashboardPage
         .getLogoTitle()
         .should('be.visible')
      dashboardPage
         .getIconSearch()
         .should('be.visible')
      dashboardPage
         .getSearchQuection()
         .should('be.visible')
      dashboardPage
         .getIconNotifications()
         .should('be.visible')
      dashboardPage
         .getIconSecurityAdministrative()
         .should('be.visible')
      dashboardPage
         .getUserName()
         .should('be.visible')
         .and('have.text', dashboardPageData.userName)
      dashboardPage
         .getLinkLogOut()
         .should('be.visible')
         .and('have.text', dashboardPageData.linkOut)
   });
   it('TC_02.01|Verify UI Dashboard Page|Visible elements|No Jobs on Jenkins|Header Click Icon Notification', () => {
      dashboardPage
         .clickIconNotifications()
         .getNotificationWindow()
         .should('be.visible')
      dashboardPage
         .getLinkManageJenkins()
         .should('contain', dashboardPageData.linkWindow)
      dashboardPage
         .clickManageJenkins()
      cy.url()
         .should('contain', enpointPage.manage)
   });
   it('TC_02.01|Verify UI Dashboard Page|Visible elements|No Jobs on Jenkins|Header Click Icon Security', () => {
      dashboardPage
         .clickIconSecurityAdministrative()
         .getSecurityWindow()
         .should('be.visible')
      dashboardPage
         .getLinkManageJenkins()
         .should('contain', dashboardPageData.linkWindow)
      dashboardPage
         .clickManageJenkins()
      cy.url()
         .should('contain', enpointPage.manage)
   });
   it.only('TC_02.01|Verify UI Dashboard Page|Visible elements|No Jobs on Jenkins|Header Click Icon Login', () => {
      dashboardPage
         .getUserName()
         .should('contain', dashboardPageData.userName)
         dashboardPage
         .clickArrowLogin()
         
   });
});