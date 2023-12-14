
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
  verifyLogin(login){
    this.getLogIn().should('have.value', login).and('be.visible')
   return this
  }
  typePassword(password){
   this.getPassword().type(password).should('have.value', password).and('be.visible')
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
   this.getCheckBoxRemembeMe().check({force:true}).should('be.checked').and('be.visible')
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
  verifyHeader(text){
     this.getSignInHeader().should('be.visible').and('have.text', text)
     return this
  }
  verifySizeHeader(text){
    cy.contains(text).should("have.prop", "tagName", "H1")
    return this
  }
  verifyLabel(label){
    this.getTwoLabelPage().each(($el,ind) => {
      expect($el.text()).be.eql(label[ind])
    }).should('be.visible')
    return this
  }
  verifyUserName(login){
    this.getLogIn().should('be.visible').type(login).should('have.value', login)
    return this
  }
  verifyTextPassword(password){
    this.getPassword().should('be.visible').type(password).should('have.value', password)
    return this
  }
  verifyTextRemember(text){
    this.getTextRemembeMe().should('be.visible').and('have.text', text)
    return this
  }
  clickTextRememberMe(){
    this.getTextRemembeMe().click()
    this.getCheckBoxRemembeMe().should('be.checked')
    return this
  }
  verifyButton(name)
  {
    this.getButton().should('be.visible').and('have.text',name)
    return this
  }
  verifyLogo(src)
  {
    this.getImage().should('be.visible').and('have.attr', 'src', src)
    return this
  }
}
export default LoginPage;