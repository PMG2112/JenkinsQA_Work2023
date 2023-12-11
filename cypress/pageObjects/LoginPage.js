
import DashboardPage from "./DashboardPage";

class LoginPage {
  getSignIn = () => cy.get(".app-sign-in-register__content-inner>h1");
  getTwoLabelPage = () => cy.get(".app-sign-in-register__form-label");
  getCheckBoxRemembeMe = () => cy.get('.jenkins-checkbox > label');
  getTextRemembeMe = () => cy.get(".jenkins-checkbox");
  getLogIn = () => cy.get("#j_username");
  getPassword = () => cy.get("#j_password");
  getButton = () => cy.get("button[name='Submit']");
  getImage = () => cy.get(".app-sign-in-register__branding__starburst");
  getErrorMessage = () => cy.get(".app-sign-in-register__error");

  typeLogin(login){
   this.getLogIn().type(login).should('have.value', login).and('be.visible')
   return this
  }
  typePassword(password){
   this.getPassword().type(password).should('have.value', password).and('be.visible')
   return this
  }
  clickRemembeMe(){
   this.getCheckBoxRemembeMe().click()
   return this
  }
  clickButtonOK(){
   this.getButton().click()
   return new DashboardPage()
  }
  clickButtonError(){
   this.getButton().click()
   return this
  }
  verifyErrorMessageText(text){
   this.getErrorMessage().should('be.visible').and('contain',text)
   return this
  }
  verifyErrorColor(){
   this.getErrorMessage().should('have.css',"color","rgb(230, 0, 31)")
  }
}
export default LoginPage;