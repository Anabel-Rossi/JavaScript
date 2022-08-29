/*function nombreFuncion (){
    codigo de la funcion
    nombre de la funcion para llamarla, y parentesis para inbocarla
} 

function saludar(){
    let nombre = prompt ("ingrese su nombre");
    let mensaje = `Hola ${nombre}`;
    alert(mensaje);
}

saludar();
saludar();
saludar();*/


/*funcion con paarametros 
*/


function sumar(numero1,numero2) {
    let suma = numero1 + numero2;
    alert(suma);
}
let numero1 = parseInt(prompt("Ingrese el primer numero"));
let numero2 = parseInt (prompt("ingrese el segundo numerp"));

sumar (numero1, numero2);