import { createConfigForNuxt } from '@nuxt/eslint-config/flat'
import prettierPlugin from 'eslint-plugin-prettier'
import prettier from 'eslint-config-prettier'

export default createConfigForNuxt().append({
  plugins: {
    prettier: prettierPlugin,
  },
  rules: {
    ...prettier.rules,
    'vue/multi-word-component-names': 'off', // désactive le bruit inutile
    'prettier/prettier': 'error',
  },
})
