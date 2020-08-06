export const app =
  'Step: ' +
  Cypress.config()
    .integrationFolder.split('\\')
    .find(pathSegment => /[0-9]/.test(pathSegment));

describe(app, () => {
  before(() => {
    cy.visit('/');
  });
  it('should have elements with correct classes', () => {
    cy.get(
      'tbody:nth-child(2) > :nth-child(2) .employee-name'
    ).should('have.class', 'region-Central');

    cy.get(
      'tbody:nth-child(4) > :nth-child(2) .employee-name'
    ).should('have.class', 'region-Eastern');
    cy.get(
      'tbody:nth-child(3) > :nth-child(2) .employee-name'
    ).should('have.class', 'region-Western');
    cy.get('tbody:nth-child(2) > :nth-child(2) .bar').should(
      'have.class',
      'bar fired'
    );
    cy.get('tbody:nth-child(2) > :nth-child(4)  .bar').should(
      'have.class',
      'bar'
    );
    cy.get('tbody:nth-child(3) > :nth-child(2)  .bar').should(
      'have.class',
      'bar bonus'
    );
  });
});
