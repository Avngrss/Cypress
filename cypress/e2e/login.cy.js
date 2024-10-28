/// <reference types="Cypress" />

describe("Login in HRM", () => {
    it('Valid login in application', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.get("input[name='username']").type('Admin')
        // cy.get("input[name='password']").type('admin123')
        // cy.get("button.orangehrm-login-button").click()
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()
    })
})