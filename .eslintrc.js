module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["airbnb"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },

  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "jsx-a11y/label-has-for": [
      2,
      {
        required: {
          every: ["id"]
        }
      }
    ],
    "no-underscore-dangle": ["error", { allow: ["_id"] }],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }]
  }
};
