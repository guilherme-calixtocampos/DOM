const title = document.querySelector("#h1");
const imagem = document.querySelector("#imagem");
const texto = document.querySelector("#texto");
const resultado4 = document.querySelector("#resultado");
const botaoA = document.querySelector("#botaoA");
const resultado = document.querySelector("#resultado");

function alteraTitulo() {
    title.innerHTML = "Título alterado com sucesso!";
    title.style.color = "red";
    title.style.fontSize = "50px";
}

function alteraImagem() {
    imagem.src = "../img/cat.png";
    imagem.style.width = "250px";
    imagem.style.height = "250px";
}

function alteraTexto() {
    texto.innerHTML = "Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura latina clássica datada de 45 AC. Richard McClintock, um professor de latim do Hampden-Sydney College na Virginia, pesquisou uma das mais obscuras palavras em latim, consectetur, oriunda de uma passagem de Lorem Ipsum, e, procurando por entre citações da palavra na literatura clássica, descobriu a sua indubitável origem. Lorem Ipsum vem das seções 1.10.32 e 1.10.33 do (Os Extremos do Bem e do Mal), de Cícero, escrito em 45 AC. Este livro é um tratado de teoria da ética muito popular na época da Renascença. A primeira linha de Lorem Ipsum, vem de uma linha na seção 1.10.32.";
    texto.style.color = "blue";
    texto.style.backgroundColor = "yellow";
    texto.style.fontSize = "30px";
}

function alteraResultadoA() {
    resultado.innerHTML = "A";
}

function alteraResultadoB () {
    resultado.innerHTML = "B";
}

function alteraResultadoC () {
    resultado.innerHTML = "C";
}