function pesquisar() {
    let resultado = document.getElementById("resultado");

    let campoPesquisa = document.getElementById("InputPesquisa").value

    if(!campoPesquisa) {
        resultado.innerHTML = "<p>Para pesquisar digite algo no campo</P>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let nome = "";
    let descricao = "";
    let tags = "";

    for (let dado of dados) {
        nome = dado.nome.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        if(nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
            <h2>
            <a href=${dado.insta} target="_blank">${dado.nome}</a>
            </h2>
            <p class="descricao-meta">Descrição:${dado.descricao}</P>
            <p class="descricao-meta">Esporte:${dado.esporte}</P>
            <p class="descricao-meta">Idade:${dado.idade}</P>
            <a href=${dado.link} target=_blank>Mais informações</a>
            </div>
            `;
        }
    }

    if (!resultados) {
        resultados = "<p>Não foi encontrado nada relacionado a sua busca</p>"
    }

    resultado.innerHTML= resultados;
}