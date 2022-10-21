// https://docs.cypress.io/api/commands
describe('About', () => {

  beforeEach(() => {
    // https://docs.cypress.io/api/commands/visit
    // TODO: Convert to helper and use vue router push instead
    cy.visit('/');
  });

  it('should contain a title', () => {
    // https://docs.cypress.io/api/commands/get
    // https://docs.cypress.io/api/commands/should
    cy.get('h1')
      .should('have.length', 1)
      .should('include.text', 'Web QA Usage');
  });

});
