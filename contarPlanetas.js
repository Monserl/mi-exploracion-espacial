import planetas from './planetas.js';
import chalk from 'chalk';

console.log(chalk.bold.cyan('\n📊 Estadísticas Planetarias 🪐\n'));

const totalPlanetas = planetas.length;
const tiposPlanetas = {};

planetas.forEach(planeta => {
  tiposPlanetas[planeta.tipo] = (tiposPlanetas[planeta.tipo] || 0) + 1;
});

console.log(chalk.green(`Total de cuerpos celestes registrados: ${totalPlanetas}`));
console.log(chalk.yellow('\nDistribución por tipos:'));

for (const tipo in tiposPlanetas) {
  console.log(chalk.blue(`- ${tipo}: ${tiposPlanetas[tipo]}`));
}

console.log(chalk.italic('\n¡Sigue explorando para aumentar nuestra base de datos!'));