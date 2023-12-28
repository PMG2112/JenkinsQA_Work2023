/// <reference types="cypress"/>

import DashboardPage from "../pageObjects/DashboardPage";
import BuildHistoryPage from "../pageObjects/BuildHistoryPage";
import NewJobPage from "../pageObjects/NewJobPage";
import { sideMenu } from "../fixtures/dashboardPageData.json";
import { expectedBuildDate } from "../fixtures/buildHistoryData";

const dashboardPage = new DashboardPage;
const newJobPage = new NewJobPage;
const buildHistoryPage = new BuildHistoryPage;

describe.skip('Test', () => {


   sideMenu.sidePanelName.forEach((item, index) => {
      it(`Verify side menu Link ${item} functionality`, () => {
         dashboardPage
            .clickSideMenuItemList(item, index)
            .should('contain', sideMenu.sidePanelLink[index])
         cy.contains(sideMenu.pageHeaderName[index])
      });
   });

});

describe.skip('Build History of Freestyle Project', () => {
   beforeEach(function () {
      dashboardPage
         .clickNewItemLink()
         .typeNameProject("ProjectOne")
         .clickTypeOfProjectFreestyle()
         .clickOkButton()

      dashboardPage
         .clickDashboardLinkReturn()
         .getProjectNameLink()
         .should('be.visible')
         .and('have.text', "ProjectOne")
   })
   it('Day js', () => {
      dashboardPage
         .clickCreateBuild()
         .clickBuildHistoryLink()
         .clickIconEvent()
         .getTitleBubble()
         .should('contain', "ProjectOne")
      buildHistoryPage
         .takeBuildDate()
         .should('equal',expectedBuildDate())        
   })
});
