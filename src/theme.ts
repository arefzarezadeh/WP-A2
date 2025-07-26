import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  globalCss: {
    html: {
      colorPalette: "green",
    },
    "*": {
      fontFamily: "'Roboto', sens-serif",
    },
  },
  theme: {
    tokens: {
      fonts: {
        body: { value: "Roboto, sens-serif" },
        heading: { value: "Roboto, sens-serif" },
        Text: { value: "Roboto, sens-serif" },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
