# Conversor de Monedas – Node.js

Conversor de monedas desarrollado en Node.js que permite convertir cantidades entre distintas divisas utilizando una API de tipos de cambio en tiempo real.  
El proyecto funciona desde la terminal y está construido con JavaScript moderno (ES Modules).

---

## Funcionalidad

El conversor recibe como parámetros:
- moneda de origen
- moneda de destino
- cantidad a convertir

Y devuelve el valor convertido utilizando tasas actualizadas obtenidas desde una API externa.

---

## Características

- Conversión de monedas en tiempo real
- Ejecución desde la terminal
- Uso de JavaScript moderno (ESM)
- Manejo de promesas con async/await
- Manejo de errores para monedas inválidas o fallos de la API
- Uso de librerías externas
- Código modular y fácil de extender

---

## Ejemplo de uso

Ejecutar desde la terminal:

```bash
node index.js USD ARS 10
Otros ejemplos:

node index.js EUR USD 50
node index.js BRL CLP 100
Salida esperada:

10 USD equivalen a 14385.00 ARS
Implementación
Construcción dinámica de la URL según la moneda base

Consumo de API externa de tipo de cambio mediante fetch

Validación de datos recibidos

Cálculo del valor convertido

Salida formateada en consola utilizando colores para mayor claridad

Instalación
Clonar el repositorio:

git clone https://github.com/TU_USUARIO/TU_REPO.git
Instalar dependencias:

npm install
Estructura del proyecto
conversor-monedas/
├── index.js        # Lógica principal del conversor
├── package.json    # Configuración del proyecto
└── README.md       # Documentación
Tecnologías utilizadas
Node.js

JavaScript (ES Modules)

Consumo de APIs REST

Async / Await

Librerías externas para salida en consola

Nota
Proyecto desarrollado como práctica de consumo de APIs externas, manejo de datos, lógica de conversión y desarrollo backend en Node.js.

