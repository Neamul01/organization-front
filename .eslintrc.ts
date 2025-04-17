/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:tailwindcss/recommended",
  ],
  plugins: ["unused-imports"],
  rules: {
    "no-console": "warn",
    "unused-imports/no-unused-imports": "error",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "tailwindcss/classnames-order": "warn",
    "jsx-a11y/alt-text": "warn",
  },
};
