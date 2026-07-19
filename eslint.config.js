import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import prettier from 'eslint-config-prettier'

export default [
  js.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  prettier,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    settings: { react: { version: 'detect' } },
    rules: {
      'react/prop-types': 'off'
    }
  }
]
