const productos=[
    {nombre: "remera", precio:2000},
    {nombre: "pantalon", precio:2500},
];

productos.push({nombre:"camisa", precio:3500});
console.log(productos); 




let miHonda = { color: 'rojo', ruedas: 2, motor: { cilindros: 2, cantidad: 2.2 } };
let miMoto = [miHonda, 2, 'Buen estado', 'año 2010'];
let nuevoCoche = miMoto.slice(0, 2);

//  Muestra los valores de myCar, newCar y el color de myHonda.
console.log('miMoto = ' + JSON.stringify(miMoto));
console.log('nuevoCoche = ' + JSON.stringify(nuevoCoche));
console.log('miMoto[0].color = ' + miMoto[0].color);
console.log('nuevoCoche[0].color = ' + nuevoCoche[0].color);

// Cambia el color 
miHonda.color = 'azul';
console.log('El nuevo color de mi Moto es ' + miHonda.color);

// Muestra el color referenciado desde ambos arrays. 
console.log('miMoto[0].color = ' + miMoto[0].color);

console.log('nuevoCoche[0].color = ' + nuevoCoche[0].color);


        
    