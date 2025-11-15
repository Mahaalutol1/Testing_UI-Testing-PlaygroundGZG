describe('Home Page Test', () => {
  it('should load the homepage and verify basic elements', () => {
    cy.visit('/')
    cy.get('body').should('be.visible')
    cy.title().should('not.be.empty')
    cy.get('h1, h2, h3').should('have.length.greaterThan', 0)
    cy.get('a').should('have.length.greaterThan', 0)
    cy.url().should('include', 'uitestingplayground.com')
  })
})
