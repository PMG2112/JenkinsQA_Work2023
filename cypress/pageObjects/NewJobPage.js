class NewJobPage {
   getDashboardLinkReturn = () => cy.get('li.jenkins-breadcrumbs__list-item a[href="/"]');
   getInputNameField = () => cy.get('input#name');
   getFreestyleTypeOfProject = () => cy.get('.hudson_model_FreeStyleProject');
   getOKButton = () => cy.get('#ok-button');

   typeNameProject(Name){
      this.getInputNameField().should('be.visible').type(Name);
      return this;
   }
   clickTypeOfProjectFreestyle(){
      this.getFreestyleTypeOfProject().click()
      return this
   }
   clickOkButton(){
      this.getOKButton().click()
      return cy.url()
   }
   clickDashboardLinkReturn() {
      this.getDashboardLinkReturn().click()
      return this
    }
}

export default NewJobPage;