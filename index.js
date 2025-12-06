import chalk from "chalk";

async function convertirMoneda(desde, hacia, cantidad) {
    const url = `https://api.exchangerate-api.com/v4/latest/${desde}`;

    console.log(chalk.blue(`\nURL generada: ${url}\n`));

    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();

        if (!datos || !datos.rates || !datos.rates[hacia]) {
            console.log(chalk.red("Error: moneda no válida o API sin datos."));
            return;
        }

        const tasa = datos.rates[hacia];
        const resultado = cantidad * tasa;

        console.log(
            chalk.green(
                `${cantidad} ${desde} equivalen a ${resultado.toFixed(2)} ${hacia}`
            )
        );

    } catch (error) {
        console.log(chalk.red("Error al conectar con la API:"), error);
    }
}

// --------------------------------------------
//     LECTURA DE ARGUMENTOS DESDE TERMINAL
// --------------------------------------------
// Ejemplo de uso:
//     node index.js USD ARS 50

const desdeCLI = process.argv[2];
const haciaCLI = process.argv[3];
const cantidadCLI = Number(process.argv[4]);

if (!desdeCLI || !haciaCLI || !cantidadCLI) {
    console.log(chalk.yellow("Uso correcto:"));
    console.log(chalk.cyan("  node index.js USD ARS 50"));
    process.exit();
}

convertirMoneda(desdeCLI, haciaCLI, cantidadCLI);
