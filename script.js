const imagens = document.querySelectorAll(".imagem");

let inicio = 0;
function atualizarCarrossel() {

    imagens.forEach(function(imagem) {

        imagem.classList.remove(
            "esquerda",
            "centro",
            "direita",
            "escondida"
        );
        imagem.classList.add("escondida");
    });
    imagens[inicio % imagens.length].classList.remove(
        "escondida"
    );
    imagens[inicio % imagens.length].classList.add(
        "esquerda"
    );
    imagens[(inicio + 1) % imagens.length].classList.remove(
        "escondida"
    );
    imagens[(inicio + 1) % imagens.length].classList.add(
        "centro"
    );
    imagens[(inicio + 2) % imagens.length].classList.remove(
        "escondida"
    );
    imagens[(inicio + 2) % imagens.length].classList.add(
        "direita"
    );
}
function girar() {
    inicio++;
    if (inicio >= imagens.length) {
        inicio = 0;
    }
    atualizarCarrossel();
}
imagens.forEach(function(imagem) {

    imagem.addEventListener("click", function() {

        girar();

    });

});

atualizarCarrossel();