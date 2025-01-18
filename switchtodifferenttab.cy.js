/// <reference types="cypress" />
describe('Checkboxes verification', () => {
    it('check and validate the checkbox', () => {
      cy.visit('https://webdriveruniversity.com/')
      cy.get('#contact-us').invoke('removeAttr', 'target').click();
     
 });


  })  