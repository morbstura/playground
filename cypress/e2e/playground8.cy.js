describe('homepage', () => {

  it('the h1 is visible', () => {

    cy.visit('https://example.cypress.io')
    cy.get("h1")

  })

})