function buscar() {
    // Seleciona o elemento HTML com o ID "resultados-pesquisa"
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado.</p>";
        return;
    }
    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada objeto no array de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        if (titulo.includes(campoPesquisa)
            || descricao.includes(campoPesquisa)
            || tags.includes(campoPesquisa)) {

            resultados += `
            <div class="item-resultado">
                <h2>
                    <a>${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.mais} target="_blank">Mais informações</a>
            </div>
        `;
        }
    }

    if(!resultados){
        resultados = "<p>Resultado não encontrado.</p>"
    }

    // Atribui o HTML construído ao elemento "resultados-pesquisa"
    section.innerHTML = resultados;
}