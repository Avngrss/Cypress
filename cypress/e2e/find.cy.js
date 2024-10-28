/// <reference types="Cypress" />

describe("Find an element on a webpage", () => {
    it('Find an element on a webpage', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()
        cy.get('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1) > span:nth-child(2)').click()
        // cy.get(".oxd-topbar-body-nav > ul").contains('apply', {matchCase: false}).click()
        cy.get(".oxd-topbar-body-nav > ul").find('li a').contains('Apply').click()
    })
})