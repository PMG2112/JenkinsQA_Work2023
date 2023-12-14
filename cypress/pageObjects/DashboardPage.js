import LoginPage from "./LoginPage";

class DashboardPage {
   getWelcomeMessage = () => cy.get('h1');
   getLinkLogOut = () => cy.get('a[href="/logout"]>span');
   getUserName = () => cy.get('.model-link > .hidden-xs');

   verifyWelcomeMessage(welcome){
      this.getWelcomeMessage().should('have.text',welcome)
      return this
   }
   clickLinclLogOut(){
      this.getLinkLogOut().click()
      return new LoginPage
   }
   verifyUserName(name)
   {
      this.getUserName().should('be.visible').and('have.text',name)
      return this
   }
}
export default DashboardPage