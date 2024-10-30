/// <reference types="Cypress" />

describe("This is fixtures tutorial", () => {
    let userData;
    before(() => {
        //Call the test data file
        cy.fixture('example').then((loginData) => {
            userData = loginData
        })
    })
    it('learn data-driven testing or parameterizing a test', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get("input[placeholder='Username']").type(userData.username)
        cy.get("input[placeholder='Password']").type(userData.password)
        cy.get('.oxd-button').click()
    })
})