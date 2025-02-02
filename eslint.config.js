import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";

export default [
  { ignores: ["dist"] }, // Abaikan folder dist
  {
    files: ["**/*.{js,jsx}"], // Terapkan ke semua file JS/JSX
    languageOptions: {
      ecmaVersion: "latest", // Versi ECMAScript terbaru
      globals: {
        ...globals.browser, // Global browser (window, document, dll)
        ...globals.node // Global Node.js (module, process, dll)
      },
      parserOptions: {
        ecmaFeatures: { jsx: true }, // Aktifkan JSX
        sourceType: "module" // Gunakan modul ES
      }
    },
    settings: {
      react: { version: "detect" }, // Deteksi versi React secara otomatis
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx"] // Support impor file JS/JSX
        }
      }
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      import: importPlugin
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "jsx-quotes": ["error", "prefer-double"], // Gunakan double quotes di JSX
      "no-unused-vars": "warn", // Peringatkan variabel yang tidak digunakan
      "react/function-component-definition": "off", // Nonaktifkan aturan definisi komponen fungsi
      "react/react-in-jsx-scope": "off", // Nonaktifkan aturan impor React di JSX
      "react/prop-types": "warn", // Peringatkan jika prop-types tidak digunakan
      "import/no-unresolved": "off", // Nonaktifkan aturan impor yang tidak terselesaikan
      "import/extensions": "off", // Nonaktifkan aturan ekstensi impor
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true } // Izinkan ekspor konstanta selain komponen
      ],
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", ["parent", "sibling"], "index", "object", "type"],
          pathGroups: [
            {
              pattern: "./**/**\\.css",
              group: "type",
              position: "after"
            }
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
          alphabetize: { order: "asc", caseInsensitive: true },
          "newlines-between": "always",
          warnOnUnassignedImports: true
        }
      ]
    }
  }
];
