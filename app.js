let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//#region  reto
let listaGenerica = [];
let lenguagesDeProgramacion = ["JavaScript","C","C++","Kotlin","Python"]
let numeros = [3,4,1,55,3,23,43]
let numeros2 = [4,6,7,85,9,3,42]
lenguagesDeProgramacion.push("Java","Ruby","Golang");
MostrarElementosEnOrdenEInversos(numeros);
promedio(numeros);
MinMax(numeros);
arraySums(numeros,numeros2);
sum(numeros);
arrayItemIndex(numeros[2],numeros);
function MostrarElementosEnOrdenEInversos(array)
{
    console.log(" mostrar elementos en orden\n")
    array.forEach(element => {
        console.log(element);
    });
    console.log(" mostrar elementos en orden inverso \n")
    for (let index = array.length-1; index >=0 ; index--) {
        const element = array[index];
        console.log(element);
    }
}
function promedio(array)
{
    let suma = 0;
    array.forEach(element => {
        suma += element;
    });
    let promedio = suma / array.length;
    console.log(`el promedio es ${promedio}`);
}
function MinMax(array)
{
  let min = array[0];
  let max = 0;
  numeros.forEach(element => {
    if(element > max)
    {
        max = element;
    }
    if(element < min)
    {
        min = element;
    }
  });
  console.log(`min is ${min} and max is ${max}`);
}
function arraySums(array1,array2)
{
    let sumResultArray = [];
    if (array1.length !== array2.length)
    {
        console.log(`incompatible arrays, array1 has ${array1.length} items and array2 has ${array2.length} items`);
        return;  // Exit the function early if the arrays are incompatible
    }
    for (let index = 0; index < array1.length; index++) {
        const number1 = array1[index];
        const number2 = array2[index];
        sumResultArray.push(number1 + number2);
    }

    sumResultArray.forEach((sumItem, index) => {
        console.log(`sum item index ${index} sum is ${sumItem}`);
    });
}
function sum(array)
{
    let suma = 0;
    array.forEach(element => {
        suma += element;
    });
    console.log(`la suma es ${suma}`);
}
function arrayItemIndex(item,array)
{
    if(!array.includes(item))
    {
        console.log("-1");
        return;
    }
    console.log(`la posicion del elemento ${item} es ${array.indexOf(item)}`)
}
//#endregion
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;

    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();