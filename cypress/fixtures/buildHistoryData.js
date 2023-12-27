export function expectedBuildDate() {
   return Cypress.dayjs().format("ddd, DD MMM YYYY HH:mm")
}