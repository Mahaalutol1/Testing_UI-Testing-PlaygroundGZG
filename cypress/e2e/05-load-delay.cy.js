describe('Load Delay Test', () => {
  it('should wait for a button that appears after a delay', () => {
    cy.visit('/loaddelay')
    cy.contains('button', 'Button Appearing After Delay', { timeout: 15000 })
      .should('be.visible')
      .click()
    cy.contains('button', 'Button Appearing After Delay').should('exist')
  })
})
