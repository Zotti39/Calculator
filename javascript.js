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
function matematica(esquerdo, operador, direito){
//Now the functions that will substitute eval():
    switch(operador){
        case '+':
            return esquerdo + direito;
        case '-':
            return esquerdo - direito;
        case '*':
            return esquerdo * direito;
        case '/':
            if (direito === 0){
                throw new Error(`Can't divide by zero`);
            }
            return esquerdo / direito;
        default:
            throw new Error('Unknown operator');
    } 
}
function operar(arrayValor, arrayOperador){
//This function simplifies the process for the next function, on the lines 87 and 93;
    let direito = arrayValor.pop();
    let esquerdo = arrayValor.pop();
    let operador = arrayOperador.pop();
    const newValue = matematica(esquerdo, operador, direito);
    arrayValor.push(newValue);
}
function resolverExpressao(x){
//Divide the given string into an array of numbers and operrators so we can work on them:
    const expression = x.match(/\d+|\+|\-|\*|\//g);
    const array = expression.map((item)=>{
        if (/\d+/.test(item)){
            return parseFloat(item);
        }
        return item;
    });
//Now divide the existing array in two new ones, one for the values and one for the operators:
    let valores = [];
    let operadores = [];
    const ordem = {
        '+' : 1,
        '-' : 1,
        '*' : 2,
        '/' : 2,
    }
    for (let i of array){
        if (/\d+/.test(i)){
            valores.push(i);
        }
        else{
//Attention to the && and ||, this part also solves when it comes next
//to a multiplication or division, since it is solved first in mathematics
            while(operadores.length > 0 && ordem[operadores[operadores.length - 1]] >= ordem[i]){
                operar(valores, operadores);
            }
            operadores.push(i);
        }
    }
    while (operadores.length > 0){
        operar(valores, operadores);
    }
//Show the result on the screen:
    resultadoVisor(valores[0]);
}