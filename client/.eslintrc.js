module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'global-require': 0,
    'import/no-dynamic-require': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/no-did-update-set-state': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/label-has-associated-control': [2, {
      controlComponents: ['Checkbox'],
      assert: 'either',
      depth: 3,
    }],
    'max-len': [2, 160],
    'no-underscore-dangle': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-max-props-per-line': [2, { maximum: 10 }],
    'object-curly-newline': [2, { minProperties: 6, consistent: true }],
    'import/prefer-default-export': 0,
    'react/static-property-placement': [1, 'static public field'],
    'jsx-a11y/click-events-have-key-events': 0,
    'react/jsx-props-no-spreading': [1, {
      html: 'ignore',
      explicitSpread: 'ignore',
    }],
    'react/react-in-jsx-scope': 2,
    'no-console': 2,
    'react/prop-types': 0,
    '@typescript-eslint/naming-convention': [
      2,
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allowSingleOrDouble',
      },
    ],
    '@typescript-eslint/type-annotation-spacing': [
      2,
      {
        before: false,
        after: true,
        overrides: {
          arrow: {
            before: true,
            after: true,
          },
        },
      },
    ],
  },
};
