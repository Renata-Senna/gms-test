/// <reference types="cypress"/>

describe('US-001-Funcionalidade: Busca de filmes', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it('Deve buscar filmes com sucesso', () => {
        cy.get('#search-input').type('Matrix')
        cy.get('#search-button').click()
        cy.get('#results-section').should('contain' , 'Matrix')
    });

    it.only('Deve buscar filmes com sucesso de uma lista', () => {
        cy.fixture('filmes.json').then((filmes) => {
            cy.get('#search-input').type(filmes[0].titulo)
            cy.get('#search-button').click()
            cy.get('#results-section').should('contain', filmes[0].titulo)
        });
    });
    
})

    


