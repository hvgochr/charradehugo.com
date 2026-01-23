import astroPlugin from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

export default [
  ...tseslint.configs.recommended,
  ...astroPlugin.configs.recommended,
  {
    ignores: ["dist/", "node_modules/", ".astro/", "pnpm-lock.yaml"],
  },
];
