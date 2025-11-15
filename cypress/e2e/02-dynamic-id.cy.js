describe('Dynamic ID Test', () => {
  it('should find and click a button with a changing ID', () => {
    cy.visit('/dynamicid')
    cy.contains('button', 'Button with Dynamic ID').should('be.visible')
    cy.contains('button', 'Button with Dynamic ID').click()
    cy.contains('button', 'Button with Dynamic ID').should('exist')
  })
})
