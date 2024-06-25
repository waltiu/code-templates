module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh","eslint-plugin-import-helpers"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react-refresh/only-export-components": "off",
    "import-helpers/order-imports": [
      "error",
      { 
          "newlinesBetween": "never",
          "groups": [
              "module",
              "/^@\/",
              ["parent", "sibling","index"],
              "/\\.css|less/"
          ],
          "alphabetize": { "order": "asc", "ignoreCase": true }
      }]
  },
};
