
describe('template spec', () => {
  it('passes', () => {
    Cypress.Commands.add('loginViaUi', (user) => {
      cy.session(
        user,
        () => {
          cy.visit('https://heavyred.com/account/login')
          cy.get('input[name=email]').type(morbstura.yahoo.com)
          cy.get('input[name=password]').type(Heilige1)
          cy.click('button#Sign in')
          cy.contains(`incorrect`)
        
    })
      
