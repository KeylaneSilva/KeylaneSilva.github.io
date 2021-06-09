const imgProjetos = document.querySelectorAll('.img-projetos');
const cardProjeto = document.querySelectorAll('.cardPro');
const pProjeto = document.querySelectorAll('.p-projetos');


imgProjetos.forEach((img) =>{
img.onmouseover = () => {
        img.classList.add('opacidade')
        p()

    }
    img.onmouseout = () => {
        img.classList.remove('opacidade')
    }  
})

function p(){
    pProjeto.forEach((p) => {
        p.classList.remove('visivel')
    })
}


