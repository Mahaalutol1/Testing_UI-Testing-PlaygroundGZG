describe('Class Attribute Test', () => {
  it('should find and click a button using its CSS class', () => {
    cy.visit('/classattr')
    cy.get('button.btn-primary').should('be.visible')
    cy.get('button.btn-primary').click()
  })
})
