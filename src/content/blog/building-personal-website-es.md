---
title: "Construyendo Mi Sitio Web Personal con Astro"
description: "Cómo construí mi sitio web de portafolio personal usando Astro, React y Tailwind CSS con soporte multiidioma."
date: 2025-07-18
tags: ["portfolio", "web-development", "design", "astro", "tailwindcss"]
lang: "es"
slug: "building-personal-website-es"
previewImg: "/media/blog/art003-website-preview.jpg"
imageCredit: "https://www.pexels.com/@anthonyshkraba-production/"
---

En 2023 comencé a plantearme la idea de renovar mi sitio web personal. Necesitaba algo que realmente mostrara mi experiencia y el tipo de trabajo que realizo. Esta vez quería crear algo completamente propio, ya que mi versión anterior era simplemente un template modificado desarrollado con Jekyll.

## Buscando Inspiración

Cuando decidí empezar con el diseño, exploré diferentes opciones revisando sitios de otros desarrolladores y diseñadores. Después de unos días, tenía una idea clara: quería un sitio con tema oscuro (pero no completamente negro) y con un estilo [*synthwave*](https://es.wikipedia.org/wiki/Synthwave).

Para encontrar inspiración, exploré:
- El subreddit [r/unixporn](https://www.reddit.com/r/unixporn/)
- Dribbble
- Behance

El resultado fue este cuadro de inspiración:

<div class="flex justify-center">
  <img class="w-full max-w-[600px]" src="/media/blog/art003-website-artboard.png" alt="Cuadro de inspiración del sitio web" />
</div>

## Colores "Synthwave"

Mientras exploraba esquemas de colores para Neovim, los que más me llamaron la atención fueron [**Catppuccin**](https://github.com/catppuccin/catppuccin) y [**Tokyo Night**](https://github.com/enkia/tokyo-night-vscode-theme). Al final me decanté por Tokyo Night, ya que tiene una orientación más *synthwave* con colores más vibrantes que Catppuccin.

<div class="flex justify-center">
  <img class="w-full max-w-[500px]" src="/media/blog/art003-website-tokyo-night.png" alt="Paleta de colores Tokyo Night" />
</div>

## Esquema de Colores Final

Después de explorar variantes de la paleta original de Tokyo Night, este fue el resultado:

<div class="flex justify-center">
  <img class="w-full max-w-[550px]" src="/media/blog/art003-website-colors.png" alt="Esquema de colores final" />
</div>

## Nueva Identidad Digital

Con los colores seleccionados, comencé a trabajar en otro punto pendiente: desarrollar una mejor marca personal con mayor presencia digital.

Tras varias semanas probando diferentes tipografías y colores, me decidí por este logo que sintetiza perfectamente con los colores seleccionados:

<div class="flex justify-center">
  <img class="w-full max-w-[500px]" src="/media/blog/art003-website-logo-variations.png" alt="Variaciones del logo" />
</div>

## Stack Tecnológico

Elegir **Astro** fue una decisión fácil. Su arquitectura es simple de seguir e implementar, y en combinación con React y Tailwind CSS formaban el stack perfecto para crear un sitio web estático y optimizado con todas las secciones que buscaba desarrollar.

### ¿Por qué Astro?

- **Performance First**: La arquitectura de islas de Astro asegura zero JavaScript por defecto
- **Framework Agnóstico**: Puedo usar componentes React donde sea necesario
- **Excelente DX**: Gran soporte para TypeScript y herramientas modernas

## Características Principales

### Soporte Multiidioma

Una característica de la que estoy particularmente orgulloso es la implementación i18n. El sitio soporta español e inglés, permitiéndome llegar a una audiencia más amplia. El selector de idioma es intuitivo y mantiene el contexto a través de las secciones.

### Arquitectura de Componentes

Estructuré el sitio usando componentes reutilizables:
- `SectionContainer` - Espaciado y layout consistente
- `SectionTitle` - Tipografía unificada para títulos
- Patrones de diseño responsivo en todo el sitio

## Evolución Durante el Desarrollo

Si comparas la versión actual con el diseño original, notarás que algunas secciones evolucionaron durante el desarrollo. A medida que iba implementando, encontraba áreas para mejorar y explorar nuevas ideas, como el Bento Grid en la sección de trabajos.

Si te interesa ver el diseño original, puedes <a href="/media/blog/art003-website-original-exported.png" target="_blank" rel="noopener noreferrer">descargarlo aquí</a>.

## Claude Code y Herramientas de IA

En los últimos meses, las herramientas de IA se han vuelto populares en programación. Mi sitio web personal fue una excelente oportunidad para explorarlas. Actualmente uso principalmente **Claude Code** para:

- Generación de traducciones
- Animaciones del sitio
- Optimización de código JavaScript

Los resultados han sido excelentes, y sin duda será parte permanente de mi conjunto de herramientas de desarrollo.

## Un Proyecto en Constante Evolución

Desde su lanzamiento, este sitio se ha convertido en un proyecto vivo. Estoy muy satisfecho con el resultado y planeo seguir añadiendo contenido y mejoras. Algunas ideas futuras incluyen:

- Explorar otras herramientas de IA como Gemini CLI
- Compartir más detalles sobre mis proyectos
- Documentar el proceso de construcción de teclados mecánicos

Esperen ver más contenido de mi parte a partir de ahora.

¡Hasta la próxima!