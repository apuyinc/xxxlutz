/// <reference types="Cypress" />
var categoryActions = require('./category_actions');

context('Actions', () => {
    beforeEach(() => {
        cy.visit('https://www.xxxlutz.se/vardagsrum-C1')
    })
    
    it('Check category info, breadcrumbs and header', () => {
        cy.get('ol.Breadcrumbs__list > li')
        .then(($breadcrumbs) => {
            expect($breadcrumbs.eq(0)).to.contain('Produkter')
            expect($breadcrumbs.eq(1)).to.contain('Vardagsrum')
        })
        
        cy.get('h1.Heading__heading-1').invoke('text').then((text => {
            expect(text.trim()).to.eq('Vardagsrum')
        }))
        cy.get('h2.Heading__heading-2').invoke('text').then((text => {
            expect(text.trim()).to.eq('Vardagsrum Kategorier')
        }))
    })
    
    it.only('Check 2 filters are applied', () => {
        categoryActions.selectFilter('Fler kriterier', '#filter-control_v_eyecatcher_bestprice')
        categoryActions.selectFilter('Färg', '#filter-control_v_targetcolor_vit')

        cy.get('ol.HorizontalScrolling__scrollOnlyMobile > li')
        .then(($breadcrumbs) => {
            expect($breadcrumbs.eq(0)).to.contain('Ta bort alla filter')
            expect($breadcrumbs.eq(1)).to.contain('low price')
            expect($breadcrumbs.eq(2)).to.contain('vit')
        })
        
        cy.get('article a.ProductTile__link')
            .should('have.attr', 'data-purpose', 'productTile.link.product.images')
            .should('have.attr', 'title', 'AVLASTNINGSBORD ')
            .should('have.attr', 'href', '/p/low-price-avlastningsbord-002540002501')
     
    })
    
})
    