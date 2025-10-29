import { defineConfig } from "orval";

export default defineConfig({
  myapp: {
    input: {
      target: "./schema_duplicated.yaml",
    },
    output: {
      clean: true,
      schemas: "output",
      target: "output/index.ts",
    },
  },
});
