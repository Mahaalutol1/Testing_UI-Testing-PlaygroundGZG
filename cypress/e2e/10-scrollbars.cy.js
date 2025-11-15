describe('Scrollbars Test', () => {
  it('should scroll to a button and click it', () => {
    cy.visit('/scrollbars')
    cy.get('#hidingButton').should('exist')
    cy.get('#hidingButton').scrollIntoView()
    cy.get('#hidingButton').should('be.visible')
    cy.get('#hidingButton').click()
    cy.get('#hidingButton').should('exist')
  })
})
