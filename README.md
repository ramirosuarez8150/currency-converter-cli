
🪙 Conversor de Monedas en Node.js

Un proyecto simple pero profesional que convierte cantidades entre distintas monedas usando una API de tipo de cambio en tiempo real.
Funciona desde la terminal y está construido 100% con JavaScript moderno (ESM).


---

🚀 Características principales

✔ Conversión de monedas en tiempo real

Obtiene tasas actualizadas desde una API pública confiable.

✔ Uso desde la terminal

Ejemplo:

node index.js USD ARS 50

✔ Colores en la consola

Gracias a chalk, los mensajes importantes se ven más claros.

✔ Funciones limpias y separadas

Código simple, mantenible y apto para añadir mejoras.

✔ Ideal para portafolio

Demuestra uso de:

JavaScript moderno (ESM Modules)

Promesas + async/await

Fetch API en Node

Manejo de errores

Librerías externas (chalk)

APIs REST



---

📦 Instalación

1. Clonar el repositorio:



git clone https://github.com/TU_USUARIO/TU_REPO.git

2. Instalar dependencias:



npm install


---

▶ Uso

Ejecutar desde la terminal:

node index.js <MONEDA_ORIGEN> <MONEDA_DESTINO> <CANTIDAD>

Ejemplos:

node index.js USD ARS 10
node index.js EUR USD 50
node index.js BRL CLP 100

Salida esperada:

10 USD equivalen a 14385.00 ARS


---

🧠 Cómo funciona internamente

1. Construye una URL dinámica según la moneda:

const url = `https://api.exchangerate-api.com/v4/latest/${desde}`;


2. Consulta la API usando fetch() (nativo de Node).


3. Verifica que existan datos válidos:

if (!datos.rates || !datos.rates[hacia]) {
    console.log("Error: moneda no válida o API sin datos.");
}


4. Calcula el resultado:

const resultado = cantidad * datos.rates[hacia];


5. Muestra el resultado con colores usando chalk.




---

🛠 Tecnologías utilizadas

Node.js

JavaScript ES Modules

fetch API

chalk

API ExchangeRate-API



---

📁 Estructura del proyecto

conversor-monedas/
│
├── index.js      # Código principal
├── package.json  # Configuración del proyecto
└── README.md     # Documentación


---

⭐ Autor

Proyecto creado por Ramiro como parte de su portafolio de aprendizaje en JavaScript y APIs.


---

🔮 Posibles mejoras futuras

Agregar interfaz web con HTML + CSS

Conversión múltiple (una moneda → varias)

Historial de conversiones

API propia con Express

Bot de WhatsApp o Telegram

