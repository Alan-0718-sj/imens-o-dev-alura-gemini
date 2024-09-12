# Filmes Hackers

Este é um projeto simples de listagem e busca de filmes relacionados ao tema de hackers, desenvolvido com HTML, CSS e JavaScript. A interface permite ao usuário pesquisar filmes e atores, e visualizar informações detalhadas sobre cada filme, além de acessar vídeos relacionados.

## Estrutura do Projeto

### 1. HTML (`index.html`)
A página principal contém o esqueleto do site e inclui:

- Título: **Filmes Hackers**.
- Um campo de pesquisa para buscar filmes ou atores.
- Um botão para baixar o currículo fictício.
- Seção de resultados onde os detalhes dos filmes serão exibidos.
- Informações de contato e direitos reservados no rodapé.

### 2. CSS
O projeto utiliza dois arquivos CSS:

- `styles.css`: Para o layout geral da página e elementos visuais.

### 3. JavaScript (`app.js` e `dados.js`)
O projeto usa JavaScript para controlar a lógica da pesquisa e exibir os resultados.

- `dados.js`: Contém um array de objetos com os detalhes dos filmes (título, descrição, link e tags).
- `app.js`: Contém a função `pesquisar()`, que realiza a busca no array de filmes com base no texto inserido no campo de pesquisa e atualiza a página com os resultados.

### Exemplo de Filmes Disponíveis:

1. **Matrix Reloaded**  
   Descrição: Neo e seus aliados continuam a luta contra as máquinas em um mundo onde ele manipula o código da Matrix.  
   [Mais informações](http://en.wikipedia.org/wiki/The_Matrix_Reloaded)  
   [Assista o vídeo](https://www.youtube.com/watch?v=0PxTAn4g20U)

2. **Snowden**  
   Descrição: A história de Edward Snowden, que revelou um vasto programa de vigilância global.  
   [Mais informações](https://en.wikipedia.org/wiki/Snowden_(film))  
   [Assista o vídeo](https://www.youtube.com/watch?v=QlSAiI3xMh4)

3. **Oito Homens e um Segredo**  
   Descrição: Personagem de Rihanna demonstra habilidades de hacker em uma cena de destaque.  
   [Mais informações](https://en.wikipedia.org/wiki/Ocean%27s_8)  
   [Assista o vídeo](https://www.youtube.com/watch?v=n5LoVcVsiSQ)

4. **Quem Sou Eu - Nenhum Sistema é Seguro**  
   Descrição: Thriller sobre um grupo de hackers que busca fama e poder, explorando vulnerabilidades da internet.  
   [Mais informações](https://en.wikipedia.org/wiki/Who_Am_I_(2014_film))  
   [Assista o vídeo](https://www.youtube.com/watch?v=5vnjheCqRIs)

### Funcionalidades

- **Pesquisa dinâmica**: O usuário pode pesquisar filmes e atores através de palavras-chave, e os resultados são atualizados automaticamente com base nos dados armazenados em `dados.js`.
- **Links externos**: Cada resultado oferece links para mais informações e vídeos relacionados aos filmes.
- **Design Responsivo**: A interface foi projetada para se adaptar a diferentes tamanhos de tela, tornando-a acessível em dispositivos móveis e desktops.

### Como Usar

1. Clone o repositório:
   ```bash
   git clone https://github.com/Alan-0718-sj/imensao-dev-alura-gemini-filmes-hackers.git
