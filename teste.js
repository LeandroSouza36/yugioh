
// Percorre o array e cria um elemento de lista para cada item
deckYudias.forEach(function(item) {
    var espacoCard1 = document.querySelector(".espacoCard1")
    // Cria um elemento <img>
    var imgElement = document.createElement("img");

    // Define o caminho da imagem no atributo src
    imgElement.src = "caminho/para/sua/imagem.jpg";

    // Adiciona a classe (opcional)
    imgElement.classList.add("imagem-classe");

    // Adiciona a imagem ao contêiner
    imagemContainer.appendChild(espacoCard1);
});