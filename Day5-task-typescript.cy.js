it('Typescript', () => {
    cy.visit("https://www.google.com/")
    cy.get('#APjFqb').type('automation test{enter}')
});