import { defineNuxtModule, addImports, createResolver } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'ggc30',
    configKey: 'ggc30',
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup() {
    const resolver = createResolver(import.meta.url)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addImports({
      name: 'esTest', // name of the composable to be used
      from: resolver.resolve('./runtime/composable'), // path of composable
    })
  },
})
