describe('template spec', () => {
  it('passes', () => {
    Cypress.Commands.add('login', () => {   
    cy.visit('https://heavyred.com/account/login')
    cy.get('input[name=email]').type(morbstura@yahoo.com)
  

  })
})