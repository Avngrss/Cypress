/// <reference types="Cypress" />

describe("Learning Viewport", () => {
   beforeEach(() => {
    cy.visit('https://www.google.com')
   })

   it("iphone-x", () => {
    cy.viewport("iphone-x")
    cy.log('iphone-x')
    cy.wait(2000)
   })

   it("macbook-16", () => {
    cy.viewport("macbook-16")
    cy.log('macbook-16')
    cy.wait(2000)
   })

   it("Custom Resolution", () => {
    cy.viewport(550, 750)
    cy.log('Custom Resolution')
    cy.wait(2000)
   })
})