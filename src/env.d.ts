/// <reference path="../.astro/types.d.ts" />

import { type Container, type Engine } from "tsparticles-engine";

export {};

declare global {
  interface Window {
    particlesInit: (engine: Engine) => Promise<void>;
    particlesLoaded: (container: Container) => void;
  }
}