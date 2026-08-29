# PrepAI — Entrenador de entrevistas STAR

App web estática preparada para GitHub + Vercel. La interfaz está en español y permite practicar preguntas STAR en español, inglés o modo mixto.

## Estructura

```txt
entrenador-entrevista-star/
├── index.html       # Esqueleto de la app
├── styles.css       # Diseño
├── data.js          # Perfil inicial + STAR stories base
├── app.js           # Lógica de perfiles, preguntas, simulación, cronómetros e IA
├── vercel.json      # Rewrite /api/claude -> /api/claude.js
└── api/
    └── claude.js    # Proxy serverless para Anthropic en Vercel
```

## Qué guarda la app

No hay login real. La app usa perfiles guardados en `localStorage` como copia local y Upstash Redis en Vercel para sincronizar el contenido compartido:

- perfil activo
- iniciales
- empresas objetivo
- historial de sesiones
- STAR stories incluidas en el código
- preguntas personalizadas (compartidas entre navegadores para el mismo perfil)
- preferencias

El historial, las preferencias y las grabaciones siguen siendo locales. Las preguntas personalizadas, empresas y candidaturas se sincronizan para que el mismo perfil muestre los cambios en cualquier navegador.

## Nuevas funciones añadidas

### Mis preguntas

Desde la pestaña **Preguntas** puedes crear preguntas reales de entrevista y guardarlas dentro del perfil activo.

Cada pregunta puede tener:

- idioma: español, inglés o mixto
- competencia
- empresas relacionadas
- respuesta asociada a una STAR story existente
- respuesta propia escrita manualmente

Las preguntas guardadas se pueden editar, borrar y practicar directamente. En la versión desplegada, cada cambio se publica en Upstash y queda visible para cualquier persona que abra el mismo perfil.

### Banco STAR bilingüe

La pestaña **STAR** permite:

- estudiar cada historia en español o inglés
- comparar ambas versiones en paralelo
- practicar una historia concreta como flashcard en uno o ambos idiomas

### Exportar / importar perfil

Desde el menú de iniciales puedes:

- exportar el perfil completo a JSON
- importar un perfil JSON exportado previamente

El JSON incluye STAR stories, preguntas personalizadas, empresas e historial.

## Despliegue en Vercel

1. Sube el proyecto a GitHub.
2. Importa el repo en Vercel.
3. Añade la variable de entorno:

```txt
ANTHROPIC_API_KEY
KV_REST_API_URL
KV_REST_API_TOKEN
```

4. Despliega.

## Comandos Git

```bash
git add .
git commit -m "Add custom questions and local profile export"
git push
```


## Calendario de candidaturas

La app incluye una pestaña **Calendario** para importar tu Excel de candidaturas (`.xlsx`, `.xls` o `.csv`).

Columnas reconocidas:

- EMPRESA
- TIPO
- PUESTO
- ENTREVISTAS
- FECHA_LIMITE
- FECHA_APLICADA
- Inglés
- Sueldo
- Lugar
- link

Los datos se guardan por perfil en `localStorage`. También puedes exportarlos a CSV para volver a abrirlos en Excel.

Nota: no hay conexión en vivo con Excel/OneDrive. Es importación/exportación local, adecuada para una app personal en Vercel sin base de datos.

## v4

- Rediseño visual hacia blanco roto + azul premium.
- Header renovado con navegación más clara.
- Reto Diario rediseñado con tres modos:
  - Empresa objetivo
  - Historias STAR
  - Mis preguntas
- El reto ya no muestra respuestas genéricas: siempre intenta asociar una pregunta a una story o respuesta guardada.
- Autoevaluación más clara: Bien, Regular, Difícil.
