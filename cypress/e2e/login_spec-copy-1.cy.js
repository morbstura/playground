describe('login test', () => {
  it('passes', (login) => {
    Cypress.Commands.add( 'loginViaUi', (user) => {
      cy.session(
        user,
        () => {
          cy.visit('https://heavyred.com/account/login')
          cy.get('#CustomerEmail').type('morbstura@yahoo.com')
          cy.get('#CustomerPassword').type('Heilige1#')
          cy.click('button#Sign in')
          cy.contains(`HISTORY`)
        
    })
   } )
  })})