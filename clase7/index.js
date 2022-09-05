//encuentra el producto ingresado
const mercaderia= [
  {id: 1, nombre: "Arroz", precio: 2000},
  {id: 2, nombre: "Fideos", precio: 1500},
  {id: 3, nombre: "Aceite", precio: 110},
  {id: 4, nombre: "Yerba", precio: 700},
];
let precio = parseInt(prompt("Ingrese el precio del producto a encontrar"));
let producto = mercaderia.find(item => item.precio === precio);
console.log(producto);


//map transforma cada uno de los items segun lo indicado
const productos = [
  {id: 1, nombre: "Remera", precio: 2000},
  {id: 2, nombre: "Pantalon", precio: 1500},
  {id: 3, nombre: "Jeans", precio: 510},
  {id: 4, nombre: "zapatillas", precio: 1700},
];
let cupon = 500
let nombres = productos.map(item => {
  return {
    id: item.id,
    nombre: item.nombre,
    precio: item.precio - cupon
  }
});
console.log(nombres);

const total = productos.reduce((acumulador, item) => acumulador + item.precio, 0);
console.log(total);



console.log(Date());