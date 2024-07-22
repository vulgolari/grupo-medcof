describe('Teste de interface do Grupo Medcof', () => {
  it('Executa o cenário de teste no site', () => {
    // Passo 1: Abrir o site
    cy.visit('https://www.grupomedcof.com.br/home/');

    // Passo 2: Navegar para a seção de cursos
    cy.get('a[href*="#cursos-section"]').click();

    // Passo 3: Verificar se a URL correta está presente
    cy.url().should('include', '/home/#cursos-section');

    // Passo 4: Selecionar o curso HIIT
    cy.visit('https://hiit.grupomedcof.com.br/r1-acesso-direto');
    cy.contains('Quero Participar do HIIT Agora').should('exist');
  });
});
