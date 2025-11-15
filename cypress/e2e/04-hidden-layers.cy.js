describe('Hidden Layers Test', () => {
  it('should click a button that may become hidden', () => {
    cy.visit('/hiddenlayers')
    cy.contains('button', 'Button').should('be.visible')
    cy.contains('button', 'Button').click()
    cy.get('button').should('exist')
  })
})
