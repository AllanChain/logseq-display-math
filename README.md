<p align=center>
  <img src="icon.svg" width="100">
</p>
<h1 align=center>
  Logseq Display Math
</h1>
<p align=center>
  <em>Tweak LaTeX rendering and styling</em>
</p>

![screenshot](https://github.com/AllanChain/logseq-display-math/assets/36528777/c8d92265-82f9-4858-997a-8a3b7342700e)

## Features

- Make all math render in display style.
- Configurable KaTeX macros in settings.

## How it works

This is a simple plugin which hijacks `katex`'s `render` function to add `\displaystyle` and user-defined macros.

## How to temporarily disable `\displaystyle`

Just add `\textstyle` in the front: `\textstyle \sum_{n=1}^{\infty}\frac{1}{n^s}`
