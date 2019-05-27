var CategoryActions = function() {

    let FILTER_ID = 'div.Facet__heading';

    this.selectFilter = function(filterOptionDescription, filterOptionId) {
       cy.get(FILTER_ID).contains(filterOptionDescription).click()
       cy.get(filterOptionId).click({ force: true })
        cy.get(FILTER_ID).contains(filterOptionDescription).click()
    }

}
module.exports = new CategoryActions();