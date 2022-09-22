const productos = [
    {
        id:1,
        nombre:"3060",
        desc:"Gafas qesi",
        precio:90000,
        img:'src/gafas1.jpg',
        cantidad:1
    },
    {
        id:2,
        nombre:"Bi-Focal",
        desc:"Grafica",
        precio:1500,
        img:'src/gafas2.jpg',
        cantidad:1
    },
    {
        id:3,
        nombre:"Fem",
        desc:"Grafica",
        precio:2000,
        img:'src/gafas3.jpg',
        cantidad:1
    },
    {
        id:4,
        nombre:"Ray ban",
        desc:"Grafica",
        precio:2000,
        img:'src/gafas6.jpg',
        cantidad:1
    },
    {
        id:5,
        nombre:"Elegant Sport",
        desc:"Grafica",
        precio:3000,
        img:'src/gafas7.jpg',
        cantidad:1
    },
]

localStorage.setItem("productos", JSON.stringify(productos));

