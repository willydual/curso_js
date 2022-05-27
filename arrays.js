var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];
//Elementos en el Array
console.log(frutas);
//Longitud del array
console.log(frutas.length);
//Acceder al index 0
console.log(frutas[0]);
//Empujar elemento se va al final del array último index Push()
var masFrutas = frutas.push("Pera");
//Va a eliminar el último elemento del ar
var ultimo = frutas.pop("Pera");
//Un shift manda el elemento a inicio
var nuevaLongitud = frutas.unshift("Uvas");
//Eliminar el elemento que está al inicio
var borrarFruta = frutas.shift("Uvas");
//Ver la posición del elemento
var posicion = frutas.indexOf("Cereza");
