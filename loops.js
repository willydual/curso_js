var estudiantes = ["María", "Daniela", "Esmeralda", "Gaby"]
function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}
//Bucle For
for(var i=0; i<estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

//singular de un array otra forma con for of
for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}

//Clase 16 While
while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}