var articulos = [
    {nombre: "Bici", costo:3000},
    {nombre: "Tv", costo:5000},
    {nombre: "Libro", costo:320},
    {nombre: "Celular", costo:10000},
    {nombre: "Laptop", costo:20000},
    {nombre: "Teclado", costo:2500},
    {nombre: "Audifónos", costo: 700}
];
//Clase 20
//Find()
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop";
});
//Regresa solo los nombres ForEach()
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
})
//some()
var baratos = articulos.some(function(articulo){
    return articulo.costo <=700;
});


var nombreArticulos = articulos.map(function(articulo)
{
    return articulo.nombre;
});

console.log(nombreArticulos);