require("@rushstack/eslint-config/patch/modern-module-resolution");

module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },

  parser: "@typescript-eslint/parser",
  parserOptions: {
    // ecmaVersion: 12,
    // ecmaFeatures: {
    //   jsx: true,
    // },
    // sourceType: "module",
    tsconfigRootDir: __dirname,
  },

  settings: {
    react: {
      version: "detect", // 사용자가 설치한 버전을 자동으로 선택
    },
  },

  plugins: ["react", "react-refresh", "jsx-a11y", "import"],
  extends: [
    "@rushstack/eslint-config/profile/web-app",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
  ],

  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
          "unknown",
        ],
        pathGroups: [],
        "newlines-between": "always",
        pathGroupsExcludedImportTypes: [],
        alphabetize: {
          order: "asc",
        },
      },
    ],
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
