describe('Click Test', () => {
  it('should click a button and verify it changes color', () => {
    cy.visit('/click')
    cy.get('#badButton').should('be.visible')
    cy.get('#badButton').click()
    cy.get('#badButton').should('have.class', 'btn-success')
  })
})
