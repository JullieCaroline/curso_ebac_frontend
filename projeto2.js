let materia = document.getElementById("materia")
let media = document.getElementById("media")
let tabela = document.getElementById("tabela")
let formulario = document.getElementById("form")

formulario.addEventListener("submit", function clicar(event){
    
    event.preventDefault()

    let nomeMateria = materia.value
    let valorMedia = Number(media.value)

    // Cria uma nova linha:

    let novaLinhaTabela = tabela.insertRow()
    
    // Cria uma nova Célula: Nome da matéria:

    let celulaMateria = novaLinhaTabela.insertCell()
    celulaMateria.textContent = nomeMateria

    // Cria uma nova Célula: Nota:

    let celulaNota = novaLinhaTabela.insertCell()
    celulaNota.textContent = valorMedia

    if (valorMedia >= 7) {
        let celulaAprovado = novaLinhaTabela.insertCell()
        celulaAprovado.innerHTML = "<mark id='verde'>Aprovado!</mark> <img id='aprovado' src='imagens/aprovado.png'>" 
    } else {
        let celulaReprovado = novaLinhaTabela.insertCell()
        celulaReprovado.innerHTML = "<mark id='vermelho'>Reprovado!</mark> <img id='reprovado' src='imagens/reprovado.png'>"
    }

    formulario.reset()
})