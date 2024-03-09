import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site:'https://yousefhelly.github.io',
  base:'/PRODIGY_WD_01',
  integrations: [tailwind(), react()]
});