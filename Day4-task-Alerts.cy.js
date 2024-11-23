describe('Alerts', () => {
    it('Js Alert', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click();
        cy.on('window:alert', (t)=>{
            expect(t).to.contains('I am a JS Alert');
        })
        cy.get('#result').contains('You successfully clicked an alert');
    });

    it('Js confirm Alert-OK', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click();
        cy.on('window:confirm', (t)=>{
            expect(t).to.contains('I am a JS Confirm');
        })
        cy.get('#result').contains('You clicked: Ok');
    });
    it('Js confirm Alert-Cancel', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click();
        cy.on('window:confirm', (t)=>{
            expect(t).to.contains('I am a JS Confirm');
        })
        cy.on('window:confirm', ()=>false);
        cy.get('#result').contains('You clicked: Cancel');
    });
    it('Js prompt alert', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        
        cy.window().then((win)=>{
            cy.stub(win, 'prompt').returns('welcome')
        })
        cy.get("button[onclick='jsPrompt()']").click();
        cy.get('#result').contains('You entered: welcome');
    });
    it('Authenticated alert', () => {
        cy.visit("https://the-internet.herokuapp.com/basic_auth", {auth: {username: "admin",
            password: "admin"}})
        

        cy.get("div[class='example'] p").should('have.contain', "Congratulations");
    });
});