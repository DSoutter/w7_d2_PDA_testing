describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('running total should display result of a sum', () => {
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('#number7').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain','21')
  })

})