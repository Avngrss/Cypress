/// <reference types="Cypress" />

describe('Validate dropdowns', () => {
    it('Validate select based dropdown', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get("input[id*='user-name']").type('standard_user')
        cy.get("input[id*='password']").type('secret_sauce')
        cy.get("input[id*='login-button']").click()
        cy.get("select.product_sort_container").select('Price (high to low)')
    })
})