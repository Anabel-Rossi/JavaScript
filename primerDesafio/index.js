let gastoTotal=0;
let precioProducto=0;
let contador=0;

alert("Ingrese monto de productos a sumar, al finalizar, presione dos veces la tecla ENTER para obtener el resultado ");
const ingresarPrecio=() =>{
    precioProducto= Number(
        prompt("Ingrese el precio del producto" + (contador+1)+ ":")
    );
    while (precioProducto >0) {
        gastoTotal= calcularTotal(precioProducto);
        contador++;
        precioProducto= Number(
            prompt("Ingrese el precio del producto" + (contador+1) + ":")
        );
        
    }
    if(precioProducto <=0){
        console.log("Operacion finalizada");
    };
    mostrarTotal();
}

const calcularTotal =(precioProducto)=> gastoTotal+ precioProducto;
const mostrarTotal=() =>{
    console.log("cantidad de prodcutos:" +contador);
    prompt("El monto total es de $" + gastoTotal);
};

ingresarPrecio();
                

                
