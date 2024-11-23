/// <reference types="cypress" />
describe('contactusform', () => {
    it('Verify user is able to submit the form', () => {
      cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
      cy.get('[name="first_name"]').type('test firstname') //locate element using atttribute
      cy.get(".feedback-input[name='last_name']").type('test lastname') //locate element using class & atttribute
      cy.xpath("//input[@placeholder='Email Address']").type('test@test.com') //locate element using xpath
      cy.get('textarea.feedback-input').type('test comment')
      cy.get('[type="submit"]').click()
    });
  })