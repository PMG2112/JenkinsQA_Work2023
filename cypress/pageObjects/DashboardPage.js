
class DashboardPage {
   getWelcomeMessage = () => cy.get('h1');

   verifyWelcomeMessage(welcome){
      this.getWelcomeMessage().should('have.text',welcome)
      return this
   }
}
export default DashboardPage