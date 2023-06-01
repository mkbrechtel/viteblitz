// read base.html from module directory
import { readFileSync } from 'fs'
import { resolve } from 'path'

const baseHTML = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Viteblitz</title>
  </head>
  <body>
    <script type="module" src="/src/main.js"></script>
    <div id="app"></div>
  </body>
</html>
`

const ViteBlitz = () => ({
    name: 'viteblitz',
    configureServer(server) {
      server.middlewares.use('/__viteblitz',(req, res, next) => {
          res.end(baseHTML);
        });
    },
  })

export { ViteBlitz }
