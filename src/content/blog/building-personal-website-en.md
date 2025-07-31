---
title: "Building My Personal Website with Astro"
description: "How I built my personal portfolio website using Astro, React, and Tailwind CSS with multilingual support."
date: 2025-07-18
tags: ["portfolio", "web-development", "design", "astro", "tailwindcss"]
lang: "en"
slug: "building-personal-website-en"
previewImg: "/media/blog/art003-website-preview.jpg"
imageCredit: "https://www.pexels.com/@anthonyshkraba-production/"
---

In 2023, I began considering the idea of renovating my personal website. I needed something that truly showcased my experience and the type of work I do. This time I wanted to create something completely my own, as my previous version was simply a modified template developed with Jekyll.

## Finding Inspiration

When I decided to start designing, I explored different options by reviewing sites from other developers and designers. After a few days, I had a clear idea: I wanted a site with a dark theme (but not completely black) and with a [*synthwave*](https://en.wikipedia.org/wiki/Synthwave) style.

To find inspiration, I explored:
- The subreddit [r/unixporn](https://www.reddit.com/r/unixporn/)
- Dribbble
- Behance

The result was this inspiration board:

<div class="flex justify-center">
  <img class="w-full max-w-[600px]" src="/media/blog/art003-website-artboard.png" alt="Website inspiration board" />
</div>

## "Synthwave" Colors

While exploring color schemes for Neovim, the ones that caught my attention the most were [**Catppuccin**](https://github.com/catppuccin/catppuccin) and [**Tokyo Night**](https://github.com/enkia/tokyo-night-vscode-theme). In the end, I chose Tokyo Night, as it has a more *synthwave* orientation with more vibrant colors than Catppuccin.

<div class="flex justify-center">
  <img class="w-full max-w-[500px]" src="/media/blog/art003-website-tokyo-night.png" alt="Tokyo Night color palette" />
</div>

## Final Color Scheme

After exploring variants of the original Tokyo Night palette, this was the result:

<div class="flex justify-center">
  <img class="w-full max-w-[550px]" src="/media/blog/art003-website-colors.png" alt="Final color scheme" />
</div>

## New Digital Identity

With the colors selected, I began working on another pending item: developing a better personal brand with greater digital presence.

After several weeks trying different typefaces and colors, I decided on this logo that perfectly synthesizes with the selected colors:

<div class="flex justify-center">
  <img class="w-full max-w-[500px]" src="/media/blog/art003-website-logo-variations.png" alt="Logo variations" />
</div>

## Technology Stack

Choosing **Astro** was an easy decision. Its architecture is simple to follow and implement, and in combination with React and Tailwind CSS, they formed the perfect stack to create a static and optimized website with all the sections I wanted to develop.

### Why Astro?

- **Performance First**: Astro's island architecture ensures zero JavaScript by default
- **Framework Agnostic**: I can use React components where necessary
- **Excellent DX**: Great TypeScript support and modern tooling

## Key Features

### Multilingual Support

One feature I'm particularly proud of is the i18n implementation. The site supports Spanish and English, allowing me to reach a broader audience. The language switcher is intuitive and maintains context across sections.

### Component Architecture

I structured the site using reusable components:
- `SectionContainer` - Consistent spacing and layout
- `SectionTitle` - Unified typography for headings
- Responsive design patterns throughout the site

## Evolution During Development

If you compare the current version with the original design, you'll notice that some sections evolved during development. As I was implementing, I found areas to improve and explore new ideas, like the Bento Grid in the work section.

If you're interested in seeing the original design, you can <a href="/media/blog/art003-website-original-exported.png" target="_blank" rel="noopener noreferrer">download it here</a>.

## Claude Code and AI Tools

In recent months, AI tools have become popular in programming. My personal website was an excellent opportunity to explore them. I currently mainly use **Claude Code** for:

- Translation generation
- Site animations
- JavaScript code optimization

The results have been excellent, and it will undoubtedly be a permanent part of my development toolkit.

## An Ever-Evolving Project

Since its launch, this site has become a living project. I'm very satisfied with the result and plan to continue adding content and improvements. Some future ideas include:

- Exploring other AI tools like Gemini CLI
- Sharing more details about my projects
- Documenting the mechanical keyboard building process

Expect to see more content from me from now on.

See you next time!