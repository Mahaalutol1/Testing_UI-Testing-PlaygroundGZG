describe('Verify Text Test', () => {
  it('should find text that has spaces around it', () => {
    cy.visit('/verifytext')
    cy.contains('span', 'Welcome UserName!').should('be.visible')
    cy.get('span').contains('Welcome UserName!').should('exist')
  })
})
