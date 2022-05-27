var objeto = {
    nombre : "William",
    edad : 22,
    ciudad : "Tekax",
    detalle: function(){
        console.log(`Persona física: ${this.nombre}, Edad ${this.edad}`);
    }
}

console.log(objeto);
console.log(objeto.ciudad);
objeto.detalle();