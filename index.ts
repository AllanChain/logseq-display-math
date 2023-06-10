import '@logseq/libs'
import type {KatexOptions} from 'katex'

function main () {
  logseq.Experiments.registerExtensionsEnhancer('katex', async (katex) => {
    const render = katex.render
    katex.render = (expression: string, baseNode: Node, options: KatexOptions) => {
      if (!options.displayMode) {
        expression = '\\displaystyle ' + expression
      }
      return render(expression, baseNode, options)
    }
  })
}

logseq.ready(main).catch(console.error)
