const contas = document.querySelector('.contas');
const resultado = document.querySelector('.resultado');
let expressaoFinal = '';

function resultadoVisor(x){
    resultado.textContent = x;
}
function visor(y){
    contas.textContent = y;
}
function appendAlg(valor){
    expressaoFinal += valor;
    visor(expressaoFinal);
};
function calculate(expressao){
    try{
        const resultado = eval(expressao);
        resultadoVisor(resultado);
        console.log(`${resultado} is the answer, succesful calculation!`);
    }
    catch(error){
        resultadoVisor('Error!');
        console.log('Found an error on the calculations!');
    }
}
function apagar(){
    expressaoFinal = '';
    visor(expressaoFinal);
    resultadoVisor(expressaoFinal);
    console.log('Calculations erased succesfully!');
}
function corrige(z){
    let newZ = '';
    if (z[z.length - 1] == ' '){
        newZ = z.slice(0, -3);
        z = newZ;
        console.log('if works');
    }
    else{
        newZ = z.slice(0, -1);
        z = newZ;
        console.log('else works');
    }
    expressaoFinal = z;
    visor(expressaoFinal);
}
