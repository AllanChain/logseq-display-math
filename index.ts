import '@logseq/libs'
import type {KatexOptions} from 'katex'

function main () {
  logseq.useSettingsSchema([
    {
      title: 'KaTeX Macros',
      description: 'LaTeX macros [with KaTeX](https://katex.org/docs/options)',
      key: 'macros',
      type: 'object',
      default: {
        '\\differentialD': '\\mathrm{d}',
      },
    },
  ])
  logseq.Experiments.registerExtensionsEnhancer('katex', async (katex) => {
    const render = katex.render
    katex.render = (expression: string, baseNode: Node, options: KatexOptions) => {
      if (!options.displayMode) {
        expression = '\\displaystyle ' + expression
      }
      options.macros = {
        ...options.macros,
        ...logseq.settings?.macros,
      }
      return render(expression, baseNode, options)
    }
  })
}

logseq.ready(main).catch(console.error)
