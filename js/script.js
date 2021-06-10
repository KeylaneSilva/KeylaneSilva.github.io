// Variaveis
const cardContainer = document.querySelector('.cardContainer')
let popup = document.querySelector('.popup')


// Array
const detalhes = [
    {
        Proj: "Projeto 1",
        src:'img/cNetflix.png',
        p:'Lorem ipsum Exemplo 1'
    },
    {
        Proj: "Projeto 2",
        src: 'img/cNetflix.png',
        p:'Lorem ipsum Exemplo 2'
    },
    {
        Proj: "Projeto 3",
        src:'img/cNetflix.png',
        p:'Lorem ipsum Exemplo 3'
    },
    {
        Proj: "Projeto 4",
        src:'img/cNetflix.png',
        p:'Lorem ipsum Exemplo 4'
    },
    {
        Proj: "Projeto 5",
        src:'img/cNetflix.png',
        p:'Lorem ipsum Exemplo 5'
    },
    {
        Proj: "Projeto 6",
        src:'img/cNetflix.png',
        p:'Lorem ipsum Exemplo 6'
    },
]

// Funções
exibir()

function exibir(){
    detalhes.forEach(function(card, index){
        let cardSingle = document.createElement("div")
        cardSingle.classList.add("banner")
        cardSingle.innerHTML = `<a onclick="abrir()"><img src="${card.src}" alt=""></a><p>${card.Proj}</p>`
        cardContainer.append(cardSingle)
    })
}

function abrir(){
    let imagem 
    let bannerImg = document.querySelectorAll(".banner")
    
    detalhes.forEach((value, index) => {
        
        bannerImg[index].addEventListener('click', ()=>{
            imagem = detalhes[index]
            popup.innerHTML = `<div class="img">
                                    <img src="${imagem.src}" alt="">
                                </div>
                                <p>${imagem.p}</p>
                                <a href="#">GitHub</a>
                                <a onclick="fechar()">Voltar</a>`
        })
    })
    popup.style.display = "block"
}

function fechar(){
    popup.style.display = "none"
}
