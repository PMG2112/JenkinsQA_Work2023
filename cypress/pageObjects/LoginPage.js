
import DashboardPage from "./DashboardPage";

class LoginPage {
  getSignInHeader = () => cy.get('h1');
  getTwoLabelPage = () => cy.get(".app-sign-in-register__form-label");
  getCheckBoxRemembeMe = () => cy.get('#remember_me');
  getTextRemembeMe = () => cy.get('.jenkins-checkbox > label');
  getLogIn = () => cy.get("#j_username");
  getPassword = () => cy.get("#j_password");
  getButton = () => cy.get("button[name='Submit']");
  getImage = () => cy.get('img');
  getErrorMessage = () => cy.get(".app-sign-in-register__error");

  typeLogin(login){
   this.getLogIn().type(login)
   return this
  }
  typePassword(password){
   this.getPassword().type(password)
   return this
  }
  verifyPassword(password){
    this.getPassword().then(($el) => {
      cy.log($el.val())
      const len = $el.val();
      expect(len.length).to.be.eql(password.length)
    })
   return this
  }
  clickRemembeMe(){
   this.getCheckBoxRemembeMe().check({force:true})
   return this
  }
  clickButton(){
    this.getButton().click()
    return cy.url()
  }
  // verifyErrorMessageText(text){
  //  this.getErrorMessage().should('be.visible').and('contain',text)
  //  return this
  // }
  // verifyErrorColor(){
  //  this.getErrorMessage().should('have.css',"color","rgb(230, 0, 31)")
  // }
  verifyLabel(label){
    this.getTwoLabelPage().each(($el,ind) => {
      expect($el.text()).be.eql(label[ind])
    })
    return this
  }
  clickTextRememberMe(){
    this.getTextRemembeMe().click()
    return this
  }
}
export default LoginPage;