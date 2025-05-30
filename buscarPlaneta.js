import planetas from './planetas.js';
import chalk from 'chalk';
import readline from 'readline';

// Crear interfaz readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(chalk.bold.cyan('\n🔍 Buscador de Planetas 🪐\n'));

// Obtener el nombre del planeta del argumento de línea de comandos
const nombrePlaneta = process.argv[2];

if (nombrePlaneta) {
  buscarPlaneta(nombrePlaneta);
} else {
  rl.question('Ingresa el nombre del planeta a buscar: ', buscarPlaneta);
}

function buscarPlaneta(nombre) {
  const planetaEncontrado = planetas.find(p => 
    p.nombre.toLowerCase().includes(nombre.toLowerCase())
  );

  if (planetaEncontrado) {
    console.log(chalk.green('\n¡Planeta encontrado!'));
    console.log(chalk.yellow(`\n═════════════ ${planetaEncontrado.nombre} ═════════════`));
    console.log(chalk.blue(`Descripción: ${planetaEncontrado.descripcion}`));
    console.log(chalk.magenta(`Descubierto en: ${planetaEncontrado.descubiertoEn}`));
    console.log(chalk.cyan(`Distancia desde la Tierra: ${planetaEncontrado.distanciaTierra}`));
  } else {
    console.log(chalk.red('\nPlaneta no encontrado en nuestros registros.'));
    console.log(chalk.italic('¿Quizás quieres descubrirlo y añadirlo?'));
  }

  rl.close();
}