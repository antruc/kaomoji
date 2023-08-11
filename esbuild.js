import fs from 'fs-extra'
import { parse } from 'node-html-parser'
import * as esbuild from 'esbuild'
import open from 'open'

process.env.NODE_ENV = process.argv[2] // eslint-disable-line

async function copyAndWrite(outdir, outfile) {
  await fs.copy('public', outdir)

  const html = await fs.readFile(`${outdir}/index.html`, 'utf8')
  const root = parse(html)

  const head = root.querySelector('head')
  head.insertAdjacentHTML(
    'beforeend',
    `  <link rel="stylesheet" href="app${outfile}.css" //>
`
  )

  const body = root.querySelector('body')
  body.insertAdjacentHTML(
    'beforeend',
    `  <script src="app${outfile}.js"></script>
`
  )

  const index = root.toString()
  await fs.writeFile(`${outdir}/index.html`, index)
}

if (process.env.NODE_ENV === 'development') { // eslint-disable-line
  copyAndWrite('www', '')

  let ctx = await esbuild.context({
    entryPoints: ['src/app.js'],
    bundle: true,
    target: ['es6'],
    external: ['*.svg'],
    define: { 'window.IS_DEVELOPMENT': 'true' },
    outdir: 'www'
  })

  await ctx.watch()
  console.log('Build finished, watching for changes...')

  await ctx.serve({
    servedir: 'www'
  })
  console.log('Local: http://localhost:8000')

  await open('http://localhost:8000')
} else {
  copyAndWrite('dist', '.min')

  await esbuild.build({
    entryPoints: ['src/app.js'],
    bundle: true,
    minify: true,
    target: ['es6'],
    external: ['*.svg'],
    define: { 'window.IS_DEVELOPMENT': 'false' },
    outfile: 'dist/app.min.js'
  })
  console.log('Build finished')
}
