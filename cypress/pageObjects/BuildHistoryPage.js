class BuildHistoryPage {
   getIconEvent = () => cy.get('#icon-tl-0-1-e1');
   getTitleBubble = () => cy.get('div.timeline-event-bubble-title a');
   getTimeLineBubble = () => cy.get('.timeline-event-bubble-time');

   clickIconEvent() {
      this.getIconEvent().click()
      return this
   }
   takeBuildDate(){
      return this.getTimeLineBubble().then(el => {
         return el.text().slice(0,22)
   })
}
}
export default BuildHistoryPage;