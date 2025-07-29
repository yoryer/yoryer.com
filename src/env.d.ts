/// <reference path="../.astro/types.d.ts" />

/// <reference types="astro/client" />

declare global {
  const Response: typeof globalThis.Response;
  const console: typeof globalThis.console;
  const process: typeof globalThis.process;
}
