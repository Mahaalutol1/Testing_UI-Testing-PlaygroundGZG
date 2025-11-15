describe('Client Side Delay Test', () => {
  it('should wait for content after client-side processing', () => {
    cy.visit('/clientdelay')
    cy.contains('button', 'Button Triggering Client Side Logic').click()
    cy.contains('Data calculated on the client side.', { timeout: 15000 })
      .should('be.visible')
  })
})
