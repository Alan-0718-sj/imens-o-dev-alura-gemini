function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
      // alert("Por obséquio, digite o nome de um atleta ou esporte!")
      section.innerHTML = "<p>Nada foi encontrado. Por obséquio, digite o nome do filme ou ator</p>"
      return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // console.log(campoPesquisa);
  
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo =  "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()
      // Se titulo includes campoPesquisa
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // cria um novo element
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank"><strong>Mais informações</strong></a>
          <br>
          <a href="${dado.video}" target="_blank"><strong>Vídeo</strong></a>
        </div>
      `;
      }
            // Então , faça...
      console.log(dado.titulo.includes(campoPesquisa))
      // Cria um novo elemento HTML para cada dado
    }
  
    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    // Insere os resultados na seção HTML
    section.innerHTML = resultados;

    // Apaga o texto digitado na barra de pesquisa
    document.getElementById("campo-pesquisa").value = "";
  }