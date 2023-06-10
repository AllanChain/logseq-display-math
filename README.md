<h1>
  <img src="icon.svg" width="40">
  logseq-display-math
</h1>

Make all math render in display style.

![screenshot](https://github.com/AllanChain/logseq-display-math/assets/36528777/14bf5b4f-3df5-4c11-af7d-21dd3d7838d6)

## How it works

This is a simple plugin which hijacks `katex`'s `render` function to add `\displaystyle` to every inline formula.

## How to temporarily disable this

Just add `\textstyle` in the front: `\textstyle \sum_{n=1}^{\infty}\frac{1}{n^s}`
