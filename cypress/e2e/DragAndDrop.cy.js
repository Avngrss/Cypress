/// <reference types="Cypress" />

describe("Drag and Drop", () => {
    it('learn drag and drop', () => {
        cy.visit('https://vishalok12.github.io/jquery-dragarrange/')
        cy.get('.draggable-element.d-1').drag('.draggable-element.d-3', {force: true})
    })
})