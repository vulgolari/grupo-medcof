# Cypress Test Project for Grupo Medcof

Este projeto contém testes automatizados para o site do Grupo Medcof, utilizando o Cypress para testar funcionalidades de navegação e interação.

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:
- **Node.js**
- **npm**

## Instalação

Para configurar o ambiente de teste, siga estes passos:

1. Clone o repositório para sua máquina local.
2. Navegue até o diretório do projeto.
3. Instale as dependências com o comando:

    ```bash
    npm install
    ```

## Executando os Testes

Para rodar os testes, utilize o comando:

```bash
npx cypress open
```

Isso abrirá a interface do Cypress, onde você pode executar os testes de forma interativa.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

- **`cypress/integration`**: Contém os arquivos de teste (.cy.js) para os cenários específicos.
- **`cypress/fixtures`**: Armazena dados que podem ser utilizados durante os testes.
- **`cypress/support`**: Inclui arquivos que são executados antes dos testes, como comandos personalizados.

## Comandos Personalizados

Este projeto inclui comandos personalizados do Cypress para facilitar a execução de tarefas comuns durante os testes, definidos em `cypress/support/commands.js`.

## Configuração

As configurações globais do projeto estão definidas no arquivo `cypress.config.js`. Estas incluem ajustes de tempo de espera, configurações de URL base, entre outros.

## Contribuindo

Contribuições para o projeto são bem-vindas. Antes de enviar suas contribuições, certifique-se de executar os testes existentes para garantir que tudo está funcionando como esperado.

## Licença

Este projeto é distribuído sob a licença ISC. Para mais detalhes, veja o arquivo `LICENSE` ou visite [ISC License](https://opensource.org/licenses/ISC).