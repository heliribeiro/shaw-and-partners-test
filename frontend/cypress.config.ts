import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    supportFile: false,
    setupNodeEvents(on, config) {},
    env: {
      PUBLIC_DOMAIN: "http://localhost:4000",
    },
  },
});
