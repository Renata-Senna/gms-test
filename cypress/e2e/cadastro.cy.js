/// <reference types="cypress"/>

const { should } = require("chai");


describe('US-012-Funcionalidade: Cadastro de membros', () => {
  beforeEach (() => {
    cy.visit('/')
  });

  it('Deve fazer o cadastro de campos obrigatórios', () => {
    var email = `renata${Date.now()}@teste.com`
    cy.preencherCadastro('Renata', 'Senna', email, '112536987452', 'Teste@12345')
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')
  })

  it('Deve validar mensagem de erro com o campo nome inválido', () => {
    cy.preencherCadastro('Renata20', 'Senna', 'renata@teste.com', '112536987452', 'Teste@12345')
    cy.get('#signup-response').should('contain' , 'Nome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  })

  it('Deve validar mensagem de erro com o campo sobrenome inválido', () => {
    cy.preencherCadastro('Renata', 'Senna20', 'renata@teste.com', '112536987452', 'Teste@12345')
    cy.get('#signup-response').should('contain' , 'Sobrenome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  })

  it('Deve validar mensagem de erro com o campo email', () => {
    cy.preencherCadastro('Renata', 'Senna', 'renatateste.com', '112536987452', 'Teste@12345')
    cy.get('#signup-response').should('contain' , 'E-mail deve ser um email válido')
  })  

  it('Deve validar mensagem de erro de senha fraca', () => {
    cy.preencherCadastro('Renata', 'Senna', 'renata@teste.com', '112536987452', '12345')
    cy.get('#signup-response').should('contain' , 'Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)' )
    
  }) 

  it('Deve validar mensagem de erro de senha vazia', () => {
    cy.preencherCadastro('Renata', 'Senna', 'renata@teste.com', '112536987452', '')
    cy.get('#signup-response').should('contain' , 'Senha não pode estar vazia')
  })
  


/*
it('Deve validar mensagem de erro com o campo inválido' , () => {
  cy.visit('http://192.168.0.8:8080/')
    cy.get('#signup-firstname').type('123563')
    cy.get('#signup-lastname').type('Senna')
    cy.get('#signup-email').type('renata9@test.com')
    cy.get('#signup-phone').type('1195369635212')
    cy.get('#signup-password').type('Teste&2020')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Nome deve conter apenas caracteres alfabéticos, acentuados e espaços')

})

it('Deve validar mensagem de erro do campo email' , () => {
  cy.visit('http://192.168.0.8:8080/')
    cy.get('#signup-firstname').type('Renata')
    cy.get('#signup-lastname').type('Senna')
    cy.get('#signup-email').type('renata9test.com')
    cy.get('#signup-phone').type('1195369635212')
    cy.get('#signup-password').type('Teste&2020')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'E-mail deve ser um email válido')

})

it('Deve validar mensagem de erro do sobrenome' , () => {
  cy.visit('http://192.168.0.8:8080/')
    cy.get('#signup-firstname').type('Renata')
    cy.get('#signup-lastname').type('1253666')
    cy.get('#signup-email').type('renata10@test.com')
    cy.get('#signup-phone').type('1195369635212')
    cy.get('#signup-password').type('Teste&2020')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Sobrenome deve conter apenas caracteres alfabéticos, acentuados e espaços')
  
})

it('Deve validar mensagem de erro de senha fraca' , () => {
  cy.visit('http://192.168.0.8:8080/')
    cy.get('#signup-firstname').type('Renata')
    cy.get('#signup-lastname').type('Senna')
    cy.get('#signup-email').type('renata12@test.com')
    cy.get('#signup-phone').type('1195369635212')
    cy.get('#signup-password').type('1234')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Senha deve ter pelo menos 8 caracteres, incluir uma letra maiúscula, um número e um caractere especial (!@#$&*)')

  })

it('Deve validar mensagem de erro de senha vazia' , () => {
  cy.visit('http://192.168.0.8:8080/')
    cy.get('#signup-firstname').type('Renata')
    cy.get('#signup-lastname').type('Senna')
    cy.get('#signup-email').type('renata12@test.com')
    cy.get('#signup-phone').type('1195369635212')
    cy.get('#signup-password').type('')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'O campo de senha não pode estar vazio')
  
})
*/
})


