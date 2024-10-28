/// <reference types="Cypress" />

describe('Validate checkboxex and radio button', () => {
    it('Validate checkbox', () => {
        cy.visit('https://form.jotform.com/242895787767079')
        //check all boxex
        cy.get("input[type='checkbox']").check({force: true})
        //Uncheck all boxex
        cy.get("input[type='checkbox']").uncheck({force: true})
        //Check only a specific box
        // cy.get("input[type='checkbox']").check('Type option 1', {force: true})
        //Check multiply values
        cy.get("input[type='checkbox']").check(['Type option 1', 'Type option 2'],{force: true})
        cy.get('input[type="ckeckbox"]').should('have.length', 13, {force: true})
    })

    it('Validate radio button', () => {
        cy.visit('https://form.jotform.com/242895787767079')
        // cy.get('input[type="radio"]').first().check()
        cy.get("input[type='radio']").check('Female', {force: true})
    })
})