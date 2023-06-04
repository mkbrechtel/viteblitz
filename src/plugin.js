// import stuff to write to files asynchronously
import { promises as fs } from 'fs'

const baseHTML = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Viteblitz</title>
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
    return html.replace(
      /(<head>)/,
      `<head><script>
        // Check if the window is not within an iframe
        if (window.self === window.top) {
          // Get the current URL
          var oldUrl = window.location.pathname + window.location.search + window.location.hash;
        
          // Create the new URL with the old URL as a hash
          var newUrl = "/__viteblitz#" + oldUrl;
        
          // Redirect to the new URL
          window.location.href = newUrl;
        }
      </script>`,
    )
  },
})

export { ViteBlitz }
