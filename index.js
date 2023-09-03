//1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

console.log("EJERCICIO 1");

const parImpar = (numero) => {
  if (numero % 2 === 0) {
    console.log("El número", numero, "es par");
  } else {
    console.log("El número", numero, "es impar");
  }
};

let resultadoParImpar = parImpar(12);


//2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

console.log("EJERCICIO 2");

const mayorMenor = (num1, num2) => {
  if (num1 > num2) {
    console.log("El número", num1, "es mayor");
  } else if (num1 < num2) {
    console.log("El número", num2, "es mayor");
  } else {
    console.log("Los números son iguales");
  }
};

mayorMenor(13, 3);

// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
console.log("EJERCICIO 3");

const multiploCinco = (num) => {
  if (num % 5 === 0) {
    console.log("El numero", num, "es múltiplo de 5");
  } else {
    console.log("El número", num, "no es múltiplo de 5");
  }
};

multiploCinco(123);

// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
console.log("EJERCICIO 4");

const imprimirNumeros = (num) => {
  for (let i = 0; i <= num; i++) {
    console.log(i);
  }
};

imprimirNumeros(15);

// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola esa palabra la cantidad correspondiente al número indicado.
console.log("EJERCICIO 5");

let num=7;
let palabra='hola';

const imprimirPalabrasFor = (num, palabra) =>{
  for (let i=0; i<num; i++){
    console.log(palabra);
  }
}

let i=0
const imprimirPalabras = (num, palabra) =>{
  while (i<num){
    console.log(palabra)
    i++;
  }
}

imprimirPalabras(5,'hola')

// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
console.log("EJERCICIO 6");

const lista = ["uno", "dos", "tres", "cuatro", "cinco"];

const imprimirArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};

imprimirArray(lista);

// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".
console.log("EJERCICIO 7");

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const imprimirArrayMenos5 = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (i === 4) {
      continue;
    } else {
      console.log(array[i]);
    }
  }
};

imprimirArrayMenos5(numeros);

// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.
console.log("EJERCICIO 8");

const nums = [1, 2, 3, 4, 5];
const multip = 5;

const arrayMultNumero = (array, num) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i] * num);
  }
};

arrayMultNumero(nums, 5);