// eslint.config.js
import { defineConfig } from "eslint/config";
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = defineConfig([
  // ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...nextVitals,
  ...nextTs,
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js"],
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "*.config.js",
      "*.config.mjs",
      "*.config.ts"
    ],
    rules: {
      "semi": ["error", "always"],
      "space-before-blocks": ["error", "always"],
      "space-before-function-paren": ["error", "always"],
      "array-bracket-spacing": ["error", "always"],
      "object-curly-spacing": ["error", "always"],
      "react/jsx-curly-spacing": ["error", { "when": "always" }],
      "space-in-parens": ["error", "always"],
      "indent": ["error", 2, { "SwitchCase": 1 }],
      "react/jsx-indent": ["error", 2],
      "quotes": ["error", "double"],
      "space-infix-ops": "error",
      "no-multiple-empty-lines": ["error", { "max": 2 }],
      "eqeqeq": ["error", "always"],
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["warn"],
      "react/jsx-tag-spacing": ["error", { "beforeSelfClosing": "always" }],
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "always"],
      "computed-property-spacing": ["error", "always"],

    },
  },
]);

export default eslintConfig;