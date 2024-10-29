/// <reference types="Cypress" />

describe('Alert in Cypress', () => {
    it('Basic Alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get(':nth-child(1) > button').click()
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.contains('I am a JS Alert')
        })
    })

    it('Basic Confirm', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get(':nth-child(2) > button').click()
        cy.on('window:confirm', (acceptConfirm) => {
            expect(acceptConfirm).to.contains('I am a JS Confirm')
        })
    })

    it('Basic Confirm OK', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get(':nth-child(2) > button').click()
        cy.on('window:confirm', (acceptConfirm) => {
            expect(acceptConfirm).to.contains('I am a JS Confirm')
        })
    })

    it('Basic Confirm Cancel', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get(':nth-child(2) > button').click()
        cy.on('window:confirm', () => {
            return false
        })
    })

    it('Basic Prompt', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((promptAlert) => {
            //Stub Windows prompt
            cy.stub(promptAlert, 'prompt').returns("Testnig Tutorial")
            cy.get(':nth-child(3) > button').click()
            cy.get('#result').contains('Testnig Tutorial')
        })
    })
})