---
title: "Building My Personal Website with Astro"
description: "How I built my personal portfolio website using Astro, React, and Tailwind CSS with multilingual support."
date: 2024-12-15
tags: ["astro", "react", "tailwind", "portfolio", "web-development"]
featured: true
lang: "en"
slug: "building-personal-website-en"
previewImg: "/media/art003-website-preview.jpg"
imageCredit: "https://www.pexels.com/@anthonyshkraba-production/"
---

# Building My Personal Website with Astro

Creating a personal website has always been on my todo list, and after years of putting it off, I finally decided to build something that truly represents me as a developer.

## Why Astro?

I chose Astro for several compelling reasons:

- **Performance First**: Astro's island architecture ensures zero JavaScript by default, shipping only what's necessary
- **Framework Agnostic**: I can use React components where needed while keeping the rest static
- **Developer Experience**: Great TypeScript support and modern tooling out of the box

## Technology Stack

The website is built with:

- **Astro v5** - The core framework
- **React** - For interactive components
- **Tailwind CSS** - For styling with a custom theme
- **TypeScript** - Type safety throughout

## Key Features

### Multilingual Support

One feature I'm particularly proud of is the i18n implementation. The site supports both English and Spanish, allowing me to reach a broader audience. The language switcher is intuitive and maintains context across page sections.

### Component Architecture

I structured the site using reusable components:

- `SectionContainer` - Consistent spacing and layout
- `SectionTitle` - Unified typography for section headers
- Responsive design patterns throughout

### Performance Optimizations

- Optimized images and assets
- Minimal JavaScript bundle
- Fast loading times across all devices

## Challenges and Solutions

The biggest challenge was implementing smooth scroll navigation for the single-page application while maintaining accessibility. I solved this by using CSS scroll-behavior and ensuring keyboard navigation works seamlessly.

## What's Next?

I'm planning to add:

- Blog functionality with content collections
- Project showcase with detailed case studies
- Interactive elements to demonstrate my skills

Building this website has been a great learning experience, and I'm excited to continue iterating on it as my skills and career evolve.

## Conclusion

This project represents not just my technical skills, but also my attention to detail and user experience. It's built with performance, accessibility, and maintainability in mind.

Feel free to explore the source code on my GitHub or reach out if you have any questions about the implementation!
