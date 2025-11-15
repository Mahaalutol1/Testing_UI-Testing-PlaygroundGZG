describe('AJAX Data Test', () => {
  it('should click a button and wait for AJAX content to load', () => {
    cy.visit('/ajax')
    cy.contains('button', 'Button Triggering AJAX Request').should('be.visible')
    cy.contains('button', 'Button Triggering AJAX Request').click()
    cy.contains(/AJAX|loaded|Data/i, { timeout: 15000 }).should('be.visible')
  })
})
