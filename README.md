# BRQ Movies

## Descrição do Projeto

O **BRQ Movies** é uma aplicação móvel desenvolvida para possibilitar o usuário ver e favoritar seus filmes

## Tecnologias Utilizadas

### Desenvolvimento

- **React Native**: Framework para construção de aplicações móveis nativas usando React.
- **React Navigation**: Biblioteca de navegação para gerenciar rotas e navegação dentro da aplicação.
- **Styled Components**: Utilizado para estilização dos componentes com uma abordagem CSS-in-JS.
- **Context API**: Gerenciamento de estado leve e compartilhamento de dados entre componentes.
- **Redux**: Biblioteca para gerenciamento de estado global da aplicação.
- **React Hooks**: Utilizado para gerenciar estado e efeitos colaterais em componentes funcionais.

### Bibliotecas

- **React Query**: Biblioteca utilizada para realizar requisições
- **React Native Popover View**: Biblioteca para criação de menus popover

### Testes

- **Detox**: Ferramenta de teste de ponta a ponta (E2E) para aplicativos React Native.
- **Jest**: Framework de testes em JavaScript para garantir a funcionalidade e confiabilidade dos componentes e lógica da aplicação.

## Funcionalidades

- **Listagem de filmes**: Exibe filmes populares do TMDB
- **Favoritos**: Permite ao usuário salvar os seus filmes favoritos

## Como Executar o Projeto

1. **Clone o Repositório**:
   ```sh
   git clone git@github.com:pedro-olavo/brq-movies.git
   cd brq-movies
   ```

2. **Instale as Dependências**:
   ```sh
   yarn install
   ```

3. **Execute a Aplicação**:
   ```sh
   yarn start
   ```

4. **Execute os Testes**:
   - **Detox**:
     ```sh
     yarn build:detox
     yarn test:detox
     ```

## Estrutura do Projeto

- **/src**: Contém o código-fonte da aplicação.
  - **/assets**: Recursos estáticos e imagens.
  - **/components**: Componentes reutilizáveis.
  - **/contexts**: Configurações e provedores do Context API.
  - **/hooks**: Hooks da aplicação.
  - **/modules**: Modulos da aplicação.
  - **/routes**: Configurações de navegação.
  - **/stores**: Configurações e stores do Redux.
  - **/theme**: Estilos globais e temas.
  - **/helper**: Funções Auxiliares
  - **/services**: Configurações do Axios

## Contribuições

Contribuições são bem-vindas! Se você encontrar um problema ou tiver uma sugestão, sinta-se à vontade para abrir uma _issue_ ou enviar um _pull request_.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Feito com ❤️ por [Pedro Olavo](https://github.com/pedro-olavo).
