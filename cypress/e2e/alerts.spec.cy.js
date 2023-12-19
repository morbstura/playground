describe('verify timer alrt will popup', () => {
  it('alert button should function', () => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
      cy.visit('https://demoqa.com/alerts')
      cy.get('#timerAlertButton').click();
      cy.on('window:alert',(text)=>{
      expect(text).to.contains('This alert appeared after 5 seconds');
      
      it('button should function', () => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
      cy.visit('https://demoqa.com/alerts')
      cy.get('#alertButton').click();
      cy.on('window:alert',(text)=>{
      expect(text).to.contains('You clicked a button');
      })
    })
  })
})
})
it('confirm button should function', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
  cy.visit('https://demoqa.com/alerts')
  cy.get('#alertButton').click();
  cy.on('window:alert',(text)=>{
  expect(text).to.contains('Do you confirm action?');
  })
}) 

it('promt button should function', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
  cy.visit('https://demoqa.com/alerts')
  cy.get('#promtButton').click();
  cy.on('window:alert',(text)=>{
  expect(text).to.contains('Please enter your name');    
  })
})

      
      
  
    

    