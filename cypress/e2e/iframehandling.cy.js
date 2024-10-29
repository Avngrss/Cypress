/// <reference types="Cypress" />

describe("Handling iframe", () => {
    it("Validate that user can write text inside the area", () => {
        cy.visit('https://the-internet.herokuapp.com/iframe');
        cy.get('#mce_0_ifr').then(($iframe) => {
            let iframeBody = $iframe.contents().find('body')
            cy.wrap(iframeBody)
            .clear()
            .type('Cypress tutorial by testing iframe')
        })
    })
})