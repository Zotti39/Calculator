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
function add(a, b){
    return parseInt(a) + parseInt(b);
}
function subtract(a,b){
    return parseInt(a) - parseInt(b);
}
function multiply(a,b){
    return parseInt(a) * parseInt(b);
}
function divide(a,b){
    return parseInt(a)/parseInt(b);
}
let arraySumMinus = [];

function calculate2(expressao){
    const arr = expressao.split(' ');
    console.log(arr);
    //here i solved * and / equations and send it to a new array where there will only be + and -;
    arr.forEach((item, index) => {
        if(item == '+'){
            arraySumMinus.push('+');
        }
        if(item == '-'){
            arraySumMinus.push('-');
        }
        if(item == '*'){
            let resultadoMultiply = multiply(arr[index-1],arr[index+1]);
            arraySumMinus.push(resultadoMultiply);
        }
        if(item == '/'){
            let resultadoDivide = divide(arr[index-1],arr[index+1]);
            arraySumMinus.push(resultadoDivide);
        }
    });
    arraySumMinus.forEach((item, index)=>{
        if(item == '+'){
            let resultadoSum = add(arr[index-1],arr[index+1]);
            //stopped here 13:23 - 20/10/23;
        }
        if(item == '-'){
            
        }
    })
}


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
