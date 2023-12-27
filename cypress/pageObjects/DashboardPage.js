import LoginPage from "./LoginPage";
import SearchPage from "./SearchPage";
import QuestionPage from "./QuestionPage";
import UserPage from "./UserPage";
import ManageJenkinsPage from "./ManageJenkinsPage";
import NewJobPage from "./NewJobPage";
import BuildHistoryPage from "./BuildHistoryPage";

class DashboardPage {
   getDashboardLinkReturn = () => cy.get('li.jenkins-breadcrumbs__list-item a[href="/"]');

   getHeader = () => cy.get('#page-header');
   getLogoPicture = () => cy.get('#jenkins-head-icon');
   getLogoTitle = () => cy.get('#jenkins-name-icon');
   getSearchField = () => cy.get('#search-box');
   getIconSearch = () => cy.get('.main-search__icon-leading');
   getSearchQuection = () => cy.get('.main-search__icon-trailing');
   getIconNotifications = () => cy.get('#visible-am-button');
   getLinkManageJenkins = () => cy.get('p > a');
   getNotificationWindow = () => cy.get('#visible-am-list');
   getIconSecurityAdministrative = () => cy.get('#visible-sec-am-button');
   getSecurityWindow = () => cy.get('#visible-sec-am-list');
   getUserName = () => cy.get('.login > .model-link');
   getArrowDropDown = () => cy.get('.jenkins-menu-dropdown-chevron');
   getLinkLogOut = () => cy.get('[href="/logout"]');
   getDropDownLogin = () => cy.get('.jenkins-dropdown__item');
   getBreadBar = () => cy.get('#breadcrumbBar');
   getLeftSidePanel = () => cy.get('#side-panel #tasks a');
   getNewItemLink = () => cy.get('a[href*="/newJob"]');
   getBuildHistoryLink = () => cy.get(`a[href="/view/all/builds"]`);

   getProjectNameLink = () => cy.get('td a[href*="job"].jenkins-table__link');
   getCreateBuild = () => cy.get('td:last-child [tooltip]');

   getListMenu = () => cy.get('#tasks');
   getBuildQueue = () => cy.get('#buildQueue');
   getBuildExecutorStatus = () => cy.get('#executors');
   getAddDescription = () => cy.get('#view-message');
   getWelcomeMessage = () => cy.get('h1');
   getHelpMessage = () => cy.get('p');
   getTitleText = () => cy.get('.h4');
   getTopWorkLink = () => cy.get('.empty-state-section-list');
   getFooter = () => cy.get('.page-footer__links');

   clickDashboardLinkReturn() {
      this.getDashboardLinkReturn().click()
      return this
   }
   typeSearchField(text) {
      this.getSearchField().type(text).should('have.value', text)
      return this
   }
   typeEnterSearchField(text) {
      this.getSearchField().type(text).should('have.value', text).type(`{enter}`)
      return new SearchPage
   }
   clickIconSearch() {
      this.getIconSearch().click({ force: true })
      return new SearchPage
   }
   clickIconNotifications() {
      this.getIconNotifications().click()
      return this
   }
   clickManageJenkins() {
      this.getLinkManageJenkins().click()
      return new ManageJenkinsPage
   }
   clickIconSecurityAdministrative() {
      this.getIconSecurityAdministrative().click()
      return this
   }
   clickIconQuestion() {
      this.getSearchQuection().click()
      return new QuestionPage
   }
   clickUserName() {
      this.getUserName().click()
      return new UserPage
   }
   clickLinclLogOut() {
      this.getLinkLogOut().click()
      return new LoginPage
   }
   clickArrowLogin() {
      this.getArrowDropDown().eq(0).click({ force: true })
      return this
   }
   clickSideMenuItemList(itemName, index) {
      this.getLeftSidePanel().eq(index).as('item')
      cy.get('@item').contains(itemName)
      cy.get('@item').click()

      return cy.url()
   }
   clickNewItemLink() {
      this.getNewItemLink().click()
      return new NewJobPage()
   }
   clickBuildHistoryLink() {
      this.getBuildHistoryLink().click();
      return new BuildHistoryPage();
    }
   clickCreateBuild() {
      this.getCreateBuild().click()
      return this
   }
}
export default DashboardPage;