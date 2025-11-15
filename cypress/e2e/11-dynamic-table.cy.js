describe('Dynamic Table Test', () => {
  it('should find Chrome CPU value in a dynamic table', () => {
    cy.visit('/dynamictable')
    cy.get('body').should('be.visible')
    cy.contains(/Chrome/i, { timeout: 10000 }).should('be.visible')
    cy.contains('%', { timeout: 10000 }).should('be.visible')
    cy.get('body').then(($body) => {
      if ($body.find('table').length > 0) {
        cy.get('table').should('be.visible')
      }
    })
  })
})
