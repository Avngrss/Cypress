/// <reference types="Cypress" />

describe('Tabs', () => {
    it('Testing Tabs', () => {
        cy.visit('https://www.google.com/gmail/about/')
        cy.get('.footer__links > :nth-child(2) > :nth-child(4) > .link').invoke('removeAttr', 'target').click()
        cy.get('#page-content > section.modules-lib__interstitial.glue-page.side-headlines-layout.blue._helpful-technology-interstitial > div > div.modules-lib__interstitial--headline-container.glue-grid__col.glue-grid__col--span-4-sm.glue-grid__col--span-4-md.glue-grid__col--span-4-lg.glue-grid__col--align-middle > a').click()
    })
})