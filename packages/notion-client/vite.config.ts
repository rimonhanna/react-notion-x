import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { defineConfig } from 'vitest/config'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  test: {
    environment: 'node',
    deps: {
      inline: [/^(?!.*vitest).*$/]
    }
  },
  resolve: {
    alias: {
      'notion-compat': path.resolve(__dirname, '../notion-compat/src/index.ts'),
      'notion-utils': path.resolve(__dirname, '../notion-utils/src/index.ts'),
      'notion-types': path.resolve(__dirname, '../notion-types/src/index.ts')
    }
  }
})
