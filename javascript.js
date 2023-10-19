const contas = document.querySelector('.contas');
const resultado =document.querySelector('.resultado');
let expressaoFinal = '';

function visor(){
    contas.textContent = expressaoFinal;
}
function appendAlg(valor){
    expressaoFinal += valor;
    visor();
};
