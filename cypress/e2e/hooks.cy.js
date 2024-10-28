/// <reference types="Cypress" />

describe('Smoke Test', () => {
    before(function() {
        cy.visit('https://www.saucedemo.com/')
    })
    beforeEach(function() {
        cy.get("input[id*='user-name']").type('standard_user')
        cy.get("input[id*='password']").type('secret_sauce')
        cy.get("input[id*='login-button']").click()
    })
    it("validate link", () => {
        cy.get("#item_4_title_link > div").click()
    })
    it("validate add to cart", () => {
        cy.get("#add-to-cart-sauce-labs-backpack").click()
    })

    afterEach(function() {
        cy.get("#react-burger-menu-btn").click()
        cy.get("#logout_sidebar_link").click()
    })
})