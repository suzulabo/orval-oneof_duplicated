import { defineConfig } from "orval";

export default defineConfig({
  nullable_NullEnum: {
    input: {
      target: "./schema_nullable_NullEnum.yaml",
    },
    output: {
      clean: true,
      schemas: "output/nullable_NullEnum",
      target: "output/nullable_NullEnum/index.ts",
    },
  },
  nullable: {
    input: {
      target: "./schema_nullable.yaml",
    },
    output: {
      clean: true,
      schemas: "output/nullable",
      target: "output/nullable/index.ts",
    },
  },
  no_nullable: {
    input: {
      target: "./schema_no_nullable.yaml",
    },
    output: {
      clean: true,
      schemas: "output/no_nullable",
      target: "output/no_nullable/index.ts",
    },
  },
});
