var pregunta = prompt("Escoje piedra, papel o tijera "); 
var user = pregunta.toLowerCase();
var options = ["piedra", "papel", "tijera"];
var machine = options[Math.floor(Math.random() * 3)];

switch (true) {
    case (user === machine):
        console.log('Empato');
        break;
    case (machine === 'Piedra' && user === 'Papel'):
        console.log('Ganaste')
        break;
    case (machine === 'Papel'  && user === 'Tijera'):
        console.log('Ganaste')
        break;
    case (machine === 'Tijera' && user === 'Piedra'):
        console.log('Ganaste')
        break;
    default:
        console.log('Caso perdido!');       
}
