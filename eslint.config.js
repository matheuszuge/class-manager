// eslint.config.js
const tseslint = require("@typescript-eslint/eslint-plugin");
const tsParser = require("@typescript-eslint/parser");

module.exports = [
    {
        files: ["**/*.ts"],
        languageOptions: {
            parser: tsParser,
            ecmaVersion: "latest",
            sourceType: "module",
        },
        plugins: {
            "@typescript-eslint": tseslint,
        },
        rules: {
            semi: ["error", "always"],
            quotes: ["error", "double"],
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": ["warn"],
            indent: ["error", 4],
        },
    },
];
