/// <reference types="cypress" />
describe('contact us form', () => {
    it('Verify that the form is submitted successfully', () => {
      cy.viewport('iphone-6')
      cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
      cy.get('[name="first_name"]').type('test')
      cy.get('[name="last_name"]').type('test')
      cy.get('[name="email"]').type('test@test.com')
      cy.get('textarea.feedback-input').type('test')
      cy.get('[type="submit"]').click()
      cy.get('h1').should('have.text', 'Thank You for your Message!')
    });
});