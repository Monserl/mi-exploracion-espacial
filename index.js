import planetas from './planetas.js';
import cowsay from 'cowsay';
import chalk from 'chalk';

// Mostrar título con estilo
console.log(chalk.bold.cyan('\n🚀 Registro de Planetas Descubiertos 🪐\n'));

// Mostrar cada planeta con formato mejorado
planetas.forEach((planeta, index) => {
  console.log(chalk.yellow(`═════════════ Planeta #${index + 1} ═════════════`));
  console.log(chalk.bold.green(`Nombre: ${planeta.nombre} ${planeta.imagen}`));
  console.log(chalk.blue(`Descripción: ${planeta.descripcion}`));
  console.log(chalk.magenta(`Descubierto en: ${planeta.descubiertoEn}`));
  console.log(chalk.cyan(`Distancia desde la Tierra: ${planeta.distanciaTierra}`));
  console.log(chalk.gray(`Tipo: ${planeta.tipo}`));
  console.log();
});

// Mensaje especial con cowsay
console.log(
  cowsay.say({
    text: chalk.bold.green("¡Exploración espacial completada con éxito!"),
    e: "oO",
    T: "U "
  })
);