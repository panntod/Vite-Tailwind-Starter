module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ["react", "import", "unused-imports"],
  extends: ["airbnb", "airbnb/hooks", "plugin:import/recommended", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  overrides: [
    {
      files: ["src/**/*.{js,jsx}"],
      rules: {
        "react/prop-types": "off",
        "import/order": [
          "error",
          {
            groups: [
              "builtin",
              "external",
              "internal",
              ["parent", "sibling"],
              "index",
              "object",
              "type",
            ],
            pathGroups: [
              {
                pattern: "./**/**\\.css",
                group: "type",
                position: "after",
              },
            ],
            pathGroupsExcludedImportTypes: ["builtin"],
            alphabetize: {
              order: "asc",
              caseInsensitive: true,
            },
            "newlines-between": "always",
            warnOnUnassignedImports: true,
          },
        ],
      },
    },
  ],
  rules: {
    "jsx-quotes": ["error", "prefer-double"],
    "no-unused-vars": "warn",
    "react/function-component-definition": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "warn",
    semi: "error",
  },
};
