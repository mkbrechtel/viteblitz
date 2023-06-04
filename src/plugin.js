// import stuff to write to files asynchronously
import { promises as fs } from 'fs'

import { redirectToViteBlitz } from './iframe.js'

const baseHTML = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <script>` + redirectToViteBlitz.toString() + `redirectToViteBlitz()</script>
    <meta charset="UTF-8" />
    <title>ViteBlitz</title>
  </head>
  <body>
    <script type="module" src="/src/app.js"></script>
    <div id="app"></div>
  </body>
</html>
`

const ViteBlitz = () => ({
  name: 'viteblitz',
  configureServer(server) {
    server.middlewares.use('/__viteblitz',(req, res, next) => {
      res.end(baseHTML);
    })
    server.ws.on('viteblitz:demo:write', (msg, client) => {
      console.log('Write from client:', msg) // Hey!
      // when msg.code is a string...
      if (typeof msg.code === 'string') {
        fs.writeFile('demo/components/Hello.md', msg.code)
      }
    })
  },
  transformIndexHtml(html) {
    var inspectScript = "<script>" + redirectToViteBlitz.toString() + "</script>"
    inspectScript += "<script>redirectToViteBlitz()</script>"
    return html.replace(/(<head>)/,"<head>" + inspectScript)
  },
})

export { ViteBlitz }
