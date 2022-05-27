function cliente(nombre, edad, ciudad){
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad;
}

personas = [];

var personaFisica = new cliente("Karla", 22, "Mérida");
var personaFisica2 = new cliente("Rosalía", 21, "Ticul");
var personaFisica3 = new cliente("Karen", 16, "Kinil");

nombres = ["Lorena", "Martina", "Karina", "Miranda", "Mónica"];
edades = [20, 22, 21, 30, 28];
ciudades = ["Mérida", "Tekax", "Kinil", "Cancún", "Progreso"];

for (var i=0; i<5; i++){
    personas.push(new cliente(nombres[i], edades[i], ciudades[i]));
}

for(let i = 0 ; i < personas.length ; i++){
    console.log(personas[i]);
}