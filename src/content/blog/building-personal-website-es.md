---
title: "Construyendo Mi Sitio Web Personal con Astro"
description: "Cómo construí mi sitio web de portafolio personal usando Astro, React y Tailwind CSS con soporte multiidioma."
date: 2024-12-15
tags: ["astro", "react", "tailwind", "portafolio", "desarrollo-web"]
featured: true
lang: "es"
slug: "building-personal-website-es"
previewImg: "/media/art003-website-preview.jpg"
imageCredit: "https://www.pexels.com/@anthonyshkraba-production/"
---

# Construyendo Mi Sitio Web Personal con Astro

Crear un sitio web personal siempre ha estado en mi lista de tareas pendientes, y después de años de posponerlo, finalmente decidí construir algo que realmente me represente como desarrollador.

## ¿Por qué Astro?

Elegí Astro por varias razones convincentes:

- **Rendimiento Primero**: La arquitectura de islas de Astro asegura cero JavaScript por defecto, enviando solo lo necesario
- **Agnóstico de Framework**: Puedo usar componentes de React donde sea necesario mientras mantengo el resto estático
- **Experiencia de Desarrollador**: Gran soporte para TypeScript y herramientas modernas listas para usar

## Stack Tecnológico

El sitio web está construido con:

- **Astro v5** - El framework principal
- **React** - Para componentes interactivos
- **Tailwind CSS** - Para estilos con un tema personalizado
- **TypeScript** - Seguridad de tipos en todo el proyecto

## Características Principales

### Soporte Multiidioma

Una característica de la que estoy particularmente orgulloso es la implementación de i18n. El sitio soporta tanto inglés como español, permitiéndome alcanzar una audiencia más amplia. El selector de idioma es intuitivo y mantiene el contexto a través de las secciones de la página.

### Arquitectura de Componentes

Estructuré el sitio usando componentes reutilizables:

- `SectionContainer` - Espaciado y diseño consistente
- `SectionTitle` - Tipografía unificada para encabezados de sección
- Patrones de diseño responsivo en todo el sitio

### Optimizaciones de Rendimiento

- Imágenes y assets optimizados
- Bundle de JavaScript mínimo
- Tiempos de carga rápidos en todos los dispositivos

## Desafíos y Soluciones

El mayor desafío fue implementar navegación de scroll suave para la aplicación de página única mientras mantenía la accesibilidad. Lo resolví usando CSS scroll-behavior y asegurándome de que la navegación por teclado funcione perfectamente.

## ¿Qué Sigue?

Estoy planeando agregar:

- Funcionalidad de blog con colecciones de contenido
- Vitrina de proyectos con estudios de caso detallados
- Elementos interactivos para demostrar mis habilidades

Construir este sitio web ha sido una gran experiencia de aprendizaje, y estoy emocionado de continuar iterando en él mientras mis habilidades y carrera evolucionan.

## Conclusión

Este proyecto representa no solo mis habilidades técnicas, sino también mi atención al detalle y experiencia de usuario. Está construido con rendimiento, accesibilidad y mantenibilidad en mente.

¡Siéntete libre de explorar el código fuente en mi GitHub o contactarme si tienes alguna pregunta sobre la implementación!
